import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import Link from 'next/link';
import { ITask } from '@/types';
import LinearProgress from '@mui/material/LinearProgress';

export default function TaskCard({task}: {task: ITask}) {
    return (
        <Box sx={{width: '23%'}}>
            <Link href={'/task/' + task.slug}>
                <Paper>
                    <CardContent>
                        <Typography gutterBottom className="bold" sx={{ fontSize: 14, mb: 2 }}>
                            {task.title}
                        </Typography>
                        <Typography variant="body2" sx={{fontSize: 10}} color="text.secondary">
                            Complexety level
                        </Typography>
                        <LinearProgress color='warning' variant="determinate" value={task.level / 5 * 100} />
                    </CardContent>
                </Paper>
            </Link>
        </Box>
    );
}
