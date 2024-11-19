'use client';

import { useRef, useState } from "react";
import { getTasks } from "@/utils";
import styles from './page.module.css';
import TaskAside from "@/components/TaskAside";
import ResultsOutput from "@/components/ResultsOutput";
import { Box, Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { IResult } from "@/types";
import Link from "next/link";
import { Editor } from "@monaco-editor/react";


export default function TaskPage({params: {filename}}: {params: {filename: string}}) {
  const [results, setResults] = useState<IResult[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const editorRef = useRef(null);
  const tasks = getTasks();
  const task = tasks.find(task => task.slug === filename);

  if (!task) {
    return (
      <div>
        NOT found
      </div>
    )
  }

  const next = tasks[task!.index] ? tasks[task!.index].slug : null;
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  const check = () => {
    const result = task?.test(editorRef?.current?.getValue());
    if (result) {
      setResults(result);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <TaskAside tasks={tasks} current={task!.slug} />
      </div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{task!.title}</h1>
        </div>
        <div className={styles.codeEditor}>
          <Typography>Write your solution</Typography>
          <Editor height="40vh" defaultLanguage="javascript" defaultValue={task!.code} onMount={handleEditorDidMount} />
        </div>
        <div>
          <Button onClick={check} variant="contained">Run</Button>
          <Button disabled={!next} variant="outlined"><Link href={'/task/' + next}>Next</Link></Button>
        </div>
        <div className={styles.description}>
          <Typography>{task!.description}</Typography>
        </div>
        <Button variant="outlined" onClick={() => setOpen(true)}>Show Example</Button>
        <Dialog onClose={() => setOpen(false)} open={open}>
          <DialogTitle>Solution Example</DialogTitle>
          <Box sx={{minWidth: '500px !important'}}>
            <Editor height="40vh" defaultLanguage="javascript" value={task!.solution} />
          </Box>
        </Dialog>
        <ResultsOutput results={results} />
      </div>
    </div>
  )
}
