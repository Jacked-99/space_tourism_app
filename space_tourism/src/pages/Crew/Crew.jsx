import { useParams, useLoaderData } from "react-router";
import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import "./Crew.scss";
const Crew = () => {
  const parms = useParams();
  const data = useLoaderData();
  console.log(data);

  return (
    <CenteredContainer classes={"crewContainer"}>
      <h2>{data}</h2>
    </CenteredContainer>
  );
};

export const loader = ({ params }) => {
  const data = params.crewName;
  return data;
};

export default Crew;
