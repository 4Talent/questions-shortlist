# questions-shortlist

>

[![NPM](https://img.shields.io/npm/v/questions-shortlist.svg)](https://www.npmjs.com/package/questions-shortlist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save 4talent-questions-shortlist
```

## Usage

```jsx
import React, { Component } from "react";

import Questions from "4talent-questions-shortlist";

class Example extends Component {
  render() {
    return <Questions />;
  }
}
```

If you want to track the weighing og the question, the only thing you have to do is put `with_weight` as prop of **Questions** component

```jsx
import React, { Component } from "react";

import Questions from "4talent-questions-shortlist";

class Example extends Component {
  render() {
    return <Questions with_weight />;
  }
}
```

If you want to have the component on the old Spanish translation, set a cookie 'my_locale' with the value 'es_negative'
If you want to have the component on English, set a cookie 'my_locale' with the value 'en'

## DEVELOP

Put in **src/index.js**

```jsx
import ReactDOM from "react-dom";
...

ReactDOM.render(<MultipleQuestions />, document.getElementById("root"));
```

In **package.json** put the following:

```json
{
  "scripts": {
    "start": "react-scripts start"
  }
}
```

If you want to have questions for example, put the following in **src/components/index.jsx**

```jsx
const questions = [
      {
        killer_value: "1;3",
        killer_condition: "are_options?",
        description: "text",
        value_type: "multiple_option",
        order: "0",
        options: ["1", "2", "3", "4"]
      },
      {
        killer_value: ["1", "3"],
        killer_condition: "isnt_option?",
        description: "text",
        value_type: "option",
        order: "2",
        options: ["1", "2", "3", "4"]
      },
      {
        killer_value: ["1"],
        killer_condition: "isnt_option?",
        description: "text",
        value_type: "option",
        order: "3",
        options: ["1", "2", "3", "4"]
      },
      {
        killer_value: "4",
        killer_condition: "isnt_option?",
        description: "text",
        value_type: "option",
        order: "4",
        options: ["1", "2", "3", "4"]
      },
      {
        killer_value: "Sí",
        killer_condition: "==",
        description: "text",
        value_type: "boolean",
        order: "5"
      }
    ];

    ...

    <MultipleForm questions={ questions } t={ t } name={ props.form_name || "project[questions_attributes]" }/>
```

## License

MIT © [PDFK](https://github.com/PDFK)
