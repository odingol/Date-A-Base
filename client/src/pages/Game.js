import React, { useState } from "react";
// import { Link } from "@mui/material";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import {
  Grid,
  Paper,
  // Select,
  Button,
  // MenuItem,
  // TextField,
  Container,
  Typography,
  // InputLabel,
  // FormControl,]
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


import { makeStyles } from "@material-ui/core/styles";
// import { ClassNames } from "@emotion/react";

import promptQuestions from "../components/Dialogue";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "https://wallpaperaccess.com/full/859107.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

// Second props for gender A and gender B distinction
// Set a state called Gender to hand in game prop information
export default function Game(props) {
  // We need to import useMutation in our mutations.js so we can use the `${userName}` in our prompt1
  let navigate = useNavigate();

  const [promptIndex, setPromptIndex] = useState(0);
  const [charPoints, setCharPoints] = useState({
    "Hayden T. Manko-Lynn": 0,
    "Jessie Scriptski": 0,
    "Charles Stylima Sheen": 0,
    "Sam Query-Lang": 0,
  });
  console.log(promptQuestions);
  const currentPrompt = promptQuestions.prompts[promptIndex];
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_CHARACTERS);
  const characters = data || {};

  console.log("GAME CHARACTER", characters);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(charPoints);
  let sortedArray = []
  for(var points in charPoints){
    sortedArray.push([points, charPoints[points]])
  }

  sortedArray.sort(function(a, b){
    return b[1]-a[1];
  })
  console.log(sortedArray);

  if(sortedArray[0][1] === sortedArray[1][1]){
    console.log('true')
  }
  else{
    console.log('false')
  }

  const saveMatch = () => {
    const endMatch = {
      name: sortedArray[0][0],
      points: sortedArray[0][1]
    }
    // use useState for match or no match and call the yourMatch from local storage on home page
    // future development: direct information to database instead of local storage.
    // user array of subdocuments
    localStorage.setItem("yourMatch", JSON.stringify(endMatch))
  }
  
  // const setTieBreaker = function (character1, character2) {
  //   if (character1 === character2);
  //   return finalPrompt
  // } else {
  //   console.log('false')
  // } {

  // }

  const dialogueClicked = function (event) {
    const charName = event.target.dataset.name;
    setCharPoints({ ...charPoints, [charName]: charPoints[charName] + 1 });
    console.log(promptIndex);
    console.log(promptQuestions.prompts.length)
    if (promptIndex >= promptQuestions.prompts.length-1) {
      // create function for saving match data before moving to next page to display match
      // sortedArray.sort(function(a, b){
      //   return b[1]-a[1];
      // })
      // if(sortedArray[0][1] === sortedArray[1][1]){
      //   setTieBreaker(sortedArray[0][0], sortedArray[1][0])
      // }
      // else{
      //   console.log('false')
      // }
      saveMatch();
      navigate(`/Home`);
    } else {
      setPromptIndex(promptIndex + 1);
      //end logic or tie to home page for results.
    }
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
          <img src="${currentPrompt.img}" />
        <Container>
          <Paper
            style={{
              padding: 50,
              border: "3px solid black",
              width: "50rem",
              backgroundColor: "hsla(0, 100%, 90%, 0.8",
            }}
          >
            <>
              <Paper
                style={{
                  border: "2px solid black",
                  width: "50rem",
                  height: "5rem",
                  align: "center",
                  backgroundColor: "rgba(255, 249, 222)",
                  fontSize: "17px",
                  boxShadow: '0px 10px 10px 10px rgba(255, 249, 222, 0.7)',
                  fontWeight: "bold",
                }}
                sx={{ mb: 4 }}
              >
                <p>{currentPrompt.prompt}</p>
                
              </Paper>
              <Grid container spacing={1} columns={16}>
                <Grid item xs={16}>
                  <Button
                    onClick={dialogueClicked}
                    data-name={"Hayden T. Manko-Lynn"}
                    variant="contained"
                    style={{ width: "40rem", padding: 15 }}
                  >
                    {currentPrompt.dialog1.text}
                  </Button>
                </Grid>
                <Grid item xs={16}>
                  <Button
                    onClick={dialogueClicked}
                    data-name={"Jessie Scriptski"}
                    variant="contained"
                    style={{ width: "40rem", padding: 15 }}
                  >
                    {currentPrompt.dialog2.text}
                  </Button>
                </Grid>
                <Grid item xs={16}>
                  <Button
                    onClick={dialogueClicked}
                    data-name={"Charles Stylima Sheen"}
                    variant="contained"
                    style={{ width: "40rem", padding: 15 }}
                  >
                    {currentPrompt.dialog3.text}
                  </Button>
                </Grid>
                <Grid item xs={16}>
                  <Button
                    onClick={dialogueClicked}
                    data-name={"Sam Query-Lang"}
                    variant="contained"
                    style={{ width: "40rem", padding: 15 }}
                  >
                    {currentPrompt.dialog4.text}
                  </Button>
                </Grid>
              </Grid>
            </>
          </Paper>
        </Container>
      </Typography>
    </div>
  );
}
