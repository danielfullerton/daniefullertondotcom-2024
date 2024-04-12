import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_BASE_URL } from "../../../globalConfig";
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
          img={`${IMG_BASE_URL}/msft.png`}
        />
        <WorkExperience
          title="Software Engineer"
          dates="2020 - 2022"
          location="T-Mobile"
          img={`${IMG_BASE_URL}/tmobile.png`}
        />
        <WorkExperience
          title="Software Applications Developer"
          dates="2017 - 2020"
          location="Randstad"
          img={`${IMG_BASE_URL}/randstad.png`}
        />
      </div>
    </>
  );
};
