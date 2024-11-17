import { getTasks } from "@/utils";
import styles from './page.module.css';
import TaskAside from "@/components/TaskAside";
import CodeEditor from "@/components/CodeEditor";

export default function TaskPage({params: {filename}}: {params: {filename: string}}) {
  const tasks = getTasks();
  const task = tasks.find(task => task.slug === filename);
  const next = tasks[task!.index] ? tasks[task!.index].slug : null;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <TaskAside tasks={tasks} current={task!.slug} />
      </div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{task!.title}</h1>
        </div>
        <CodeEditor
          className={styles.codeEditor}
          task={task!.code}
          next={next}
          />
      </div>
    </div>
  )
}
