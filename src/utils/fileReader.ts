import { promises as fs } from 'fs';
import path from 'path';

export async function readFileContent(fileName: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), fileName);
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading the file:', err);
    return '';
  }
}
