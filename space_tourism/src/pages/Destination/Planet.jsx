import { useParams, useLoaderData } from "react-router";
import getPlanetData from "../../Utils/getPlanetData/getPlanetData";
import PlanetsNavbar from "./PlanetsNavbar";
import "./Planet.scss";
import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import MainNav from "../../components/MainNav/MainNav";

const Planet = () => {
  const params = useParams();
  const data = useLoaderData();

  return (
    <CenteredContainer classes={"containerPlanetBackground"}>
      <MainNav />
      <h4>Pick your destination</h4>
      <img
        src={data.imgSrc}
        className="planet"
        alt={`image-${params.planetName}`}
      />
      <PlanetsNavbar />
      <h2>{params.planetName}</h2>;
    </CenteredContainer>
  );
};

export const loader = ({ params }) => {
  const planet = getPlanetData(params.planetName);
  return planet;
};

export default Planet;
