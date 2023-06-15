import "./Spiner.scss";
import CenteredContainer from "../CeneterdContainer/ConteredContainer";

const Spiner = () => {
  return (
    <CenteredContainer>
      <div className="spinner"></div>
      <h2>Loading</h2>
    </CenteredContainer>
  );
};

export default Spiner;
