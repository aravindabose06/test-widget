import { useState } from "react"


function SimpleCounter(props) {

  const minValue = props?.min ?? 0

  const maxValue = props?.max ?? 10

  const [counterObject, setCounterObject] = useState({
    count: minValue,
    minValueTextColor: "black",
    maxValueTestColor: "black"
  })


  console.log(props)

  return (
    <div style={{ alignContent: "center", justifySelf: "center", padding: "10px", border: "1px solid black", marginTop: "10px", borderRadius: "5px" }}>

      <p>Count value: <b>{counterObject?.count}</b></p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <button onClick={() => {
          if ((counterObject?.count + 1) <= maxValue) {
            setCounterObject({
              ...counterObject,
              count: counterObject?.count + 1,
              minValueTextColor: "black",
              maxValueTestColor: "black",
            })
          }
          else {
            setCounterObject({
              ...counterObject,
              maxValueTestColor: "red",
            })
          }
        }}>Increase</button>

        <button onClick={() => {

          if ((counterObject?.count - 1) >= minValue) {
            setCounterObject({
              ...counterObject,
              count: counterObject?.count - 1,
              minValueTextColor: "black",
              maxValueTestColor: "black",
            })
          }
          else {
            setCounterObject({
              ...counterObject,
              minValueTextColor: "red"
            })
          }

        }}>Decrease</button>
      </div>

      <div>
        <p style={{
          color: counterObject?.minValueTextColor
        }} >Minimum value: {minValue}</p>
        <p style={{
          color: counterObject?.maxValueTestColor
        }} >Maximum value: {maxValue}</p>
      </div>
    </div>
  );
}

export default SimpleCounter;
