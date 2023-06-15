import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import { useLoaderData, useParams } from "react-router";
import MainNav from "../../components/MainNav/MainNav";
import "./Technology.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import getData from "../../Utils/getPlanetData/getData";
import TechNavBar from "./TechNavBar";
import Spiner from "../../components/Spinner/Spiner";

const TechnologyPage = () => {
  const data = useLoaderData();
  return (
    <CenteredContainer classes={"techContainer"}>
      <MainNav />
      <PageHeader number={"03"} message={"Space launch 101"} />
      <TechNavBar />
    </CenteredContainer>
  );
};

export const loader = ({ params }) => {
  const data = getData({ name: params.techName, type: "tech" });
  return data;
};
export default TechnologyPage;
