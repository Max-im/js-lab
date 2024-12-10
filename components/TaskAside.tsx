'use client';

import { ITask } from "@/types";
import { Box, Paper } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Image from "next/image";
import Link from "next/link";

export default function TaskAside({ tasks, current }: { current: string, tasks: ITask[] }) {
    return (
        <Paper sx={{ flex: '0 0 22%', pt: 2 }} elevation={0}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Link href="/"><Image src="/logo.png" alt="JS-Lab" width={60} height={60} /></Link>
            </Box>
            <List>
                {tasks.map(task => (
                    <ListItem disablePadding key={task.index}>
                        <Link href={`/task/${task.slug}`} style={{ width: '100%' }}>
                            <ListItemButton>
                                <ListItemText primary={task.title} className={current === task.slug ? 'text-black font-bold' : 'text-gray-500'}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
                <Divider />
            </List>
        </Paper>
    )
}
