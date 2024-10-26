//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const now = new Date();
const hours = now.getHours();
let style = {};

if (hours >= 5 && hours < 12) {
  const style = {
    color: "green",
  };
  message = "Good Morning!";
} else if (hours >= 12 && hours < 18) {
  style = {
    color: "green",
  };
  message = " Good AfterNoon!";
} else {
  style = { color: "blue" };
  message = "Good Night!";
}
ReactDOM.render(
  <h1 style={style}> {message}</h1>,
  document.getElementById("root")
);
