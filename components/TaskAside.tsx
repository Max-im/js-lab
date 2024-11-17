import Link from "next/link";

export default function TaskAside({tasks, current}: {current: string, tasks: any[]}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.index}>
                    {current === task.slug ? '> ' : ''}
                    <Link href={'/task/' + task.slug}>{task.title}</Link>
                </li>))
            }
        </ul>
    )
}
