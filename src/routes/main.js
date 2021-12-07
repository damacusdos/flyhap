import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #F8E2E9;
  font-family: 'Ubuntu', sans-serif;
  .header {
    position: fixed;
    top: 0;
  }
`;

const Main = props => {
  return (<MainWrapper>
    <Header className="header" />
  </MainWrapper>)
};

export default Main;