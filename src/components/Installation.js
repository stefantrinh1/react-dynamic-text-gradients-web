import React from 'react';
import styled from 'styled-components';

export default function Installation() {
  return (
    <Container>
      <h2>Installation</h2>
      <h4>Available on the NPM Registry</h4>
      <p>In the command prompt run:</p>
      <code>npm install react-dynamic-text-gradient --save</code>
      <p>Alternatively you may use yarn:</p>
      <code>yarn add react-dynamic-text-gradient</code>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    color: white;
    font-size: 3rem;
    margin: 0rem 0rem 2rem;
  }

  h4 {
    font-size: 2rem;
    color: purple;
  }
  p {
    margin: 0rem 0rem 2rem;
    color: white;
  }
  code {
    color: white;
    background-color: #202020;
    padding: 1rem;
    display: flex;
    margin-bottom: 2rem;
  }
  .special-text {
    color: #0972b1;
    font-weight: bold;
  }

  @media only screen and (min-width: 767px) {
    padding: 5rem;

    h2 {
      font-size: 4rem;
    }
  }
`;
