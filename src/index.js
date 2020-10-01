const client = require("./client");
require("dotenv").config({ path: "../.env" });

// distinguishing the different types of error
// otherwhise we can use only one try/catch block and return a general error
const login = async () => {
  const credentials = process.env.DISCORD_SECRET || false;

  if (credentials) {
    try {
      await client.client.login(process.env.DISCORD_SECRET);
    } catch (e) {
      // DISCORD_SECRET is not valid, failed to login
      console.log("The token provided not seems to be valid");
      process.exit(1);
    }
  } else {
    // DISCORD_SECRET is empty or cannot find .env file
    console.log("You must provide a token");
    process.exit(1);
  }
};

login();
