import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import {QUERY_CHARACTERS} from "../utils/queries";
import {useQuery} from '@apollo/client';

export default function Game(props) {
  
  const { loading, data } = useQuery(QUERY_CHARACTERS);

  const characters = data || {};

  // const [prompt, setPrompt] = useState(characters);

    // setPrompt([...prompt])

  // const characterData = data;

  console.log("GAME CHARACTER", characters)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
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
    
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        DataBase
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
