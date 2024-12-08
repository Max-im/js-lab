import { Button } from '@mui/material'
import Link from 'next/link'

export default function StartBtn() {
    return (
        <Link href={'/task'}>
            <Button className="accent hover:bg-emerald-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 shadow">
                Start Now
            </Button>
        </Link>
    )
}
