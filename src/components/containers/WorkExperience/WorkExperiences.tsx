import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkExperience } from "./WorkExperience";

export const WorkExperiences = () => {
  return (
    <>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faBriefcase}
          size={"2x"}
          color="gray"
          className="pr-4"
        />
        <h3 className="text-md font-bold text-gray-500">Work Experience</h3>
      </div>

      <div className="mt-4">
        <WorkExperience
          title="Software Engineer"
          dates="2022 - Present"
          location="Microsoft"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomToXdaITnDNh_gfzvynzTWnrpkleOrZpsdIOTAYPWA&s"
        />
        <WorkExperience
          title="Software Engineer"
          dates="2020 - 2022"
          location="T-Mobile"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIz9mtgLNC7NDZHlod0aQQ0wY6vx-h99yDkU75pAZbw&s"
        />
        <WorkExperience
          title="Software Applications Developer"
          dates="2017 - 2020"
          location="Randstad"
          img="https://www.randstadusa.com/themes/custom/bluex/src/assets/img/logo-bluex.png"
        />
      </div>
    </>
  );
};
