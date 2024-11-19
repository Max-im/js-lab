import { IResult } from '@/types'
import { Alert } from '@mui/material'
import React from 'react'

export default function ResultsOutput({results}: {results: IResult[]}) {
  return (
    <div>
        {results.map((result, i) => (
            <Alert key={i} severity={result.passed ? 'success' : 'error'}>{result.passed ? 'Passed' : result.message}</Alert>
        ))}
    </div>
  )
}
