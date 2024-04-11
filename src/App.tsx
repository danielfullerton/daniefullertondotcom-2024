import "./App.css";
import { Divider } from "./components/Divider";
import { Intro } from "./components/Intro";
import { SocialIcons } from "./components/SocialIcons";
import { Technologies } from "./components/Technologies";
import { WorkExperiences } from "./components/WorkExperiences";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="p-8 max-w-5xl">
          <Intro />
          <Divider />
          <WorkExperiences />
          <Divider />
          <Technologies />
          <Divider />
          <SocialIcons />
        </div>
      </div>
    </>
  );
}

export default App;
