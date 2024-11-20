import Hero from "@/components/Hero";
import TaskCard from "@/components/TaskCard";
import tasks from '../content';

export default function Home() {
  return (
    <div>
      <Hero first={tasks[0].slug} />
      <ul className="flex mt-5 justify-between">
        {tasks.map(task => <TaskCard key={task.index} task={task} />)}
      </ul>
    </div>
  );
}
