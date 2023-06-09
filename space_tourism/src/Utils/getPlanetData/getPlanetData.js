const getPlanetData = (planetName) => {
  const data = getRestData(planetName);
  return {
    name: { planetName },
    imgSrc: `../assets/destination/image-${planetName}.png`,
    description: data.desc,
    distance: data.disc,
    travelTime: data.travelTm,
  };
};

const getRestData = (name) => {
  return { desc, dist, travelTm };
};
