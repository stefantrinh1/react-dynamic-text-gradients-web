import React from 'react';
import styled from 'styled-components';
import TextGradient from 'react-dynamic-text-gradients';

export default function PropsTable() {
  return (
    <Container>
      <TextGradient
        text={'Props Table'}
        as={'h2'}
        colors={[
          'rgb(100, 37, 160)',
          'rgb(137, 59, 172)',
          'red',
          'green',
          'orange',
        ]}
        style={{ fontFamily: 'sans-serif' }}
        className={'gradient-title'}
        gradientAngle={120}
      />
      <h4>List of props and types for the component</h4>

      <table>
        <tr>
          <th>prop</th>
          <th>type</th>
          <th>i.e</th>
          <th>default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>text</td>
          <td>string </td>
          <td>React Dynamic Text Gradient</td>
          <td>Sample Text Here</td>
          <td>The string of text you want to gradient</td>
        </tr>
        <tr>
          <td>as</td>
          <td>string</td>
          <td>h2</td>
          <td>h1</td>
          <td>The type of tag you would like, options: h1,h2,h3,h4,h5,h6,p</td>
        </tr>
        <tr>
          <td>colors</td>
          <td>array</td>
          <td>['red', 'blue','green']</td>
          <td>
            ['rgb(100, 37, 160)', 'rgb(137, 59, 172)', 'red', 'orange', 'blue']
          </td>
          <td>
            An array of colors you would like the gradient to show.this can be a
            "rgb number", "hex code" or a "standard color text name"
          </td>
        </tr>

        <tr>
          <td>gradientAngle</td>
          <td>Int</td>
          <td>180</td>
          <td>130</td>
          <td>
            The angle of the gradient, if you want it from top to bottom = 180
            degree or left to right = 45 degrees
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>object</td>
          <td>{`{fontSize: '3rem', fontFamily:'sans-serif'}`}</td>
          <td>{`{}`}</td>
          <td>an Object of JS Styles</td>
        </tr>
        <tr>
          <td>className</td>
          <td>string</td>
          <td>"gradient-title"</td>
          <td>""</td>
          <td>Your own custom className to the component</td>
        </tr>
      </table>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    color: white;
    font-size: 4rem;
    margin: 0rem 0rem 2rem;
  }

  h4 {
    font-size: 2rem;
    color: purple;
  }
  p {
    margin: 0rem 0rem 2rem;
    color: black;
  }
  code {
    color: white;
    background-color: #202020;
    padding: 1rem;
    display: flex;
    margin-bottom: 2rem;
    white-space: pre-wrap;
  }
  .special-text {
    color: #0972b1;
    font-weight: bold;
  }

  table,
  th,
  td {
    border: solid 1px white;
    color: white;
    padding: 0.5rem;
  }

  table th {
    padding: 1rem;
    text-transform: uppercase;
    color: white;
  }

  @media only screen and (min-width: 767px) {
    padding: 5rem;

    h2 {
      font-size: 4rem;
    }
  }
`;
