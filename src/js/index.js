//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//import TrafficLight from "./component/trafic_ligth.jsx";
import TraficLigthButton from "./component/trafic_ligth_button.jsx";
//import {TrafficLight} from "./component/trafic_ligth.jsx"
//render your react application
//ReactDOM.createRoot(document.getElementById('app')).render(<TrafficLight initialColor="red" purple="true"/>);
ReactDOM.createRoot(document.getElementById('app')).render(<TraficLigthButton initialColor="red" purple="true"/>);

