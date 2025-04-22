// File: src/components/RssSourceSelector.tsx
import React from 'react';

interface RssSourceSelectorProps {
  sources: string[];
  selectedSources: string[];
  onSourceToggle: (source: string) => void;
}

export const RssSourceSelector: React.FC<RssSourceSelectorProps> = ({
  sources,
  selectedSources,
  onSourceToggle
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">Filter by Source:</h3>
      <div className="flex flex-wrap gap-2">
        {sources.map(source => (
          <button
            key={source}
            onClick={() => onSourceToggle(source)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedSources.includes(source)
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {source}
          </button>
        ))}
      </div>
    </div>
  );
};
