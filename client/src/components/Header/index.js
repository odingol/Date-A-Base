import React from "react";
import { Typography, Button } from "@mui/material";
import Auth from "../../utils/auth";
import Signup from "../../pages/Signup";


export default function Header(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Typography
      variant="h5"
      color="gold"
      background-color="purple"
      align="center"
    >
      <h1 textAlign="center" className="gameTitle">
        Date<span>-A-</span>Base
      </h1>
      {Auth.loggedIn() ? (
        <>
          <Button variant="contained" align="right" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" align="right" onClick={Signup}>
            Sign up
          </Button>
        </>
      )}
    </Typography>
  );
}
