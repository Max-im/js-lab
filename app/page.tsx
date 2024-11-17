import Hero from "@/components/Hero";
import TaskCard from "@/components/TaskCard";
import { getTasks } from '@/utils';

export default function Home() {
  const tasks = getTasks();

  return (
    <div>
      <Hero />
      <ul className="flex mt-5 justify-between">
        {tasks.map(task => <TaskCard key={task.index} task={task} />)}
      </ul>
    </div>
  );
}
