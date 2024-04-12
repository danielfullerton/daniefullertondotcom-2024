import { Link } from "react-router-dom";
import { ArticleMetadataEntry } from "../articles-metadata";

interface ArticleEntryProps {
  articleMetadataEntry: ArticleMetadataEntry;
}

export const ArticleEntry = ({ articleMetadataEntry }: ArticleEntryProps) => {
  const { title, month, day, year, icon } = articleMetadataEntry;

  return (
    <Link to="/articles/test-article" className="text-xl">
      <div className="shadow-md border-gray-300 border rounded-lg px-4 py-2 flex items-center justify-between">
        <div className="flex">
          <img src={icon} alt={title} className="w-8 mr-2" />
          {title}
        </div>
        <span className="text-gray-500 text-sm">
          {month} {day}, {year}
        </span>
      </div>
    </Link>
  );
};
