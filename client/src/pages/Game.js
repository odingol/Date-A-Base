import React, { useState } from "react";
// import { Link } from "@mui/material";
import { QUERY_CHARACTERS } from "../utils/queries";
import { useQuery } from '@apollo/client';
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
  Link
} from "@mui/material";

import { makeStyles } from '@material-ui/core/styles';
// import { ClassNames } from "@emotion/react";

import promptQuestions from "../components/Dialogue";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/backdrop2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));

export default function Game(props) {

  // We need to import useMutation in our mutations.js so we can use the `${userName}` in our prompt1

const [promptIndex, setPromptIndex] = useState(0)
const [charPoints, setCharPoints] = useState({
  "Hayden T. Manko-Lynn": 0,
  "Jessie Scriptski": 0,
  "Charles Stylima Sheen": 0,
  "Sam Query-Lang": 0
})
console.log(promptQuestions);
const currentPrompt = promptQuestions.prompts[promptIndex]

  const classes = useStyles();
  
  const { loading, data } = useQuery(QUERY_CHARACTERS);

  const characters = data || {};

  // const [prompt, setPrompt] = useState(characters);

    // setPrompt([...prompt])

  // const characterData = data;

  console.log("GAME CHARACTER", characters)
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(promptIndex, charPoints);
const dialogueClicked = function(event) {
const charName = event.target.dataset.name
setCharPoints({...charPoints, [charName]: charPoints[charName]+1})
if (promptIndex < promptQuestions.prompts.length) {
  setPromptIndex(promptIndex +1) 
} else {
  //end logic or tie to home page for results. 
}
  
 
}

  return (
  <div className={classes.root}>
    <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    {...props}
    >
    {/* <div>
    { prompt.map((characterPrompt) => (
    <p key= {characterPrompt.id} >Hello my name is {characterPrompt.name} here is my prompt: {characterPrompt.prompt}</p>
    ))}
    </div> */}
    <Container>
      <Paper style={{padding: 80, border: "3px solid black", width: '50rem', backgroundColor: 'hsla(0, 100%, 90%, 0.8'}}>
          <>
            <Typography variant="h1" style={{padding: 20}}>
              Images
            </Typography>
            <Paper style={{border: "1px solid black", width: "50rem", height: "5rem"}} sx={{mb:3}}>
              <p>{currentPrompt.prompt}</p>
              {/* <div>
                <Dialogue characters={characters} />
              </div> */}
            </Paper>
                <Grid container spacing ={1} columns={16}>
                  <Grid item xs={16}>
               <Button onClick= {dialogueClicked} data-name = {"Hayden T. Manko-Lynn"} variant="outlined" style={{width: '40rem', padding: 15 }}>{currentPrompt.dialog1.text}</Button>
               </Grid>
               <Grid item xs={16}>
               <Button onClick= {dialogueClicked} data-name = {"Jessie Scriptski"} variant="outlined" style={{width: '40rem', padding: 15}}>{currentPrompt.dialog2.text}</Button>
               </Grid>
               <Grid item xs={16}>
               <Button onClick= {dialogueClicked} data-name = {"Charles Stylima Sheen"} variant="outlined" style={{width: '40rem', padding: 15 }}>{currentPrompt.dialog3.text}</Button>
               </Grid>
               <Grid item xs={16}>
               <Button onClick= {dialogueClicked} data-name = {"Sam Query-Lang"} variant="outlined" style={{width: '40rem', padding: 15}}>{currentPrompt.dialog4.text}</Button>
               </Grid>
               </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{m:3}}
              >
                Submit
              </Button>
          </>
      </Paper>
    </Container>
      {"Copyright Â© "}{" "}
      <Link color="inherit" href="https://mui.com/">
        DataBase
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </div>
  );
}