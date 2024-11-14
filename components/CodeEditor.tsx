'use client';

import { useState } from "react";

export default function CodeEditor({className}: {className: string}) {
  const [activeTab, setActiveTab] = useState('code');

  return (
    <div>
        <div>
          <button onClick={() => setActiveTab('code')}>
            Code Editor
          </button>
          <button 
            onClick={() => setActiveTab('example')}
          >
            Example
          </button>
        </div>
        <div className={className}>
          {activeTab === 'code' ? (
            <div>Code Editor Content</div>
          ) : (
            <div>Example Content</div>
          )}
        </div>
      </div>
  )
}
