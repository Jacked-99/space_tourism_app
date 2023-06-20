import mars from "../../assets/destination/image-mars.png";
import moon from "../../assets/destination/image-moon.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";

import commander from "../../assets/crew/image-douglas-hurley.png";
import specialist from "../../assets/crew/image-mark-shuttleworth.png";
import pilot from "../../assets/crew/image-victor-glover.png";
import engineer from "../../assets/crew/image-anousheh-ansari.png";

import launch_vechicle_landscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launch_vechicle_portrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport_landscape from "../../assets/technology/image-spaceport-landscape.jpg";
import spaceport_portrait from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule_landscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import capsule_portrait from "../../assets/technology/image-space-capsule-portrait.jpg";

const imgSrcs = {
  mars,
  moon,
  titan,
  europa,
  commander,
  specialist,
  pilot,
  engineer,
  launch_vechicle: {
    landscape: launch_vechicle_landscape,
    portrait: launch_vechicle_portrait,
  },
  spaceport: { landscape: spaceport_landscape, portrait: spaceport_portrait },
  capsule: { landscape: capsule_landscape, portrait: capsule_portrait },
};

export default imgSrcs;
