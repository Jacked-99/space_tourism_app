import "./DescriptionP.scss";

const DescriptionP = ({ desc, classes }) => {
  return <p className={`page-description ${classes}`}>{desc}</p>;
};

export default DescriptionP;
