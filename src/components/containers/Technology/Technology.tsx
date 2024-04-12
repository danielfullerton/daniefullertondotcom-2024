interface TechnologyProps {
  direction: "forward" | "reverse";
  imgLink: string;
  name: string;
}

export const Technology = ({ direction, imgLink, name }: TechnologyProps) => {
  const flexDirection =
    direction === "reverse" ? "flex-row-reverse" : "flex-row";
  const paddingDirection = direction === "reverse" ? "pl-2" : "pr-2";
  const textDirection = direction === "reverse" ? "text-right" : "text-left";

  return (
    <div className={`flex items-center ${flexDirection}`}>
      <img src={imgLink} alt={name} className={`w-16 ${paddingDirection}`} />
      <h2 className={textDirection}>{name}</h2>
    </div>
  );
};
