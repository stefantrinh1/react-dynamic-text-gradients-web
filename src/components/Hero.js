import React from 'react';
import styled from 'styled-components';
import TextGradient from 'react-dynamic-text-gradients';

export default function Hero() {
  return (
    <Container>
      <TextContent>
        <TextGradient
          text={'React Dynamic Text Gradients'}
          as={'h1'}
          colors={[
            'rgb(100, 37, 160)',
            'rgb(137, 59, 172)',
            'red',
            'green',
            'orange',
          ]}
          style={{ fontSize: '5rem', fontFamily: 'sans-serif' }}
          className={'gradient-title'}
          gradientAngle={120}
        />

        <h3>
          Make your website cooler with moving dyanmic gradents on your text
        </h3>
        <p>
          A Single React Text Component for standout text displays. It adds a
          gradient to your text and adjusts the colors of the gradient as you
          scroll for a dynamic UI Effect
        </p>
      </TextContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
  min-height: 100vh;

  @media only screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  h1 {
    font-size: 3rem;
    color: white;
  }

  h3 {
    color: purple;
    font-size: 2rem;
  }
  p {
    color: #818181;
  }
  @media only screen and (min-width: 767px) {
  }
`;
