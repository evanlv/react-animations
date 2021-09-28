import { useTransition, animated } from "react-spring";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import "./StateAnim.css";

const StateAnim = () => {
  const [firstDisplay, setfirtDisplay] = useState(true);
  const [inputData, setInputData] = useState([
    {
      id: uuid(),
      txt: "Chopin",
    },
    {
      id: uuid(),
      txt: "Mozart",
    },
    {
      id: uuid(),
      txt: "Bach",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setfirtDisplay(false);
    }, 1000);
  }, []);

  const inputRef = useRef();

  const handleData = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuid(),
      txt: inputRef.current.value,
    };
    setInputData([...inputData, newObj]);

    inputRef.current.value = "";
  };

  const listTransition = useTransition(inputData, {
    from: { opacity: 0, tranform: "translateY(10px)" },
    enter: { opacity: 1, tranform: "translateY(0px)" },
    keys: inputData.map((item) => item.id),
  });

  return (
    <form onSubmit={handleData}>
      <label htmlFor="piano">Add your favorite pianist</label>
      <input type="text" id="piano" ref={inputRef} />

      {firstDisplay ? (
        <ul>
          {inputData.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {listTransition((styles, item) => {
            return <animated.li style={styles}>{item.txt}</animated.li>;
          })}
        </ul>
      )}
    </form>
  );
};

export default StateAnim;
