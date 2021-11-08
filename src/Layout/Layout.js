import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import Favicon from '../assets/react-dynamic-text-gradient-logo.png';

export default function Layout({ children }) {
  const title = 'React Dynamic Text Gradient';
  const url = 'https://react-dynamic-text-gradients.netlify.app';
  const description =
    'React Dynamic Text Gradient - Make your website cooler with moving dyanmic gradents on your text';
  const twitterUsername = '@stefantrinh';
  const ogImage = '';

  return (
    <Container>
      <SEO
        title={title}
        description={description}
        url={url}
        ogImage={ogImage}
        twitterUsername={twitterUsername}
        favicon={Favicon}
      />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const PageContainer = styled.div`
  min-height: 100vh;
`;
