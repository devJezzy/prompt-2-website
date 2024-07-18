import DynamicComponent from "@/components/DynamicComponent";
import getResponse from "@/utils/geminiChat";
import getSitemap from "@/utils/sitemapCreator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [filePaths, setFilePaths] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function test(text: string) {
    try {
      const user_prompt = text;
      const siteMapRes = await getSitemap(user_prompt);
      const siteMap = JSON.parse(siteMapRes);
      const sections = siteMap["sections"];
      console.log(sections);

      const paths: string[] = [];

      for (const section of sections) {
        const res = await getResponse(user_prompt, section);
        let path = res.replace(/[^a-zA-Z0-9\-]/g, "");
        path = `${section}/${path}`;
        paths.push(path);
        console.log(path);
      }

      setFilePaths(paths);
    } catch (err) {
      setError("Failed to fetch response.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchQuery = async () => {
      const { text } = router.query;
      const query = String(text);
      if (typeof text === "string") {
        console.log("Text entered:", text);
      }
      if (text) {
        await test(query);
      }
    };

    fetchQuery();
  }, [router.query]);``

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {filePaths.map((filePath, index) => (
        <DynamicComponent key={index} filePath={filePath} />
      ))}
    </div>
  );
};

export default HomePage;