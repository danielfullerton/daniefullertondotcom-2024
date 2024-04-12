import { Divider } from "../components/Divider";
import { ArticleList } from "../components/containers/ArticleList";
import { Intro } from "../components/containers/Intro";
import { SocialIcons } from "../components/containers/SocialIcons";
import { Technologies } from "../components/containers/Technology/Technologies";
import { WorkExperiences } from "../components/containers/WorkExperience/WorkExperiences";

export const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="p-8 max-w-5xl">
        <Intro />

        <Divider />

        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-6/12">
            <WorkExperiences />
          </div>
          <Divider className="md:hidden" />
          <div className="md:w-6/12">
            <ArticleList />
          </div>
        </div>

        <Divider />

        <Technologies />

        <Divider />

        <SocialIcons />
      </div>
    </div>
  );
};
