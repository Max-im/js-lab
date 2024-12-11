import { IResult } from '@/types'
import { Alert, Dialog, DialogTitle } from '@mui/material'
import React from 'react'

export default function ResultsOutput({results, onClose}: {results: IResult[], onClose: () => void}) {
  let resultsData = [];
  if (results.every(result => result.passed)) {
    resultsData.push({passed: true, message: 'All tests passed'});
  } else {
    resultsData = results.map((test, i) => ({passed: test.passed, message: `Test ${i+1}: ${test.message}`}));
  }
  return (
    <div className="w-4/5">
      <Dialog onClose={onClose} open={true}>
          <DialogTitle>Checking Results:</DialogTitle>
          <div>
            {resultsData.map((result, i) => (
                <Alert key={i} severity={result.passed ? 'success' : 'error'}>{result.passed ? 'Passed' : result.message}</Alert>
            ))}
          </div>
        </Dialog>
    </div>
  )
}
