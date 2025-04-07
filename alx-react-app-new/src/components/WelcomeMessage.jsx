import { useContext, useRef, useState } from "react";
import { data } from "../App";

function WelcomeMessage() {
  const dataa = useContext(data);
  const [count1, setCount1] = useState(0);
  const element = useRef();
  function handleClick() {
    console.log(element.current);
    element.current.style.width = "300px";
  }
  return (
    <div>
      <h1>Hello everyone, I am learning React at ALX!</h1>
      <p>This is a simple JSX component.</p>
      <p>I am learning about JSX!</p>
      <p>the count is {dataa} </p>
      <input
        ref={element}
        type="text"
        onChange={() => setCount1((prev) => prev + 1)}
      />
      <button onClick={handleClick}>click</button>
      <p>{count1}</p>
    </div>
  );
}

export default WelcomeMessage;