# React Reserve Rangepicker

Gregorian and Persian (Jalaali) Calendar

## Installation

npm

```bash
npm install react-reserve-rangepicker
```

yarn

```bash
yarn add react-reserve-rangepicker
```

## Usage

#### :fa-chevron-right: Rangepicker Component

```javascript
/* @flow */
import React, { PureComponent } from "react";
import { RangePicker } from "react-reserve-rangepicker";

class MyComponent extends PureComponent {
  render() {
    return (
      <div className="MyComponent">
        <RangePicker />
      </div>
    );
  }
}

export default MyComponent;
```

#### :fa-chevron-right: Datepicker Component

```javascript
/* @flow */
import React, { PureComponent } from "react";
import { Datepicker } from "react-reserve-rangepicker";

class MyComponent extends PureComponent {
  render() {
    return (
      <div className="MyComponent">
        <Datepicker />
      </div>
    );
  }
}

export default MyComponent;
```

## API

There are two kinds of picker:
:fa-dot-circle-o: DatePicker
:fa-dot-circle-o: RangePicker

####DatePicker

| Property           | Description                                               | Type             | Default | Example                          |
| ------------------ | --------------------------------------------------------- | ---------------- | ------- | -------------------------------- |
| isPersian          | localization configuration                                | boolean          | False   |                                  |
| disableDate        | Specifies whether or not the previous days are selectable | boolean          | False   |                                  |
| showTime           | to provide an additional time selection                   | object / boolean | False   | `showTime={{ format: ‘HH:mm’ }}` |
| disabledHourFrom   | To specify the **start** of the inactive time interval    | object           | { }     | `disabledHourFrom={10}`          |
| disabledHourTo     | To specify the **end** of the inactive time interval      | object           | { }     | `disabledHourTo={12}`            |
| disabledMinuteFrom | To specify the **start** of the inactive minute interval  | object           | { }     | `disabledMinuteFrom={20}`        |
| disabledMinuteTo   | To specify the **end** of the inactive minute interval    | object           | { }     | `disabledMinuteTo={30}`          |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
