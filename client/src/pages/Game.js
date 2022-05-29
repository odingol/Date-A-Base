import React from "react";
// import { Link } from "@mui/material";
// import { QUERY_CHARACTERS } from "../utils/queries";
// import { useQuery } from '@apollo/client';
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

import Dialogue from '../components/Dialogue'

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

  // const promptArray = [
  //   {
  //     prompt1: `Hey you must be the new student! ${userName} Right? Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?`,
  //     responses: [
  //       {
  //         character: 'Hayden T. Manko-Lynn',
  //         dialogue: "I’m not sure yet, but I’m ready to <div> right into it!",
  //       },
  //       {
  //         character: 'Jessie Scriptski',
  //         dialogue: 'I’m not sure how I’m going to function() with all of these topics, but my learning method is pretty sound.',
  //       },
  //       {
  //         character: 'Charles Stylima Sheen',
  //         dialogue: 'I’m just here to let my style cascade on the class!',
  //       },
  //       {
  //         character: 'Sam Query-Lang',
  //         dialogue: 'I’m here to learn about databases and go on date-a-bases. Ha Get it?',
  //       },
  //     ]
  //   }
  // ];


  const classes = useStyles();
  
  // const { loading, data } = useQuery(QUERY_CHARACTERS);

  // const characters = data || {};

  // const [prompt, setPrompt] = useState(characters);

    // setPrompt([...prompt])

  // const characterData = data;

  // console.log("GAME CHARACTER", characters)
  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  return (
  <div className={classes.root}>
    <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    // {...props}
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
              {/* <h1>Dialogue</h1> */}
              <div>
                <Dialogue />
              </div>
            </Paper>
                <Grid container spacing ={1} columns={16}>
                  <Grid item xs={16}>
               <Button variant="outlined" style={{width: '40rem', padding: 15 }}>Prompt</Button>
               </Grid>
               <Grid item xs={16}>
               <Button variant="outlined" style={{width: '40rem', padding: 15}}>Prompt</Button>
               </Grid>
               <Grid item xs={16}>
               <Button variant="outlined" style={{width: '40rem', padding: 15 }}>Prompt</Button>
               </Grid>
               <Grid item xs={16}>
               <Button variant="outlined" style={{width: '40rem', padding: 15}}>Prompt</Button>
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
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        DataBase
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </div>
  );
}
