import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Article.css";

interface ArticleProps {
  fileName: string;
  title: string;
  date: string;
}

export const Article = ({ fileName, title, date }: ArticleProps) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(`/markdown/${fileName}.md`).then((response) => {
      response.text().then((text) => {
        setMarkdown(text);
      });
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-full p-4">
        {/* <Link to="/" className="text-blue-400">
          Back to Home
        </Link> */}
        <h1
          id="title"
          className="text-center text-3xl font-bold leading-tight my-8"
        >
          {title}
        </h1>
        <span className="text-gray-400">{date}</span>
        <div className="prose lg:prose-xl">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
