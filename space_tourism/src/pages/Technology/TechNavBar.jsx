import "./TechNavBar.scss";
import NavLinkButton from "../../components/NavLinkButton/NavLinkButton";
const TechNavBar = () => {
  return (
    <div>
      <NavLinkButton link={"/tech/launch_vechicle"} text={"1"}></NavLinkButton>
      <NavLinkButton link={"/tech/spaceport"} text={"2"}></NavLinkButton>
      <NavLinkButton link={"/tech/capsule"} text={"3"}></NavLinkButton>
    </div>
  );
};

export default TechNavBar;
