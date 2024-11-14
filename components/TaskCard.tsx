import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TaskCard({card}: {card: string}) {
    return (
        <Box sx={{ minWidth: 150, width: '20%' }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {card}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Level: </Typography>
                    <Typography variant="body2">description</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
