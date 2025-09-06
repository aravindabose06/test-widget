import { useState } from "react"


function SimpleCounter(props) {

  const [count, setCount] = useState(0)

  return (
    <div style={{ alignContent: "center", justifySelf: "center", padding: "10px", border: "1px solid black", marginTop: "10px", borderRadius: "5px" }}>

      <p>Count value: <b>{count}</b></p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default SimpleCounter;
