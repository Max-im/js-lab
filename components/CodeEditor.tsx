'use client';

import { useRef, useState  } from "react";
import Editor from '@monaco-editor/react';
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function CodeEditor({className, task, next, run}: {className: string, task: string, next: string | null, run: any}) {
  const [activeTab, setActiveTab] = useState('code');

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    run(editorRef?.current?.getValue());
  }

  return (
    <div>
        <div>
          <Button onClick={() => setActiveTab('code')}>
            Code Editor
          </Button>
          <Button 
            onClick={() => setActiveTab('example')}
          >
            Show Solution
          </Button>
        </div>
        <div className={className}>
          {activeTab === 'code' ? (
            <>
              <Typography>Write your solution</Typography>
              <Editor height="40vh" defaultLanguage="javascript" defaultValue={task} 
              onMount={handleEditorDidMount}/>
            </>
          ) : (
            <>
              <Typography>Solution Example</Typography>
              <Editor height="40vh" defaultLanguage="javascript" defaultValue={task} />
            </>
          )}
        </div>
          <Button onClick={showValue} variant="contained">Run</Button>
          <Button disabled={!next} variant="contained"><Link href={'/task/' + next}>Next</Link></Button>
      </div>
  )
}
