from dotenv import load_dotenv
load_dotenv()


from fastapi import FastAPI, Depends, Request
from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import os
import sqlite3
from urllib.parse import urlencode

app = FastAPI()

# Enable CORS for frontend or local testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Replace with your real Azure AD App credentials
CLIENT_ID = os.getenv("AZURE_CLIENT_ID", "your-client-id")
CLIENT_SECRET = os.getenv("AZURE_CLIENT_SECRET", "your-client-secret")
REDIRECT_URI = os.getenv("AZURE_REDIRECT_URI", "http://localhost:8000/callback")
TENANT = os.getenv("AZURE_TENANT_ID", "common")
AUTHORITY = f"https://login.microsoftonline.com/{TENANT}"
SCOPES = ["https://graph.microsoft.com/.default"]

db = sqlite3.connect("metadata.db", check_same_thread=False)
db.execute("""
CREATE TABLE IF NOT EXISTS tokens (
    tenant_id TEXT PRIMARY KEY,
    access_token TEXT,
    refresh_token TEXT
)
""")

# Redirect user to Microsoft login
@app.get("/login")
def login():
    params = {
        "client_id": CLIENT_ID,
        "response_type": "code",
        "redirect_uri": REDIRECT_URI,
        "response_mode": "query",
        "scope": "openid offline_access User.Read Group.Read.All",
    }
    return RedirectResponse(f"{AUTHORITY}/oauth2/v2.0/authorize?{urlencode(params)}")

# OAuth2 callback handler
@app.get("/callback")
def callback(code: str):
    token_url = f"{AUTHORITY}/oauth2/v2.0/token"
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDIRECT_URI,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "scope": "offline_access User.Read Group.Read.All",
    }
    response = httpx.post(token_url, data=data)
    token_data = response.json()
    access_token = token_data.get("access_token")
    refresh_token = token_data.get("refresh_token")

    # Get user's tenant info from Graph
    user_info = httpx.get(
        "https://graph.microsoft.com/v1.0/me",
        headers={"Authorization": f"Bearer {access_token}"}
    ).json()
    tenant_id = user_info.get("id")

    # Store in DB
    db.execute("REPLACE INTO tokens (tenant_id, access_token, refresh_token) VALUES (?, ?, ?)",
               (tenant_id, access_token, refresh_token))
    db.commit()

    return JSONResponse({"message": "Login successful", "tenant_id": tenant_id})

# Sample protected endpoint
@app.get("/workspaces")
def list_workspaces(tenant_id: str):
    cursor = db.execute("SELECT access_token FROM tokens WHERE tenant_id = ?", (tenant_id,))
    row = cursor.fetchone()
    if not row:
        return JSONResponse({"error": "Tenant not authenticated"}, status_code=401)

    access_token = row[0]
    graph_url = "https://graph.microsoft.com/v1.0/groups?$filter=resourceProvisioningOptions/Any(x:x eq 'Team')"
    response = httpx.get(graph_url, headers={"Authorization": f"Bearer {access_token}"})

    return response.json()

# More endpoints can follow: /lakehouses, /tables, /stale-tables, etc.
