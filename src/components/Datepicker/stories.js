import React from "react";
// Import the storybook libraries
import { storiesOf } from "@storybook/react";
// Import our component from this folder
import Datepicker from "./Datepicker";

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area

import "../../story.css";

storiesOf("DatePicker").add("DatePicker", () => (
  <div className="preview">
    <h1>Default DatePicker</h1>
    <Datepicker />
  </div>
));

storiesOf("DatePicker").add("Enable Dates Range", () => (
  <div className="preview">
    <h1>Enable Dates Range</h1>
    <Datepicker enableDateFrom="2019-08-10" enableDateTo="2019-08-20" />
  </div>
));

storiesOf("DatePicker").add("Disabled Past Dates", () => (
  <div className="preview">
    <h1>Disabled Past Dates</h1>
    <Datepicker disablePastDays />
  </div>
));

storiesOf("DatePicker").add("With Timepicker", () => (
  <div className="preview">
    <h1>With Timepicker</h1>
    <Datepicker showTime />
  </div>
));

storiesOf("DatePicker").add("With Time Ranges", () => (
  <div className="preview">
    <h1>With Time Ranges</h1>
    <Datepicker
      showTime
      disabledHourFrom={0}
      disabledHourTo={10}
      disabledMinuteFrom={20}
      disabledMinuteTo={30}
    />
  </div>
));
