import React from "react";
// Import the storybook libraries
import { storiesOf } from "@storybook/react";
// Import our component from this folder
import Rangepicker from "./Rangepicker";

import "../../story.css";

storiesOf("RangePicker").add("Default", () => (
  <div className="preview">
    <h1>Default RangePicker</h1>
    <Rangepicker
      disabledDateFrom={"2019-07-01"}
      disabledDateTo={"2019-07-07"}
    />
  </div>
));
storiesOf("RangePicker").add("Disable Dates", () => (
  <div className="preview">
    <h1>Disable Dates</h1>
    <Rangepicker disableDate />
  </div>
));
storiesOf("RangePicker").add("With Timepicker", () => (
  <div className="preview">
    <h1>With Timepicker</h1>
    <Rangepicker showTime />
  </div>
));
storiesOf("RangePicker").add("With Time Ranges", () => (
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
storiesOf("RangePicker").add("Persian RangePicker", () => (
  <div className="preview">
    <h1>Persian RangePicker</h1>
    <Rangepicker isPersian />
  </div>
));

storiesOf("RangePicker").add("Seprated", () => (
  <div className="preview">
    <h1>Seprated RangePicker</h1>
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

storiesOf("RangePicker").add("Seprated Persian", () => (
  <div className="preview">
    <h1>Seprated Persian</h1>
    <Rangepicker
      showTime
      seprated
      isPersian
      disabledHourFrom={0}
      disabledHourTo={10}
      disabledMinuteFrom={20}
      disabledMinuteTo={30}
    />
  </div>
));
