"use client"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from '@mui/material';
import { Editor } from '@monaco-editor/react';
import { ITask } from '@/types';

export default function ShowSolution({task}: {task: ITask}) {
  return (
    <Accordion>
      <AccordionSummary id="solution">
        Show Solution
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{minWidth: '500px !important'}}>
            <Editor height="40vh" defaultLanguage="javascript" value={task.solution} />
          </Box>
      </AccordionDetails>
    </Accordion>
  );
}