import { getTasks, getTitle } from "@/utils";
import Link from "next/link";

export default function TaskAside({current}: {current: string}) {
    const files = getTasks();
    return (
        <ul>
            {files.map(file => (
                <li key={file}>
                    {current === file ? '> ' : ''}
                    <Link href={'/task/' + file}>{getTitle(file)}</Link>
                </li>))
            }
        </ul>
    )
}
