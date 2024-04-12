import { IMG_BASE_URL } from "../../globalConfig";

export const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="md:w-6/12">
        <div className="py-4">
          <h1 className="text-4xl font-extrabold text-center md:hidden">
            Hi there, I'm <span className="text-red-400">Daniel</span>.
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-xl max-w-64"
            src={`${IMG_BASE_URL}/profile.png`}
            alt="Daniel Fullerton"
          />
        </div>
      </div>

      <div className="md:w-6/12">
        <h1 className="text-4xl font-extrabold pt-8 leading-tight">
          <span className="hidden md:inline-block m-0">
            Hi there, I'm <span className="text-red-400">Daniel</span>.&nbsp;
          </span>
          I'm a Full-Stack Dev & Data Engineering Pro.
        </h1>
        <p className="text-md mt-6 text-gray-600 leading-loose">
          I'm a highly versatile software engineer with a focus on full-stack
          web development and data engineering. I'm currently working at
          Microsoft doing both every day, building out big data pipelines, APIs,
          serverless jobs and web apps. I'm very passionate about user
          experience, optimization, and automation, and I'm constantly learning
          new things.
        </p>
      </div>
    </div>
  );
};
