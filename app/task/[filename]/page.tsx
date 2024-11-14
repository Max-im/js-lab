import { getTitle } from "@/utils";

export default function TaskPage({params}: {params: {filename: string}}) {
  return (
    <div>
      <h1>{getTitle(params.filename)}</h1>
    </div>
  )
}
