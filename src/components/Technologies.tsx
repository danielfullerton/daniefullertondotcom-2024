import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Technology } from "./Technology";

const WebDevTech = () => {
  return (
    <div className="w-full max-w-lg lg:w-5/12">
      <h3 className="text-2xl mt-8 text-center font-bold">Web Development</h3>
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
            name="Node.js"
          />
          <Technology
            direction="reverse"
            imgLink="https://nestjs.com/img/logo-small.svg"
            name="NestJS"
          />
        </div>
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            name="React"
          />
          <Technology
            direction="reverse"
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            name="Typescript"
          />
        </div>
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            name="Tailwind CSS"
          />
          <Technology
            direction="reverse"
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png"
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
            imgLink="https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_spark_logo_icon_170560.png"
            name="Spark"
          />
          <Technology
            direction="reverse"
            imgLink="https://avatars.githubusercontent.com/u/57059?s=280&v=4"
            name="Scala"
          />
        </div>
        <div className="flex justify-between w-full mb-4">
          <Technology
            direction="forward"
            imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-19aS9Ot8lbEKevQLDqIWKUhPEi4Xzd7wkPd1yTmdg&s"
            name="Databricks"
          />
          <Technology
            direction="reverse"
            imgLink="https://logowik.com/content/uploads/images/azure-data-factory2539.jpg"
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
