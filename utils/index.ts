import fs from 'fs';
import path from 'path';

export const getTasks = () => {
    const folderPath = path.join(process.cwd(), 'tasks');
    const files = fs.readdirSync(folderPath);
    files.sort();
    return files.map(file => getFilename(file));
}

export const getFilename = (filename: string) => {
    return filename.split('.')[0];
}

export const getTitle = (filename: string) => {
    return getFilename(filename).slice(3).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}