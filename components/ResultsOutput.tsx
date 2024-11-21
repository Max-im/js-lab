import { IResult } from '@/types'
import { Alert, Box, Dialog, DialogTitle } from '@mui/material'
import React from 'react'

export default function ResultsOutput({results, onClose}: {results: IResult[], onClose: () => void}) {
  let resultsData = [];
  if (results.every(result => result.passed)) {
    resultsData.push({passed: true, message: 'All tests passed'});
  } else {
    resultsData = results;
  }
  return (
    <div>
      <Dialog onClose={onClose} open={true}>
          <DialogTitle>Checking Results:</DialogTitle>
          <Box sx={{minWidth: '500px !important'}}>
            {resultsData.map((result, i) => (
                <Alert key={i} severity={result.passed ? 'success' : 'error'}>{result.passed ? 'Passed' : result.message}</Alert>
            ))}
          </Box>
        </Dialog>
    </div>
  )
}
