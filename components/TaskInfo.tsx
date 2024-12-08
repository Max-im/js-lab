import { ITask } from "@/types";
import { Box, Chip, Typography } from "@mui/material";

export default function TaskInfo({task}: {task: ITask}) {
  return (
    <>
        <Typography variant="h4" className="text-gray-600">{task.title}</Typography>
        <Box mb={1}>
            <ul>
                {task.tags.map(tag => <li key={tag}>
                    <Chip 
                        variant='outlined'
                        sx={{ mr: 1, fontSize: 9, fontWeight: 600 }}
                        size="small"
                        className='bg-white text-black'
                        label={tag.toUpperCase()}
                      />
                </li>)}
            </ul>
        </Box>
        <Typography>{task.description}</Typography>
        {task.examples.length > 0 && <Box sx={{mt:1, mb:2}}>
          <Typography variant="h6" className="text-gray-600">Examples</Typography>
          <Box sx={{p: 1, pl: 2,  bgcolor: '#f9f9f9', border: '1px solid f1f1f1', fontSize: 13}}>
              <ul>
                  {task.examples.map((example, i) => <li key={i}>
                      <code>{example}</code>
                  </li>)}
              </ul>
          </Box>
        </Box>}
    </>
  )
}
