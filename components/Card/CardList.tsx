import Card from './Card';
import { ITask } from '@/types';

export default function CardList({ tasks }: { tasks: ITask[] }) {
    return (
        <div className={`mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-3 justify-items-center`}>
            {tasks.map((task) => <Card task={task} key={task.slug} />)}
        </div>
    )
}
