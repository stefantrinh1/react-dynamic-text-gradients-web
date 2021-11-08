import React from 'react';
import styled from 'styled-components';

export default function Usage() {
  return (
    <Container>
      <h2>Usage</h2>
      <h4>Extremely simple to use</h4>
      <p>import a single component</p>
      <code>{`import TextGradient from 'react-dynamic-text-gradients';`}</code>
      <p>Use In Your JSX</p>
      <code>{`
<TextGradient
  text={"React Dynamic Text Gradients"}
  as={"h1"}
  colors={['rgb(100, 37, 160)', 'rgb(137, 59, 172)', 'red', 'green', 'orange']}
  style: {{ fontSize: '4rem', fontFamily:'sans-serif' }}
  className={'gradient-title'}
  gradientAngle={120}
/>
`}</code>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e4e4e4;
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    color: black;
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
    border: solid 1px black;
  }

  table th {
    padding: 1rem;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 767px) {
    padding: 5rem;

    h2 {
      font-size: 4rem;
    }
  }
`;
