import { useParams, useLoaderData } from "react-router";
import getPlanetData from "../../Utils/getPlanetData/getPlanetData";
import PlanetsNavbar from "./PlanetsNavbar";
import "./Planet.scss";
import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import MainNav from "../../components/MainNav/MainNav";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

const Planet = () => {
  const params = useParams();
  const data = useLoaderData();

  return (
    <CenteredContainer classes={"containerPlanetBackground"}>
      <MainNav />
      <h5 className="planet-header">
        <span className="pageNumber">01</span> Pick your destination
      </h5>
      <img
        src={data.imgSrc}
        className="planet"
        alt={`image-${params.planetName}`}
      />
      <PlanetsNavbar />
      <h2 className="planet-name">{params.planetName}</h2>
      <p className="planet-desc">{data.description}</p>
      <SectionDivider />
      <section>
        <h5 className="planet-detail-header">Avg. distance</h5>
        <h4 className="planet-detail">{data.distance}</h4>
      </section>
      <section>
        <h5 className="planet-detail-header">est. travel time</h5>
        <h4 className="planet-detail">{data.travelTime}</h4>
      </section>
    </CenteredContainer>
  );
};

export const loader = ({ params }) => {
  const planet = getPlanetData(params.planetName);
  return planet;
};

export default Planet;
