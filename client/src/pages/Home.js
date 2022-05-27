import * as React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from '@apollo/client';
// import { QUERY_CHARACTERS } from "../utils/queries";
// Styling Imports
import { CssBaseline, Box, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home(props) {
  // const { loading, data } = useQuery(QUERY_CHARACTERS);
  // const savedCharacter = data?.savedCharacter || [];
  return (
    <React.Fragment>
      <Header sx={{ mt: 5 }} />
      <CssBaseline />
      {/* User Info Section */}
      <Container maxWidth="lg" className="container homepage">
        <Box>
          <Container maxWidth="md" className="userInfo">
            {/* <img></img>  */}
            <p>USER INFO GOES HERE</p>
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
          </Container>
          <Container maxWidth="sm" className="matchHistory">
            <button className="startGameButton">
              <Link className="startGame" to="/Game">
                Start Your Dating Adventure!
              </Link>
            </button>
          </Container>
        </Box>
      </Container>
      <Footer sx={{ mt: 5 }} />
    </React.Fragment>
  );
}
