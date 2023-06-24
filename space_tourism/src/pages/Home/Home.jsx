import CenteredContainer from "../../components/CeneterdContainer/ConteredContainer";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import MainNav from "../../components/MainNav/MainNav";
import { useRef } from "react";
const Home = () => {
  const linkRef = useRef();
  return (
    <CenteredContainer classes={"containerHomeBackground"}>
      <MainNav />
      <div className="content-wraper">
        <h5 className="info tech">So, you want to travel to</h5>
        <h1 className="home_title">Space</h1>
        <p className="info ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button
          className="Explore"
          onClick={() => {
            linkRef.current.click;
          }}
        >
          <NavLink to={"/planets/moon"} ref={linkRef}>
            Explore
          </NavLink>
        </button>
      </div>
    </CenteredContainer>
  );
};

export default Home;
