import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  background-color: #F8E2E9;
  font-family: 'Ubuntu', sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 11rem;
    font-weight: 700;
    margin: 0 0 3rem 0;
  }
  p {
    font-size: 2rem;
    margin: 0;
  }
  .login-text {
    margin-top: 5rem;
    font-size: 1rem;
    a {
      text-decoration: underline;
    }
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: #000;
  }
`

const Home = () => {
  return (<HomeWrapper>
    <Link to="/main"><h1>Flyhap</h1></Link>
    <p>coming soon...</p>
    <p className="login-text">Click <Link to="/login">here</Link> to log in</p>
  </HomeWrapper>)
};

export default Home;