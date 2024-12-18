"use client"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from '@mui/material';
import { Editor } from '@monaco-editor/react';
import { ITask } from '@/types';

export default function ShowSolution({ task }: { task: ITask }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary id="solution">
          Show Solution
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Editor
              height="40vh"
              defaultLanguage="javascript"
              value={task.solution}
              options={{
                readOnly: true,
                lineNumbers: 'off',
                tabSize: 2,
                minimap: { enabled: false },
                padding: { top: 0, bottom: 0 },
                scrollBeyondLastLine: false,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}