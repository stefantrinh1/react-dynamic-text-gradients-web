# React Dynamic Text Gradient

Make your website cooler with moving dyanmic gradents on your text,

A Single React Text Component for standout text displays. It adds a gradient to your text and adjusts the colors of the gradient as you scroll for a dynamic UI Effect

## Features

- Adjusting Gradient Text On Scroll

## Compatibility

IMPORTANT: Under the hood, this lib makes use of hooks, therefore, using it requires React >= 16.8.

## Installation

In the command prompt run:

```
npm install react-dynamic-text-gradients --save
```

Alternatively you may use yarn:

```
yarn add react-dynamic-text-gradients
```

## Usage

import a single component and use in your JSX

```
import TextGradient from 'react-dynamic-text-gradients';
```

```
<TextGradient
    text={"React Dynamic Text Gradients"}
    as={"h1"}
    colors={['rgb(100, 37, 160)', 'rgb(137, 59, 172)', 'red', 'green', 'orange']}
    style={{ fontSize: '5rem', fontFamily:'sans-serif' }}
    className={'gradient-title'}
    gradientAngle={120}
/>
```

## Props

| prop          | type   | i.e                                          | default                                                             | Description                                                                                                                   |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| text          | string | React Dynamic Text Gradient                  | Sample Text Here                                                    | The string of text you want to gradient                                                                                       |
| as            | string | h2                                           | h1                                                                  | The type of tag you would like, options: h1,h2,h3,h4,h5,h6,p                                                                  |
| colors        | array  | ['red', 'blue','green']                      | ['rgb(100, 37, 160)', 'rgb(137, 59, 172)', 'red', 'orange', 'blue'] | An array of colors you would like the gradient to show.this can be a "rgb number", "hex code" or a "standard color text name" |
| gradientAngle | Int    | 180                                          | 130                                                                 | The angle of the gradient, if you want it from top to bottom = 180 degree or left to right = 45 degrees                       |
| style         | object | { fontSize: '3rem', fontFamily:'sans-serif'} | {}                                                                  | an Object of JS Styles                                                                                                        |
| className     | string | "gradient-title"                             | ""                                                                  | Your own custom className to the component                                                                                    |
