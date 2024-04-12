import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArticlesMetadata } from "../../articles-metadata";
import { ArticleEntry } from "../ArticleEntry";

export const ArticleList = () => {
  return (
    <>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faBook}
          size={"2x"}
          color="gray"
          className="pr-4"
        />
        <h3 className="text-md font-bold text-gray-500">Blog Posts</h3>
      </div>

      <div className="mt-4">
        <div className="overflow-y-auto max-h-64">
          {ArticlesMetadata.map((entry) => (
            <div className="mb-4" key={entry.title}>
              <ArticleEntry articleMetadataEntry={entry} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
