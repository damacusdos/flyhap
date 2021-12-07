import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, TextField, Button } from "@mui/material";
import styled from "styled-components";

const CardWrapper = {
  width: "350px",
  padding: "3rem 1rem",
};

const LoginWrapper = styled.div`
  background-color: #f8e2e9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: #000;
  }
  .button-group {
    margin-bottom: 1rem;
  }
  .reset-password {
    font-size: 14px;
  }
`;

const FormTitle = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Card sx={CardWrapper}>
        <CardContent>
          <FormTitle>🔑</FormTitle>
          <FormContent>
            <TextField sx={{ mt: "1rem" }} required label="Name" />
            <TextField sx={{ mt: "1rem" }} required label="Password" />
          </FormContent>
          <div className="button-group">
            <Button variant="contained" disableElevation sx={{ mr: "1rem" }}>
              Log in
            </Button>
            <Button variant="contained" disableElevation>
              Sign Up
            </Button>
          </div>
          <Link to="/" className="reset-password">
            Forgot password?
          </Link>
        </CardContent>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
