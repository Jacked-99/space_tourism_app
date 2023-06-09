// funkcja dostaje nazwe planety (moze dostawać obiekt jesli moglaby fetchowac inne dane )

const getPlanetData = (planetName) => {
  const data = getRestData(planetName);
  //image-titan.png
  //image-${planetName}.png
  return {
    name: planetName,
    imgSrc: `../../assets/destination/image-${planetName}.png`,
    description: data.desc,
    distance: data.dist,
    travelTime: data.travelTm,
  };
};

const getRestData = (name) => {
  let desc;
  let dist;
  let travelTm;
  if (name == "moon") {
    desc = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`;
    dist = "384,400 km";
    travelTm = "3 days";
  }
  if (name == "mars") {
    desc = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!`;
    dist = "225 mil. km";
    travelTm = "9 months";
  }
  if (name == "europa") {
    desc = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`;
    dist = "628 mil. km";
    travelTm = "3 years";
  }
  if (name == "titan") {
    desc = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!`;
    dist = "1.6 bil. km";
    travelTm = "7 years";
  }
  return { desc, dist, travelTm };
};

export default getPlanetData;
