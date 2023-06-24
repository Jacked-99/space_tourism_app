import "./PageHeader.scss";

const PageHeader = ({ number, message }) => {
  return (
    <h5 className="page-header">
      <span className="pageNumber">{number}</span>
      {message}
    </h5>
  );
};

export default PageHeader;
