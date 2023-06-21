import { useParams, useLoaderData } from "react-router";
import getData from "../../Utils/getPlanetData/getData";
import PlanetsNavbar from "./PlanetsNavbar";
import "./Planet.scss";
import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import MainNav from "../../components/MainNav/MainNav";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import PageHeader from "../../components/PageHeader/PageHeader";
import DescriptionP from "../../components/Description/DescriptionP";
import { Suspense, useEffect, useState } from "react";
import Spiner from "../../components/Spinner/Spiner";
const Planet = () => {
  const [src, setSrc] = useState("");
  const params = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const imgSrc = async () => {
      const response = await data;
      const imgData = await response.imgSrc;
      setSrc(imgData);
    };
    imgSrc();
    return () => {};
  }, [src, data]);

  return (
    <CenteredContainer classes={"containerPlanetBackground"}>
      <MainNav />
      <PageHeader number={"01"} message={"pick your destination"} />
      {src == "" ? (
        <Spiner />
      ) : (
        <img src={src} className="planet" alt={`image-${params.planetName}`} />
      )}
      <PlanetsNavbar />
      <h2 className="planet-name">{params.planetName}</h2>
      <DescriptionP
        className="planet-desc"
        desc={data.description}
      ></DescriptionP>
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
  const planet = getData({ name: params.planetName, type: "planet" });
  return planet;
};

export default Planet;
