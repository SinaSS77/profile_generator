// this file will make a suryey from a user in the command line and will save the answers line by line to help the user make their online profile. at the end will return a message include all information also exit the process.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (eat) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(
                `Thank you for your valuable feedback: \n
                your name is ${name} \n
                your activity is ${activity} \n
                your music is ${music} \n
                your meal is ${meal} \n
                your eat is ${eat} \n
                your sport is ${sport} \n
                your superpower is ${superpower} \n`
              );

              rl.close();
            });
          });
        });
      });
    });
  });
});
