import {  use } from "react";
import fs from 'fs';
import path from 'path';
import Content from "./content";

export default function TaskPage({params}: {params: Promise<{filename: string}>}) {
  const { filename } = use(params);

  return (
    <Content filename={filename} />
  )
}

export async function generateStaticParams() {
  const folderPath = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(folderPath);

  return files.map((file) => ({
    filename: file.replace(/\.[^/.]+$/, '')
  }));
}