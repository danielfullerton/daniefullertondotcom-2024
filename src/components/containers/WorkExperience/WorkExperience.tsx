interface WorkExperienceProps {
  location: string;
  title: string;
  dates: string;
  img: string;
}

export const WorkExperience = ({
  dates,
  location,
  title,
  img,
}: WorkExperienceProps) => {
  return (
    <div className="flex items-center justify-between mb-4 max-w-sm">
      <div className="flex items-center">
        <img src={img} alt="MSFT" className="w-8 h-8 mr-4" />
        <div className="flex flex-col">
          <span className="text-xl">{location}</span>
          <span className="text-xs text-gray-600">{title}</span>
        </div>
      </div>
      <span className="text-sm text-gray-600">{dates}</span>
    </div>
  );
};
