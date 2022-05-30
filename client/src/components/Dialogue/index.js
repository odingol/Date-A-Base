

// const Dialogue = ({ characters }) => {
//   if (!characters.length) {
//     return <h2>No Character Prompts Available</h2>;
//   }

//   return (
//     <>
//         {characters && characters.map((dialogueText) => (
//         <div key={dialogueText._id}>
//           <h2>{dialogueText.prompt}</h2>
//         </div>
//           ))}
//     </>
//   );
// };


  const promptQuestions  = 
    {
      charList: {
        'Hayden T. Manko-Lynn': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'male',
          codeLanguage: 'HTML',
          description: 'A fan of the classics, Hayden strives to be the best HTML developer in history. His goal is to be so good at HTML design and formatting that people forget about things that deviate from vanilla HTML. Hayden works well with classmates like Charles.'
        },
        'Jessie Scriptski': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'male',
          codeLanguage: 'JS',
          description: 'Jessie is a dedicated coder who comes from an esteemed family of developers. He likes coding, playing video games about coding, and making various javascript related puns.'
        },
        'Charles Stylima Sheen': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'male',
          codeLanguage: 'CSS',
          description: "The most stylish one in the class, Charles looks at any and all web pages with ideas on how to make them mind-blowingly polished and presentable. Charles is the one responsible for changing the spacejam.com website from it's classic 90's design to something much cleaner and professional."
        },
        'Sam Query-Lang': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'male',
          codeLanguage: 'SQL',
          description: "Obsessed with organization, Sam keeps his book bag clean and his database tables even cleaner. He is one-track minded and knows what he wants to learn. He won't say anything about it, but don't mention mongoDB to him. Just trust us."
        },
        Brian: {
          points: 0,
          image: 'https://a.simbi.com/users/17728/avatars/medium-5cb02656a1ee59d8c702eea0c398bf0a.jpg?1473672322',
          gender: 'teacher',
          codeLanguage: 'teaching',
          description: "A really cool guy, who cares for his student's growth and impeccable coding skills. Likes getting haircuts regularly, is a dad, and graduated from an undisclosed university in Michigan."
        },
        'Hayley T. Manko-Lynn': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'female',
          codeLanguage: 'HTML',
          description: 'Ready to excell from the get-go, Hayley is mostly focused on learning HTML development, but is also ready to take on the challenges of other coding concepts and languages.'
        },
        'Jess Scriptski': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'female',
          codeLanguage: 'JS',
          description: 'Jess is an aspiring web developer with a family legacy of successful coders. She is an avid gamer who wants to create a new market for javascript created video games. A big fan of dating simulators, Jess may try and woo you with javascript related puns.'
        },
        'Charlie Stylima Sheen': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'female',
          codeLanguage: 'CSS',
          description: 'Charlie commands the attention of whatever room she is in with her impeccable style and cascading demeanor. Though she may not be interested in conditionals, she will always make your projects look pristene.'
        },
        'Sammy Query-Lang': {
          points: 0,
          image: 'https://www.google.com/',
          gender: 'female',
          codeLanguage: 'SQL',
          description: 'The neat freak of neat freaks, Sammy is undoubtedly the most organized student in the class. Viewing every assignment as a database in need of a schema, working with Sammy may not provide the most ambitious projects, but will definitely be the most polished.'
        }
      },
      prompts: [
        {
          prompt: "Hayden: 'Hey you must be the new student! USERNAME Right? Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?'",
          dialog1: {
            "text": "I'm not sure yet, but I'm ready to <div> right into it! ",
            "name": "Hayden "
          },
          dialog2: "Very Cool! Maybe sometime you could help me learn about handlebars. I'd really like to impress Hayden.",
          dialog3: 'Hayden seems like a good <anchor> to have in our group. Just be careful not to push their <buttons>. ',
          dialog4: "I looked at the rubric and it doesn't look like we will be working with SQL for a few months. Maybe another time? "
        },
        {
          prompt: "Jessie: 'That's so cool! I'm here to learn about JavaScript. My dad got his doctorate in Python development and my mom was the main developer behind Firefox.'",
          dialog1: "I'm not sure how I'm going to function() with all of these topics, but my learning method is pretty sound.",
          dialog2: "Oh right on! I'm more of a Google Chrome user myself. I take it you took up JS from your mom? ",
          dialog3: "No thanks, I'm not impressed with your methods(). ",
          dialog4: "You seem really nice and detail oriented but I don't think this will function() well."
        },
        {
          prompt: "Charles: 'USERNAME do you want to be study group partners? I'm always available and my phone number is mobile responsive! 😉'",
          dialog1: "I'm just here to let my style cascade on the class! ",
          dialog2: "Oh no way! Firefox? That's pretty cool, although I do have some design ideas that they may want to change.",
          dialog3: "Sure! Let's pull ourselves up from the bootstraps and rock this class!",
          dialog4: "I'm sort of looking for someone who is looking to go above and beyond to wow the graders. Sorry. "
        },
        {
          prompt: "Sam: 'Hey USERNAME, I noticed you were looking for people to pair up with as 'study partners'. Would you like to work with me? We could be like seeds to a schema!' ",
          dialog1: "I'm here to learn about databases and go on date-a-bases. Ha Get it? ",
          dialog2: '*Ignores them* ',
          dialog3: "Let's table this for now, but maybe we could meet up later. What row are you sitting in? ",
          dialog4: 'Yeah that would be awesome! You seem well organized, want to add my number to your database? '
        },
        {
          prompt: "Brian: 'Alright class, it's time to get your groups together. Let me know who you would like to work with. But no promises that we will be able to get everyone paired up with their desired choice. Yay coding!'",
          dialog1: "Hayden T. Manko-Lynn",
          dialog2: "Jessie Scriptski",
          dialog3: "Charles Stylima Sheen",
          dialog4: "Sam Query-Lang"
        },
        {
          prompt: "Haley: 'Hey you must be the new student! USERNAME Right? Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?'",
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
          prompt: "Charlie: 'USERNAME do you want to be study group partners? I'm always available and my phone number is mobile responsive! 😉'",
          dialog1: "I'm just here to let my style cascade on the class! ",
          dialog2: "Oh no way! Firefox? That's pretty cool, although I do have some design ideas that they may want to change.",
          dialog3: "Sure! Let's pull ourselves up from the bootstraps and rock this class!",
          dialog4: "I'm sort of looking for someone who is looking to go above and beyond to wow the graders. Sorry. "
        },
        {
          prompt: "Sammy: 'Hey USERNAME, I noticed you were looking for people to pair up with as 'study partners'. Would you like to work with me? We could be like seeds to a schema!' ",
          dialog1: "I'm here to learn about databases and go on date-a-bases. Ha Get it? ",
          dialog2: '*Ignores them* ',
          dialog3: "Let's table this for now, but maybe we could meet up later. What row are you sitting in? ",
          dialog4: 'Yeah that would be awesome! You seem well organized, want to add my number to your database? '
        }
      ]
    }
   

 

export default promptQuestions;
