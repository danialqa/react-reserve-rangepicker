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

storiesOf("Datepicker").add("Datepicker", () => (
  <div className="preview">
    <h1>Default Datepicker</h1>
    <Datepicker
      isPersian
      // disableDate
      // showTime
      // disabledHourFrom={0}
      // disabledHourTo={10}
      // disabledMinuteFrom={20}
      // disabledMinuteTo={30}
    />
  </div>
));
