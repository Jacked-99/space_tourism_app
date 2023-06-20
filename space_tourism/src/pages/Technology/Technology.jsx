import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import { useLoaderData, useParams } from "react-router";
import MainNav from "../../components/MainNav/MainNav";
import "./Technology.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import getData from "../../Utils/getPlanetData/getData";
import TechNavBar from "./TechNavBar";
import Spiner from "../../components/Spinner/Spiner";
import DescriptionP from "../../components/Description/DescriptionP";
import { useEffect, useState } from "react";

const TechnologyPage = () => {
  const [src, setSrc] = useState("");
  const [windowWith, setWindowWith] = useState(window.innerWidth);
  const data = useLoaderData();

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWith <= 800) {
      setSrc(data.imgSrc.landscape);
    } else {
      setSrc(data.imgSrc.portrait);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWith, data]);

  return (
    <CenteredContainer classes={"techContainer"}>
      <MainNav />
      {src == "" ? (
        <Spiner />
      ) : (
        <>
          <img
            src={src}
            alt={`${data.description.name}-img`}
            className="tech-img"
          />
          <PageHeader number={"03"} message={"Space launch 101"} />
          <TechNavBar />
          <h5 className="tech-h5">Terminology</h5>
          <h3 className="tech-h2">{data.description.name}</h3>
          <DescriptionP desc={data.description.info} />
        </>
      )}
    </CenteredContainer>
  );
};

export const loader = ({ params }) => {
  const data = getData({ name: params.techName, type: "tech" });
  return data;
};
export default TechnologyPage;
