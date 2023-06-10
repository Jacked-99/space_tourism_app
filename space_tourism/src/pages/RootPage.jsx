import { Outlet } from "react-router";
import MainNav from "../components/MainNav/MainNav";

const RootPage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootPage;
