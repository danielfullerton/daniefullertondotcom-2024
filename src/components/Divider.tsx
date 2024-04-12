interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return <hr className={"border-t border-gray-300 my-8 " + className} />;
};
