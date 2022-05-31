
const promptQuestions = 
  {
  charList: {
    "Hayden T. Manko-Lynn": {
      points: 0,
      image: "https://www.google.com/",
      gender: "male",
      codeLanguage: "HTML",
      description:
        "A fan of the classics, Hayden strives to be the best HTML developer in history. His goal is to be so good at HTML design and formatting that people forget about things that deviate from vanilla HTML. Hayden works well with classmates like Charles.",
    },
    "Jessie Scriptski": {
      points: 0,
      image: "https://www.google.com/",
      gender: "male",
      codeLanguage: "JS",
      description:
        "Jessie is a dedicated coder who comes from an esteemed family of developers. He likes coding, playing video games about coding, and making various javascript related puns.",
    },
    "Charles Stylima Sheen": {
      points: 0,
      image: "https://www.google.com/",
      gender: "male",
      codeLanguage: "CSS",
      description:
        "The most stylish one in the class, Charles looks at any and all web pages with ideas on how to make them mind-blowingly polished and presentable. Charles is the one responsible for changing the spacejam.com website from it's classic 90's design to something much cleaner and professional.",
    },
    "Sam Query-Lang": {
      points: 0,
      image: "https://www.google.com/",
      gender: "male",
      codeLanguage: "SQL",
      description:
        "Obsessed with organization, Sam keeps his book bag clean and his database tables even cleaner. He is one-track minded and knows what he wants to learn. He won't say anything about it, but don't mention mongoDB to him. Just trust us.",
    },
    Brian: {
      points: 0,
      image:
        "https://a.simbi.com/users/17728/avatars/medium-5cb02656a1ee59d8c702eea0c398bf0a.jpg?1473672322",
      gender: "teacher",
      codeLanguage: "teaching",
      description:
        "A really cool guy, who cares for his student's growth and impeccable coding skills. Likes getting haircuts regularly, is a dad, and graduated from an undisclosed university in Michigan.",
    },
    "Hayley T. Manko-Lynn": {
      points: 0,
      image: "https://www.google.com/",
      gender: "female",
      codeLanguage: "HTML",
      description:
        "Ready to excell from the get-go, Hayley is mostly focused on learning HTML development, but is also ready to take on the challenges of other coding concepts and languages.",
    },
    "Jess Scriptski": {
      points: 0,
      image: "https://www.google.com/",
      gender: "female",
      codeLanguage: "JS",
      description:
        "Jess is an aspiring web developer with a family legacy of successful coders. She is an avid gamer who wants to create a new market for javascript created video games. A big fan of dating simulators, Jess may try and woo you with javascript related puns.",
    },
    "Charlie Stylima Sheen": {
      points: 0,
      image: "https://www.google.com/",
      gender: "female",
      codeLanguage: "CSS",
      description:
        "Charlie commands the attention of whatever room she is in with her impeccable style and cascading demeanor. Though she may not be interested in conditionals, she will always make your projects look pristene.",
    },
    "Sammy Query-Lang": {
      points: 0,
      image: "https://www.google.com/",
      gender: "female",
      codeLanguage: "SQL",
      description:
        "The neat freak of neat freaks, Sammy is undoubtedly the most organized student in the class. Viewing every assignment as a database in need of a schema, working with Sammy may not provide the most ambitious projects, but will definitely be the most polished.",
    },
  },
  // Gender A Prompt and Gender B Prompt split
  prompts: [
    {
      prompt:
        "Hayden: 'Hey you must be the new student! Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?'",
      dialog1: {
        text: "I'm not sure yet, but I'm ready to <div> right into it! ",
        name: "Hayden T. Manko-Lynn",
      },
      dialog2: {
        text: "I’m not sure how I’m going to function() with all of these topics, but my learning method is pretty sound.",
        name: "Jessie Scriptski",
      },
      dialog3: {
        text: "I’m just here to let my style cascade on the class!",
        name: "Charles Stylima Sheen",
      },
      dialog4: {
        text: "I’m here to learn about databases and go on date-a-bases. Ha Get it?",
        name: "Sam Query-Lang"
      }
    },
    {
      prompt:
        "Jessie: 'That's so cool! I'm here to learn about JavaScript. My dad got his doctorate in Python development and my mom was the main developer behind Firefox.'",
      dialog1: {
        text: "Very Cool! Maybe sometime you could help me learn about handlebars. I’d really like to impress Hayden.",
        name: "Hayden T. Manko-Lynn"
        },
      dialog2: {
        text: "Oh right on! I'm more of a Google Chrome user myself. I take it you took up JS from your mom? ",
        name: "Jessie Scriptski"
      },
      dialog3: {
        text: "Oh no way! Firefox? That’s pretty cool, although I do have some design ideas that they may want to change.",
        name: "Charles Stylima Sheen"
      },
      dialog4: {
        text: "*Ignores them*",
        name: "Sam Query-Lang"
      }
    },
    {
      prompt:
        "Charles: Do you want to be study group partners? I'm always available and my phone number is mobile responsive! 😉'",
      dialog1: {
        text: "Hayden seems like a good <anchor> to have in our group. Just be careful not to push their <buttons>.",
        name: "Hayden T. Manko-Lynn"
      },
      dialog2: {
        text: "No thanks, I’m not impressed with your methods().",
        name: "Jessie Scriptski"
      },
      dialog3: {
        text: "Sure! Let's pull ourselves up from the bootstraps and rock this class!",
        name: "Charles Stylima Sheen"
      },
      dialog4: {
        text: "Let’s table this for now, but maybe we could meet up later. What row are you sitting in?",
        name: "Sam Query-Lang"
      }
    },
    {
      prompt:
        "Sam: 'Hey, I noticed you were looking for people to pair up with as 'study partners'. Would you like to work with me? We could be like seeds to a schema!' ",
      dialog1: {
        text: "I looked at the rubric and it doesn’t look like we will be working with SQL for a few months. Maybe another time?",
        name: "Hayden T. Manko-Lynn"
      },
      dialog2: {
        text: "You seem really nice and detail oriented but I don’t think this will function() well.",
        name: "Jessie Scriptski"
      },
      dialog3: {
        text: "I’m sort of looking for someone who is looking to go above and beyond to wow the graders. Sorry.",
        name: "Charles Stylima Sheen"
      },
      dialog4: {
        text: "Yeah that would be awesome! You seem well organized, want to add my number to your database? ",
        name: "Sam Query-Lang"
      }
    },
    {
      prompt:
        "Brian: 'Alright class, it's time to get your groups together. Let me know who you would like to work with. But no promises that we will be able to get everyone paired up with their desired choice. Yay coding!'",
      dialog1: {
        text: "Hayden",
        name: "Hayden T. Manko-Lynn"
      },
      dialog2: {
        text: "Jessie",
        name: "Jessie Scriptski"
      },
      dialog3: {
        text: "Charlie",
        name: "Charles Stylima Sheen"
      },
      dialog4: {
        text: "Sam",
        name: "Sam Query-Lang"
      }
    },
    // {
    //   prompt:
    //     "Haley: 'Hey you must be the new student! Welcome to the UW Full-Stack Web Development Boot Camp! What are you most excited to learn about?'",
    //   dialog1: {
    //     text: "I'm not sure yet, but I'm ready to <div> right into it! ",
    //     name: "Hayley T. Manko-Lynn"
    //   },
    //   dialog2: {
    //     text: "I’m not sure how I’m going to function() with all of these topics, but my learning method is pretty sound.",
    //     name: "Jess Scriptski"
    //   },
    //   dialog3: {
    //     text: "I’m just here to let my style cascade on the class!",
    //     name: "Charlie Stylima Sheen"
    //   },
    //   dialog4: {
    //     text: "I’m here to learn about databases and go on date-a-bases. Ha Get it?",
    //     name: "Sammy Query-Lang"
    //   }
    // },
    // {
    //   prompt:
    //     "Jess: 'That's so cool! I'm here to learn about JavaScript. My dad got his doctorate in Python development and my mom was the main developer behind Firefox.'",
    //   dialog1: {
    //     text: "Very Cool! Maybe sometime you could help me learn about handlebars. I’d really like to impress Hayden.",
    //     name: "Hayley T. Manko-Lynn"
    //   },
    //   dialog2: {
    //     text: "Oh right on! I'm more of a Google Chrome user myself. I take it you took up JS from your mom? ",
    //     name: "Jess Scriptski"
    //   },
    //   dialog3: {
    //     text: "Oh no way! Firefox? That’s pretty cool, although I do have some design ideas that they may want to change.",
    //     name: "Charlie Stylima Sheen"
    //   },
    //   dialog4: {
    //     text: "*Ignores them*",
    //     name: "Sammy Query-Lang"
    //   }
    // },
    // {
    //   prompt:
    //     "Charlie: 'Do you want to be study group partners? I'm always available and my phone number is mobile responsive! 😉'",
    //   dialog1: {
    //     text: "Hayden seems like a good <anchor> to have in our group. Just be careful not to push their <buttons>.",
    //     name: "Hayley T. Manko-Lynn"
    //   },
    //   dialog2: {
    //     text: "No thanks, I’m not impressed with your methods().",
    //     name: "Jess Scriptski"
    //   },
    //   dialog3: {
    //     text: "Sure! Let's pull ourselves up from the bootstraps and rock this class!",
    //     name: "Charlie Stylima Sheen"
    //   },
    //   dialog4: {
    //     text: "Let’s table this for now, but maybe we could meet up later. What row are you sitting in?",
    //     name: "Sammy Query-Lang"
    //   }
    // },
    // {
    //   prompt:
    //     "Sammy: 'Hey, I noticed you were looking for people to pair up with as 'study partners'. Would you like to work with me? We could be like seeds to a schema!' ",
    //   dialog1: {
    //     text: "I looked at the rubric and it doesn’t look like we will be working with SQL for a few months. Maybe another time?",
    //     name: "Hayley T. Manko-Lynn"
    //   },
    //   dialog2: {
    //     text: "You seem really nice and detail oriented but I don’t think this will function() well.",
    //     name: "Jess Scriptski"
    //   },
    //   dialog3: {
    //     text: "I’m sort of looking for someone who is looking to go above and beyond to wow the graders. Sorry.",
    //     name: "Charlie Stylima Sheen"
    //   },
    //   dialog4: {
    //     text: "Yeah that would be awesome! You seem well organized, want to add my number to your database? ",
    //     name: "Sammy Query-Lang"
    //   }
    // },
  ]
};

export default promptQuestions;
