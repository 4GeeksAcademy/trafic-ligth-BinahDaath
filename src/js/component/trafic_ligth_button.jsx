import React, { useState } from "react";
import TrafficLight from "./trafic_ligth";
const TraficLigthButton=()=>
{
    const [swcolor, setSwColor] = useState(false);
    const [purple, setPurple] = useState("true");

    return (<div> 
        <TrafficLight initialColor="red"/>
    </div>);
};
export default TraficLigthButton;