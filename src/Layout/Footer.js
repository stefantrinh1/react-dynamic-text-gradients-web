import React from 'react';
import styled from 'styled-components';
export default function Footer() {
  return (
    <Container>
      <Column>© React Dynamic Text Gradient{new Date().getFullYear()}</Column>
      <Column>
        Built By{' '}
        <Link href='https://www.stefantrinh.com' target='_blank'>
          Stefan Trinh
        </Link>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  padding: 3rem 7rem 3rem 2rem;
  color: white;
`;

const Column = styled.div``;

const Link = styled.a`
  color: purple;
  /* text-decoration: none; */
  font-weight: bold;
`;
