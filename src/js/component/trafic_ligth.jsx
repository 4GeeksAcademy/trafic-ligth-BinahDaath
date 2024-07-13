import React,{ useState, useEffect, useRef }from "react";
function useInterval(callback, delay) {
	const savedCallback = useRef();
  
	useEffect(() => {
	  savedCallback.current = callback;
	}, [callback]);
  
	useEffect(() => {
	  function tick() {
		savedCallback.current();
	  }
	  if (delay !== null) {
		let id = setInterval(tick, delay);
		return () => clearInterval(id);
	  }
	}, [delay]);
  }
const TrafficLight=({ initialColor })=> {
  const [color, setColor] = useState(initialColor);
  const [okPurple, setOkPurple] = useState(false);
  const [swcolor, setSwColor] = useState(false);
  const swcolorTrue=()=>{
    if(swcolor==true)
      {
          setSwColor(false)
      }
      else
      {
          setSwColor(true)
      }
  }
  useInterval(() => {
    if(swcolor){
      if(color==="red")
      {setColor("yellow");}
      else if(color==="yellow")
      {setColor("green");}
      else if(color==="green")
      {setColor("red");}
    }
	}, 1000);

  const purple = ()=>{
    if(okPurple==true)
      {
          setOkPurple(false)
      }
      else
      {
          setOkPurple(true)
      }
  }
  const handleClickRed = () => {
    setColor("red");
  };
  const handleClickYellow = () => {
    setColor("yellow");
  };
  const handleClickGreen = () => {
    setColor("green");
  };
  const handleClickPurple = () => {
    setColor("purple");
  };
  const purpleligth=()=>{
    return (
      <div
      onClick={handleClickPurple}
      className={
        "h-20 w-20 rounded-full " +
        (color === "purple" ? "bg-purple-500" : "bg-purple-900")
      }
    ></div>  
    );
  }
  return (
    <div className="flex w-full h-screen items-center gap-4 justify-center bg-red-50">
      <div>
      <div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={swcolorTrue}>cycle ligth</button></div>
      <div><button class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={purple}>purple ligth</button></div>
      </div>
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
      {okPurple ? purpleligth():""}     
      </div>
    </div>
  );
}
export default TrafficLight