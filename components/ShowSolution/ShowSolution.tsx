"use client"

import { Dialog, DialogTitle } from '@mui/material';
import { Editor } from '@monaco-editor/react';

export default function ShowSolution({ solution, onClose }: { solution: string, onClose: () => void }) {
  return (
    <div className="w-4/5 w-full">
      <Dialog onClose={onClose} open={true} maxWidth="md" fullWidth={true} >
        <DialogTitle>Solution</DialogTitle>

        <div className="w-full">
          <Editor
            height="40vh"
            defaultLanguage="javascript"
            value={solution}
            options={{
              readOnly: true,
              lineNumbers: 'off',
              tabSize: 2,
              minimap: { enabled: false },
              padding: { top: 0, bottom: 0 },
              scrollBeyondLastLine: false,
            }}
          />
        </div>
      </Dialog>
    </div>
  );
}