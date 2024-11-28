'use client';

import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import TaskAside from "@/components/TaskAside";
import ResultsOutput from "@/components/ResultsOutput";
import { Box, Button, Typography } from "@mui/material";
import { IResult } from "@/types";
import Link from "next/link";
import { Editor } from "@monaco-editor/react";
import tasks from '../../../content';
import TaskInfo from "@/components/TaskInfo";
import ShowSolution from "@/components/ShowSolution";
import { editor as monacoEditor } from "monaco-editor";

export default function Content({filename}: {filename: string}) {
  const [results, setResults] = useState<IResult[]>([]);
  const editorRef = useRef<monacoEditor.IStandaloneCodeEditor | null>(null);
  const task = tasks.find(task => task.slug === filename);
  const router = useRouter();

  if (!task) {
    router.replace('/404');
    return null;
  }

  const next = tasks[task.index] ? tasks[task.index].slug : null;

  function handleEditorDidMount(editor: monacoEditor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  const check = () => {
    if (!editorRef.current) return;
    const editor = editorRef.current;
    const result = task?.test(editor.getValue());
    if (result) {
      setResults(result);
    }
  }

  const onClose = () => (setResults([]));

  return (
    <Box className={styles.container}>
      <TaskAside tasks={tasks} current={task.slug} />
      <Box className={styles.content}>
        <TaskInfo task={task} />
        <Box className={styles.codeEditor}>
          <Typography sx={{mb: 1}} variant="body2">Write your solution</Typography>
          <Editor
            height="40vh"
            defaultLanguage="javascript"
            defaultValue={task.code}
            options={{  
              minimap: { enabled: false }, 
              padding: { top: 0, bottom: 0 },
              scrollBeyondLastLine: false, 
            }}
            onMount={handleEditorDidMount} />
        </Box>
        <Box sx={{mt:2, mb: 3}} className="flex justify-between">
          <Button onClick={check} className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" variant="contained">Run</Button>
          <Button disabled={!next} style={{backgroundColor: 'white'}} variant="outlined"><Link href={'/task/' + next}>Next</Link></Button>
        </Box>
        
        <ShowSolution task={task} />
        {results.length > 0 && <ResultsOutput results={results} onClose={onClose} />
        }
      </Box>
    </Box>
  )
}
