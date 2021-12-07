import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .innerWrapper {
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Header = props => {
  return (<HeaderWrapper>
    <div className="innerWrapper">
      <div>Flyhap</div>
      <Button href="/login">Log out</Button>
    </div>
  </HeaderWrapper>)
};

export default Header;