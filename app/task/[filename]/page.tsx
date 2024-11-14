import { getTitle } from "@/utils";
import styles from './page.module.css';
import TaskAside from "@/components/TaskAside";
import CodeEditor from "@/components/CodeEditor";

export default function TaskPage({params: {filename}}: {params: {filename: string}}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <TaskAside current={filename} />
      </div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{getTitle(filename)}</h1>
        </div>
        <CodeEditor className={styles.codeEditor} />
      </div>
    </div>
  )
}
