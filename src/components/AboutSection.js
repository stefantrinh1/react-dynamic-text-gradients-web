import React from 'react';
import styled from 'styled-components';

export default function AboutSection() {
  return (
    <Container>
      <h2>Make your Website/App More accessible.</h2>
      <h4>An Accesibility Widget for React Apps/Websites.</h4>
      <p>
        The widget allows users to change the UI design/styling across the
        website/app to make the platform more accessible to their needs.
      </p>
      <p className='special-text'>
        i.e for users that are color blind, the widget will change text colors
        across the whole site.
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e4e4e4;
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    color: #202020;
    font-size: 2rem;
    margin: 0rem 0rem 2rem;
  }

  h4 {
    font-size: 1.5rem;
    color: purple;
  }
  p {
    margin: 0rem 0rem 2rem;
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
    h4 {
      font-size: 2rem;
    }
  }
`;
