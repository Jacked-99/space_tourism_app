// funkcja dostaje nazwe planety (moze dostawać obiekt jesli moglaby fetchowac inne dane )
import getRestData from "./getRestOfData";
import imgSrcs from "./ImagesSrcs";
const getData = ({ name, type }) => {
  const data = getRestData(name, type);
  const url = getImg(name);

  return {
    name: name,
    imgSrc: url,
    description: data.desc,
    distance: data.dist,
    travelTime: data.travelTm,
  };
};

const getImg = (name) => {
  const images = imgSrcs;

  return images[name];
};
export default getData;
