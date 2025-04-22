import streamlit as st
import webbrowser

st.set_page_config(page_title="Fabriclens", layout="centered")

st.title("🔍 Fabriclens")
st.write("Explore your Microsoft Fabric metadata.")

if st.button("🔐 Login with Microsoft"):
    login_url = "http://127.0.0.1:8000/login"
    st.write("Redirecting to Microsoft login...")
    # Open login in a new browser tab
    webbrowser.open_new_tab(login_url)
