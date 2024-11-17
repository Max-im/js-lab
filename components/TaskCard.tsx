import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import Link from 'next/link';

export default function TaskCard({task}: {task: any}) {
    return (
        <li>
            <Link href={'/task/' + task.slug}>
                <Box sx={{ minWidth: 150, width: '20%' }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                {task.title}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Level: {task.level}</Typography>
                            <ul>
                                {task.tags.map((tag: string) => <li key={tag}><Chip label={tag} variant="outlined" /></li>)}
                            </ul>
                        </CardContent>
                    </Card>
                </Box>
            </Link>
        </li>
    );
}
