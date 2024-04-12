import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Article.css";

interface ArticleProps {
  fileName: string;
  title: string;
}

export const Article = ({ fileName, title }: ArticleProps) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(`/markdown/${fileName}`).then((response) => {
      response.text().then((text) => {
        setMarkdown(text);
      });
    });
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};
