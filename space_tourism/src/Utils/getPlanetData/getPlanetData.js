// funkcja dostaje nazwe planety (moze dostawać obiekt jesli moglaby fetchowac inne dane )
import mars from "../../assets/destination/image-mars.png";
import moon from "../../assets/destination/image-moon.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";

const getPlanetData = (planetName) => {
  const data = getRestData(planetName);
  const url = getPlanetImg(planetName);

  return {
    name: planetName,
    imgSrc: url,
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
    desc = `The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.
  `;
    dist = "1.6 bil. km";
    travelTm = "7 years";
  }
  return { desc, dist, travelTm };
};

const getPlanetImg = (name) => {
  const planets = {
    titan,
    moon,
    europa,
    mars,
  };

  return planets[name];
};
export default getPlanetData;
