import DynamicComponent from "@/components/DynamicComponent";
import getResponse from "@/utils/geminiChat";
import getSitemap from "@/utils/sitemapCreator";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [filePath, setFilePath] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function test() {
    try {
      const user_prompt = "I want to create a portfolio website";
      // const res = await getSitemap(user_prompt);
      // const siteMap = JSON.parse(res);
      // const sections = siteMap["sections"]
      // console.log(sections) 
      // const res = await getResponse(user_prompt);
      // let clean = res.replace(/[^a-zA-Z0-9\-]/g, ''); // Remove all non-alphanumeric characters except hyphen (-)
      // clean = "hero/" + clean;
      // console.log(clean);
      // setFilePath(clean);
      setFilePath("footer/footer-5");
    } catch (err) {
      setError("Failed to fetch response.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    test();
  }, []); // Empty dependency array to run only once after mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return filePath ? <DynamicComponent filePath={filePath} /> : null;
};

export default HomePage;
