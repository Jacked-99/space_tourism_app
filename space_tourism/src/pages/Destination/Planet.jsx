import { useParams, useLoaderData } from "react-router";
import PlanetsNavbar from "./PlanetsNavbar";

const Planet = () => {
  const params = useParams();
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <PlanetsNavbar />
      <h3>{params.planetName}</h3>;
    </>
  );
};

export const loader = ({ params }) => {
  const planet = { name: params.planetName };
  return planet;
};

export default Planet;
