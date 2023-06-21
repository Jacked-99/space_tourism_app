import { useParams, useLoaderData, useNavigate } from "react-router";
import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import getData from "../../Utils/getPlanetData/getData";
import "./Crew.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import MainNav from "../../components/MainNav/MainNav";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import DescriptionP from "../../components/Description/DescriptionP";
import CrewNavbar from "./CrewNavbar";
import getNewCrewman from "../../Utils/SideScroll/SideScroll";
import Spiner from "../../components/Spinner/Spiner";
import { Suspense, useEffect } from "react";
const Crew = () => {
  const parms = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  console.log();
  useEffect(() => {
    const scroll = setTimeout(() => {
      const nextLink = getNewCrewman(parms.crewName);
      navigate(`/crew/${nextLink}`);
    }, 50000);

    return () => {
      clearTimeout(scroll);
    };
  }, [parms.crewName]);

  return (
    <Suspense fallback={<Spiner />}>
      <CenteredContainer classes={"crewContainer"}>
        <MainNav />

        <PageHeader number={"02"} message={"Meet your crew"} />

        <img
          src={data.imgSrc}
          className="crew-img"
          alt={`${data.description.role}-image`}
        />
        <SectionDivider />
        <CrewNavbar />
        <h5 className="crew-h5">{data.description.role} </h5>
        <h4 className="crew-h4">{data.description.name}</h4>

        <DescriptionP desc={data.description.info} />
      </CenteredContainer>
    </Suspense>
  );
};

export const loader = ({ params }) => {
  const data = getData({ name: params.crewName, type: "crew" });
  return data;
};

export default Crew;
