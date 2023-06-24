import "./DescriptionP.scss";

const DescriptionP = ({ desc }) => {
  return (
    <span className="page-description">
      <p>{desc}</p>
    </span>
  );
};

export default DescriptionP;
