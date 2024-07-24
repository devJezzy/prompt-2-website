const fetchData = async (filePath: string,contentJson:object): Promise<string> => {
    try {
        const response = await fetch('/api/fetchCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filePath , contentJson})
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.text();
        console.log(data);
        return data;
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error('Unknown error occurred');
        }
        // You might want to throw the error or return a fallback value
        throw err;
    }
};

export default fetchData;
