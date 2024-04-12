import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const Articles = () => {
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const paths = location?.pathname.split("/").filter((x) => !!x);

    if (paths && paths.length <= 1) {
      console.log("here");
      nav("/");
    }
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};
