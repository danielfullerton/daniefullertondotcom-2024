import { Link } from "react-router-dom";
import { ArticleMetadataEntry } from "../articles-metadata";
import { getArticleDate } from "../util/date";

interface ArticleEntryProps {
  articleMetadataEntry: ArticleMetadataEntry;
}

export const ArticleEntry = ({ articleMetadataEntry }: ArticleEntryProps) => {
  const { title, month, day, year, path } = articleMetadataEntry;

  return (
    <Link to={`/articles/${path}`} className="text-xl">
      <div className="shadow-md border-gray-300 border rounded-lg px-4 py-2 flex items-center justify-between">
        <div className="flex">
          <span>{title}</span>
        </div>
        <span className="text-gray-500 text-sm text-right">
          {getArticleDate(month, day, year)}
        </span>
      </div>
    </Link>
  );
};
