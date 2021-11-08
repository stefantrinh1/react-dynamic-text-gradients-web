import React from 'react';
import styled from 'styled-components';
import TextGradient from 'react-dynamic-text-gradients';

export default function AboutSection() {
  return (
    <Container>
      <TextGradient
        text={'Make your Website/App More accessible.'}
        as={'h2'}
        colors={['black', '#202020', 'gold', 'black', 'orange']}
        style={{ fontFamily: 'sans-serif' }}
        className={'gradient-title'}
        gradientAngle={120}
      />
      <h4>An Text Component That Brings Your Design To Life</h4>
      <p>
        A Single React Text Component for standout text displays. It adds a
        gradient to your text and adjusts the colors of the gradient as you
        scroll for a dynamic UI Effect
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
