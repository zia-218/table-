// Number Guessing Game

// Function to start the game
function startGame() {
  // Generate a random number between 1 and 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  
  let guesses = 0;  // Initialize the guess counter
  let guessedCorrectly = false;  // Flag to check if the player guessed correctly
  
  // Display initial messages in the console
  console.log("Welcome to the Number Guessing Game!");
  console.log("I have selected a number between 1 and 100. Try to guess it!");
  
  // Game loop (this will keep the game running until the player guesses correctly)
  while (!guessedCorrectly) {
    // Ask the player for their guess (you can replace prompt with your input method)
    let userGuess = prompt("Enter your guess (between 1 and 100):");
    
    // Check if the input is a valid number
    userGuess = parseInt(userGuess);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      console.log("Invalid input! Please enter a number between 1 and 100.");
      continue;
    }

    guesses++;  // Increment the guess count

    // Compare the guess with the secret number
    if (userGuess < secretNumber) {
      console.log("Too low! Try again.");
    } else if (userGuess > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(`Congratulations! You've guessed the number ${secretNumber} in ${guesses} attempts.`);
      guessedCorrectly = true;  // Set the flag to true to exit the loop
    }
  }
}

// Start the game when the script runs
startGame();
