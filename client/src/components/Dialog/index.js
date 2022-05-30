import React from "react";
// import { useQuery } from '@apollo/client';
import { Link, Typography } from "@mui/material";

export default function Dialog(props) {
  const promptQuestions  = [
    {
      prompts: [
        // {
        //   prompt: "Hayden: 'Hey you must be the new student! `${userName}` Right? Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?'",
        //   dialog: dialog[1].id,
          
        // },
        {
          prompt: "Jessie: 'That's so cool! I'm here to learn about JavaScript. My dad got his doctorate in Python development and my mom was the main developer behind Firefox.'",
          dialog1: "I'm not sure how I'm going to function() with all of these topics, but my learning method is pretty sound.",
          dialog2: "Oh right on! I'm more of a Google Chrome user myself. I take it you took up JS from your mom? ",
          dialog3: "No thanks, I'm not impressed with your methods(). ",
          dialog4: "You seem really nice and detail oriented but I don't think this will function() well."
        },
        {
          prompt: "Charles: '`${userName}` do you want to be study group partners? I'm always available and my phone number is mobile responsive! 😉'",
          dialog1: "I'm just here to let my style cascade on the class! ",
          dialog2: "Oh no way! Firefox? That's pretty cool, although I do have some design ideas that they may want to change.",
          dialog3: "Sure! Let's pull ourselves up from the bootstraps and rock this class!",
          dialog4: "I'm sort of looking for someone who is looking to go above and beyond to wow the graders. Sorry. "
        },
        {
          prompt: "Sam: 'Hey `${userName}`, I noticed you were looking for people to pair up with as 'study partners'. Would you like to work with me? We could be like seeds to a schema!' ",
          dialog1: "I'm here to learn about databases and go on date-a-bases. Ha Get it? ",
          dialog2: '*Ignores them* ',
          dialog3: "Let's table this for now, but maybe we could meet up later. What row are you sitting in? ",
          dialog4: 'Yeah that would be awesome! You seem well organized, want to add my number to your database? '
        },
        {
          prompt: "Haley: 'Hey you must be the new student! `${userName}` Right? Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?'",
          dialog1: "I'm not sure yet, but I'm ready to <div> right into it! ",
          dialog2: "Very Cool! Maybe sometime you could help me learn about handlebars. I'd really like to impress Hayden.",
          dialog3: 'Hayden seems like a good <anchor> to have in our group. Just be careful not to push their <buttons>. ',
          dialog4: "I looked at the rubric and it doesn't look like we will be working with SQL for a few months. Maybe another time? "
        },
        {
          prompt: "Jess: 'That's so cool! I'm here to learn about JavaScript. My dad got his doctorate in Python development and my mom was the main developer behind Firefox.'",
          dialog1: "I'm not sure how I'm going to function() with all of these topics, but my learning method is pretty sound.",
          dialog2: "Oh right on! I'm more of a Google Chrome user myself. I take it you took up JS from your mom? ",
          dialog3: "No thanks, I'm not impressed with your methods(). ",
          dialog4: "You seem really nice and detail oriented but I don't think this will function() well."
        },
        {
          prompt: "Charlie: '`${userName}` do you want to be study group partners? I'm always available and my phone number is mobile responsive! 😉'",
          dialog1: "I'm just here to let my style cascade on the class! ",
          dialog2: "Oh no way! Firefox? That's pretty cool, although I do have some design ideas that they may want to change.",
          dialog3: "Sure! Let's pull ourselves up from the bootstraps and rock this class!",
          dialog4: "I'm sort of looking for someone who is looking to go above and beyond to wow the graders. Sorry. "
        },
        {
          prompt: "Sammy: 'Hey `${userName}`, I noticed you were looking for people to pair up with as 'study partners'. Would you like to work with me? We could be like seeds to a schema!' ",
          dialog1: "I'm here to learn about databases and go on date-a-bases. Ha Get it? ",
          dialog2: '*Ignores them* ',
          dialog3: "Let's table this for now, but maybe we could meet up later. What row are you sitting in? ",
          dialog4: 'Yeah that would be awesome! You seem well organized, want to add my number to your database? '
        }
      ]
    }
  ] 

} 


