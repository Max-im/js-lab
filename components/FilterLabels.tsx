"use client"

import { ITaskLevel } from '@/types';
import { Box, Chip } from '@mui/material';

export default function FilterLabels({levels, handleClick}: {levels: ITaskLevel[], handleClick: (level: ITaskLevel) => void}) {
  return (
    <Box sx={{ mt: 2 }}>
        <ul className="flex">
          {levels.map(level => (
            <li key={level.name}>
              <Chip 
                variant={level.current ? 'filled' : 'outlined'}
                sx={{ mr: 1 }}
                size="small"
                className={level.current ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white' : 'bg-white text-black'}
                label={level.name.toUpperCase()}
                onClick={() => handleClick(level)}
              />
            </li>)
        )}
        </ul>
      </Box>
  );
}