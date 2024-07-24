import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetTripProps } from '@/context/TripContext';
import getCode from '@/utils/getCode';

const IndexPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const { setUserPrompt } = GetTripProps();
 

    // const [fileContent, setFileContent] = useState<string | null>(null);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => { 
       
        // Dynamic function to call test based on page name
async function callTestFunction(pageName : string) {
  try {
    console.log("--------------------------------------") 
      // Dynamic import based on page name
      const component = await import(`@/components/collection/${pageName}`);
      
      // Call the test function if it exists
      if (component && typeof component.getContentJSON === 'function') {
          const test=component.getContentJSON();
          getCode("test/test-1.tsx",test)
          console.log(test)
      } else {
          console.log(`No test function found in ${pageName}`);
      }
  } catch (error) {
      console.error(`Error importing ${pageName}:`, error); 
  } 
}

// Determine the current page dynamically
const currentPage = "test/test-1"; // Example: This should be set dynamically
callTestFunction(currentPage);

    }, []);

  const handleSubmit = () => {
    setUserPrompt(text)
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
