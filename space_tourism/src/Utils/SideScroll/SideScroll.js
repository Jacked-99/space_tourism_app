import crew from "../CrewCount/Crew";

const getNewCrewman = (crewman) => {
  const crewArray = crew;
  const crewmanIndex = crewArray.indexOf(crewman);
  let nextIndex = 0;
  if (crewmanIndex != crewArray.length - 1) {
    nextIndex = crewmanIndex + 1;
  }
  return crewArray[nextIndex];
};

export default getNewCrewman;
