import { useState } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    router.push({
      pathname: '/WebBuilder',
      query: { text: text }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Enter Prompt</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Generetate Website
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
