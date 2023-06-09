import { Outlet } from "react-router";
import MainNav from "../components/MainNav/MainNav";

const RootPage = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootPage;
