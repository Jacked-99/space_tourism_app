import { useParams, useLoaderData } from "react-router";
import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import getData from "../../Utils/getPlanetData/getData";
import "./Crew.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import MainNav from "../../components/MainNav/MainNav";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import DescriptionP from "../../components/Description/DescriptionP";
import CrewNavbar from "./CrewNavbar";
const Crew = () => {
  const parms = useParams();
  const data = useLoaderData();
  console.log(data);
  return (
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
  );
};

export const loader = ({ params }) => {
  const data = getData({ name: params.crewName, type: "crew" });
  return data;
};

export default Crew;
