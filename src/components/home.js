import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  h1 {
    font-size: 11rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
  }
  p {
    font-size: 2rem;
    margin: 0;
  }
`

const Home = () => {
  return (<HomeWrapper>
    <h1>Flyhap</h1>
    <p>coming soon...</p>
  </HomeWrapper>)
};

export default Home;