import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_BASE_URL } from "../../../globalConfig";
import { Technology } from "./Technology";

const WebDevTech = () => {
  return (
    <div className="w-full max-w-lg lg:w-5/12">
      <h3 className="text-2xl mt-8 text-center font-bold">Web Development</h3>
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink={`${IMG_BASE_URL}/nodejs.png`}
            name="Node.js"
          />
          <Technology
            direction="reverse"
            imgLink={`${IMG_BASE_URL}/nestjs.svg`}
            name="NestJS"
          />
        </div>
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink={`${IMG_BASE_URL}/react.png`}
            name="React"
          />
          <Technology
            direction="reverse"
            imgLink={`${IMG_BASE_URL}/typescript.png`}
            name="Typescript"
          />
        </div>
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink={`${IMG_BASE_URL}/tailwind.png`}
            name="Tailwind CSS"
          />
          <Technology
            direction="reverse"
            imgLink={`${IMG_BASE_URL}/dotnet.png`}
            name=".NET"
          />
        </div>
      </div>
    </div>
  );
};

const DataTech = () => {
  return (
    <div className="w-full max-w-lg lg:w-5/12">
      <h3 className="text-2xl mt-8 text-center font-bold">Data Engineering</h3>

      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink={`${IMG_BASE_URL}/spark.png`}
            name="Spark"
          />
          <Technology
            direction="reverse"
            imgLink={`${IMG_BASE_URL}/scala.png`}
            name="Scala"
          />
        </div>
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink={`${IMG_BASE_URL}/databricks.png`}
            name="Databricks"
          />
          <Technology
            direction="reverse"
            imgLink={`${IMG_BASE_URL}/adf.jpg`}
            name="Azure Data Factory"
          />
        </div>
      </div>
    </div>
  );
};

export const Technologies = () => {
  return (
    <>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faHammer}
          size={"2x"}
          color="gray"
          className="pr-4"
        />
        <h3 className="text-md font-bold text-gray-500">Recent Technologies</h3>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <WebDevTech />
        <DataTech />
      </div>
    </>
  );
};
