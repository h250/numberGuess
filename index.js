import inquirer from "inquirer";
const computerGenNum = Math.floor(Math.random() * 10);
let score = 0;
async function startloop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "No"],
                message: "Do you want to continue "
            }
        ]);
    } while (again.restart === "Yes");
}
startloop();
async function guessNumber() {
    let guessNum = Math.floor(Math.random() * 10);
    let tip;
    if (guessNum % 2 == 0) {
        tip = "Tip: The number is Even";
    }
    else {
        tip = "Tip: The number is odd";
    }
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: `Enter a number b/w 1-10: ${tip}`
        }
    ]);
    console.log(`Your Guess: ${answer.userGuess} and system generated number is ${guessNum}`);
    if (answer.userGuess === guessNum) {
        score++;
        console.log(`You won, Your score is ${score}`);
    }
    else {
        console.log(`You lose, your score is ${score}`);
    }
}
