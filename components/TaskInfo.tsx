import { ITask } from "@/types";
import { Box, Chip, Typography } from "@mui/material";

export default function TaskInfo({task}: {task: ITask}) {
  return (
    <>
        <Typography variant="h3" className="text-gray-600" sx={{mb:1}}>{task.title}</Typography>
        <Typography>{task.description}</Typography>
        <Box sx={{mt:1, mb:2}}>
            <ul>
                {task.tags.map(tag => <li key={tag}>
                    <Chip 
                        variant='outlined'
                        sx={{ mr: 1 }}
                        size="small"
                        className='bg-white text-black'
                        label={tag.toUpperCase()}
                        />
                </li>)}
            </ul>
        </Box>
    </>
  )
}
