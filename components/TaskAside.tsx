import { ITask } from "@/types";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function TaskAside({tasks, current}: {current: string, tasks: ITask[]}) {
    return (
        <Paper sx={{flex: '0 0 22%'}} className="p-4 bg-white shadow-md" elevation={0}>
            <Box sx={{mb: 3, display: 'flex', justifyContent: 'center'}}>
                <Link href="/"><Image src="/logo.jpg" alt="JS-Lab" width={60} height={60} /></Link>
            </Box>
            <ul className="list-none p-0 m-0">
                {tasks.map(task => (
                    <li key={task.index} className="mb-2">
                        <Link href={'/task/' + task.slug}>
                        <Typography className={current === task.slug ? 'text-black font-bold' : 'text-gray-500'}>{task.title}</Typography>
                        </Link>
                    </li>))
                }
            </ul>
        </Paper>
    )
}
