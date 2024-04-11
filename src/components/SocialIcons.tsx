import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialIcons = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex justify-between w-40">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          color="gray"
          onClick={() => handleClick("https://github.com/danielfullerton")}
          className="cursor-pointer hover:text-blue-400"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          color="gray"
          onClick={() =>
            handleClick("https://www.linkedin.com/in/daniel-frank-fullerton/")
          }
          className="cursor-pointer hover:text-blue-400"
        />
        <FontAwesomeIcon
          icon={faMailBulk}
          size="2x"
          color="gray"
          onClick={() => handleClick("mailto:dan.frank.fullerton@gmail.com")}
          className="cursor-pointer hover:text-blue-400"
        />
      </div>
    </div>
  );
};
