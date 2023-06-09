import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import { NavLink } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <CenteredContainer>
      <h5 className="info tech">So, you want to travel to</h5>
      <h1 className="home_title">Space</h1>
      <p className="info ">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <button className="Explore">
        <NavLink>Explore</NavLink>
      </button>
    </CenteredContainer>
  );
};

export default Home;
