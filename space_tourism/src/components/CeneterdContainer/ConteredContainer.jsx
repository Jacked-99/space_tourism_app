import "./CContainer.scss";

const CenteredContainer = ({ children, classes }) => {
  return <div className={`.container ${classes}`}>{children}</div>;
};

export default CenteredContainer;
