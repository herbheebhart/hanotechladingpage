// src/components/Tabs.tsx
import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Tab headers */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 -mb-px text-sm font-medium transition-colors duration-200 
              ${
                index === activeIndex
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-600 hover:text-orange-500"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
