import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import Link from 'next/link';
import { ITask } from '@/types';
import LinearProgress from '@mui/material/LinearProgress';

export default function TaskCard({task}: {task: ITask}) {
    return (
        <Box sx={{ width: { xs: '100%', sm: '49%', md: '23%' }, mb: 2 }}>
            <Link href={'/task/' + task.slug}>
                <Paper elevation={0}>
                    <CardContent>
                        <Typography gutterBottom className="bold" sx={{ fontSize: 14, mb: 2 }}>
                            {task.title}
                        </Typography>
                        <Typography variant="body2" sx={{fontSize: 10}} color="text.secondary">
                            Complexety level
                        </Typography>
                        <LinearProgress color='warning' variant="determinate" value={task.level / 3 * 100} />
                    </CardContent>
                </Paper>
            </Link>
        </Box>
    );
}
