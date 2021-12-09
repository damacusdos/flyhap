import React, { useState } from 'react';
import { Card, CardHeader, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const ResetWrapper = {
  width: '500px',
  height: '400px',
  padding: '3rem 2rem 0 2rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

}
const CardWrapper = styled.div`
  background-color: #f8e2e9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ResetText = styled.div`
  margin: 16px;
`

const ResetPassword = props => {
  const [email, setEmail] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    console.log('send', email);
  }


  return (
    <CardWrapper>
      <Card sx={ResetWrapper}>
        <CardHeader title="Reset password" sx={{ mb: '2rem' }} />
        <TextField sx={{ mb: '1rem', width: '80%' }} required label="Your email" value={email} onChange={emailChangeHandler} />
        <Button variant="contained" onClick={sendEmail}>Send</Button>
        <ResetText>
          An email will be sent, please check your inbox and follow the reset password guide.
        </ResetText>
      </Card>
    </CardWrapper>
  )
};

export default ResetPassword;