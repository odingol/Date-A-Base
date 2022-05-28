import * as React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from '@apollo/client';
// import { QUERY_CHARACTERS } from "../utils/queries";
// Styling Imports
import { CssBaseline, Box, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Paper, Typography, Button } from "@mui/material";
import homeImage from "../assets/images/UWbackdrop.png";

const homeStyle = {
  paperContainer: {
    backgroundImage: `url(${homeImage})`,
  },
};

export default function Home(props) {
  // const { loading, data } = useQuery(QUERY_CHARACTERS);
  // const savedCharacter = data?.savedCharacter || [];
  return (
    <React.Fragment>
      <Header sx={{ mt: 5 }} />
      <Typography color="white">
        <CssBaseline />
        {/* User Info Section */}
        <Paper style={homeStyle.paperContainer} maxWidth="lg">
          <Container maxWidth="lg" className="container homepage">
            <Box>
              <Container maxWidth="md" className="userInfo">
                {/* <img></img>  */}
                <h3>Welcome to Date-A-Base!</h3>
                <p>
                  Data-A-Base is a dating simulator experience that will pull your heartstrings as your start your journey as a full-stack web developer. 
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </Container>
              {/* Saved Character Section */}
              <Container maxWidth="sm" className="matchHistory">
                {/* <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <SavedCharacter
                  savedCharacter={savedCharacter}
                  title="Your Matches"
                />
              )}
            </div> */}
                {/* Seed in matched character description below */}
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </Container>
              <Container maxWidth="sm" className="matchHistory">
                <Button variant="contained" align="center" className="startGameButton">
                  <Link className="startGame" to="/game">
                    Start Your Dating Adventure!
                  </Link>
                </Button>
              </Container>
            </Box>
          </Container>
        </Paper>
      </Typography>
      <Footer sx={{ mt: 5 }} />
    </React.Fragment>
  );
}
