// Howdy

// Incorporate header element

// Insert username for characters to reference in their dialogue

// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import * as React from "react";
//condence this
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className="container homepage">
        <Box>
          <Container maxWidth="md" className="userInfo">
            <img></img>
            <p>USER INFO GOES HERE</p>
          </Container>
          <Container maxWidth="sm" className="matchHistory">
            <button className="startGameButton">
              <Link className="startGame" to="/gamepage">
              Start Your Dating Adventure!
              </Link>
            </button>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;