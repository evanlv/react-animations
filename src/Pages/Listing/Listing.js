import { useTrail, animated } from "react-spring";
import { v4 as uuid } from "uuid";

import Card from "../../Components/Card/Card";

import "./Listing.css";

const Listing = () => {
  const trail = useTrail(9, {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <div className="list-container">
      {trail.map((cardStyle, index) => {
        return (
          <animated.div key={uuid()} style={cardStyle}>
            <Card />
          </animated.div>
        );
      })}
    </div>
  );
};

export default Listing;
