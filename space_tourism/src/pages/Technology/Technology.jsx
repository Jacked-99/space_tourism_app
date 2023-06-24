import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import { Await, useLoaderData, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import MainNav from "../../components/MainNav/MainNav";
import "./Technology.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import getData from "../../Utils/getPlanetData/getData";
import TechNavBar from "./TechNavBar";
import Spiner from "../../components/Spinner/Spiner";
import DescriptionP from "../../components/Description/DescriptionP";
import { Suspense, useEffect, useState } from "react";
import NavLinkButton from "../../components/NavLinkButton/NavLinkButton";

const TechnologyPage = () => {
  const [src, setSrc] = useState("");
  const [windowWith, setWindowWith] = useState(window.innerWidth);
  const data = useLoaderData();

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWith <= 900) {
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
      <Suspense fallback={<Spiner />}>
        <Await
          resolve={src}
          children={(src) => (
            <div className="tech-content">
              <PageHeader number={"03"} message={"Space launch 101"} />
              <img
                src={src}
                alt={`${data.description.name}-img`}
                className="tech-img"
              />

              <TechNavBar />
              <section>
                <h5 className="tech-h5">Terminology...</h5>
                <h3 className="tech-h2">{data.description.name}</h3>
                <DescriptionP desc={data.description.info} />
              </section>
            </div>
          )}
        ></Await>
      </Suspense>
    </CenteredContainer>
  );
};

export const loader = ({ params }) => {
  const data = getData({ name: params.techName, type: "tech" });
  return data;
};
export default TechnologyPage;
