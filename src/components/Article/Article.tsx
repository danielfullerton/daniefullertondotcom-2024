import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../globalConfig";
import "./Article.css";

interface ArticleProps {
  fileName: string;
  title: string;
  date: string;
  icon: string;
  description: string;
}

export const Article = ({
  fileName,
  title,
  date,
  icon,
  description,
}: ArticleProps) => {
  const [markdown, setMarkdown] = useState<string>("");

  const fetchAndSetMarkdown = () => {
    fetch(`/markdown/${fileName}.md`).then((response) => {
      response.text().then((text) => {
        const withImgLinks = text.replace(/\!\!BASE_URL\!\!/gim, IMG_BASE_URL);
        setMarkdown(withImgLinks);
      });
    });
  };

  useEffect(() => {
    fetchAndSetMarkdown();

    if (import.meta.hot) {
      import.meta.hot.on("markdown-update", () => {
        fetchAndSetMarkdown();
      });
    }
  }, []);

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={icon} />
      </Helmet>
      <div className="max-w-full p-4">
        <Link to="/" className="text-blue-400">
          Back to Home
        </Link>
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
