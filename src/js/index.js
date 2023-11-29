import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter";


let unidad = 0;
let decimal = 0;
let centena = 0;
let miles = 0;
setInterval(() => {
    unidad ++;
    if (unidad > 9){
        unidad = 0
        decimal ++
    } 
    if (decimal > 9){
        decimal = 0
        centena ++
    } 
    if(centena > 9){
        centena = 0
        miles ++
    }
    ReactDOM.render(<SecondsCounter unidad={unidad} decimal={decimal} centena= {centena} miles={miles}/>, document.querySelector("#app"));

}, 1000) 