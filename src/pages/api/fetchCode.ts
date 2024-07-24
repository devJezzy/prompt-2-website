// pages/api/readFile.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'http://localhost:5000/read-file'; // Adjust the URL if needed 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { filePath, contentJson } = req.body;

    if (!filePath || typeof filePath !== 'string') {
        return res.status(400).json({ error: 'filePath is required' });
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filePath ,contentJson }),
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
