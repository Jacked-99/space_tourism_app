import { useParams, useLoaderData } from "react-router";
import getPlanetData from "../../Utils/getPlanetData/getPlanetData";
import PlanetsNavbar from "./PlanetsNavbar";

const Planet = () => {
  const params = useParams();
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <PlanetsNavbar />
      <h3>{params.planetName}</h3>;
      <img src={data.imgSrc} alt="" />
    </>
  );
};

export const loader = ({ params }) => {
  const planet = getPlanetData(params.planetName);
  return planet;
};

export default Planet;
