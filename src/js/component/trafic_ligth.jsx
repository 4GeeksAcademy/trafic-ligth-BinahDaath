import React, { useState } from "react";

const TrafficLight=({ initialColor })=> {
  const [color, setColor] = useState(initialColor);
  const handleClickRed = () => {
    setColor("red");
  };
  const handleClickYellow = () => {
    setColor("yellow");
  };
  const handleClickGreen = () => {
    setColor("green");
  };
  return (
    <div className="flex w-full h-screen items-center justify-center bg-red-50">
      <div className="flex flex-col items-center gap-4 bg-black p-4">
        <div
          onClick={handleClickRed}
          className={
            "h-20 w-20 rounded-full " +
            (color === "red" ? "bg-red-500" : "bg-red-900")
          }
        ></div>
        <div
          onClick={handleClickYellow}
          className={
            "h-20 w-20 rounded-full " +
            (color === "yellow" ? "bg-yellow-500" : "bg-yellow-900")
          }
        ></div>
        <div
          onClick={handleClickGreen}
          className={
            "h-20 w-20 rounded-full " +
            (color === "green" ? "bg-green-500" : "bg-green-900")
          }
        ></div>
      </div>
    </div>
  );
}
export default TrafficLight