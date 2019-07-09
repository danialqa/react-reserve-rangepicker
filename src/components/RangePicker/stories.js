import React from "react";
// Import the storybook libraries
import { storiesOf } from "@storybook/react";
// Import our component from this folder
import Rangepicker from "./Rangepicker";

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area

import "../../story.css";

storiesOf("Rangepicker").add("Default", () => (
  <div className="preview">
    <h1>Default Rangepicker</h1>
    <Rangepicker />
  </div>
));
storiesOf("Rangepicker").add("Disable Dates", () => (
  <div className="preview">
    <h1>Disable Dates</h1>
    <Rangepicker disableDate />
  </div>
));
storiesOf("Rangepicker").add("With Timepicker", () => (
  <div className="preview">
    <h1>With Timepicker</h1>
    <Rangepicker showTime />
  </div>
));
storiesOf("Rangepicker").add("With Time Ranges", () => (
  <div className="preview">
    <h1>With Time Ranges</h1>
    <Rangepicker
      showTime
      disabledHourFrom={0}
      disabledHourTo={10}
      disabledMinuteFrom={20}
      disabledMinuteTo={30}
    />
  </div>
));
storiesOf("Rangepicker").add("Persian Rangepicker", () => (
  <div className="preview">
    <h1>Persian Rangepicker</h1>
    <Rangepicker isPersian />
  </div>
));

storiesOf("Rangepicker").add("Seprated", () => (
  <div className="preview">
    <h1>Seprated Rangepicker</h1>
    <Rangepicker
      showTime
      seprated
      disabledHourFrom={0}
      disabledHourTo={10}
      disabledMinuteFrom={20}
      disabledMinuteTo={30}
    />
  </div>
));
