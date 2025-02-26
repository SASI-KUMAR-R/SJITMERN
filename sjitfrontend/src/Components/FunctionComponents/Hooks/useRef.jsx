import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  var [text, setText] = useState("");
  var perviousRender = useRef();
  useEffect(()=>{
    perviousRender.current = text ;
  },[text])
  return (
    <div>
      <h1>This is UseRef Example </h1>
      Type your Text :{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>The Current Render Text Is = {text}</h2>
      <h3>The Previous Render Text Is = {perviousRender.current}</h3>
    </div>
  );
};

export default UseRef;
