import React from 'react';
import styled from 'styled-components';
export default function Header() {
  const links = [
    {
      name: 'NPM',
      link: 'https://www.npmjs.com/package/react-dynamic-text-gradients',
      target: true,
    },
    {
      name: 'Github',
      link: 'https://github.com/stefantrinh1/react-dynamic-text-gradients',
      target: true,
    },
  ];

  return (
    <Container>
      <Logo>React Dynamic Text Gradient</Logo>

      <Links>
        {links.map(({ name, link, target }) => {
          return (
            <Link href={link} target={target ? '_blank' : ''}>
              {name}
            </Link>
          );
        })}
      </Links>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  color: white;
  padding: 1rem;
`;

const Logo = styled.div``;

const Links = styled.div``;
const Link = styled.a`
  text-decoration: none;
  color: white;
  margin: 0rem 1rem;
`;
