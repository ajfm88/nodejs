// Problem 1 — Warm Up
// Fetch all users from https://jsonplaceholder.typicode.com/users
// and print only their name and email, sorted alphabetically by name.

const axios = require("axios");

async function main() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response);
    // destructure data from the response
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

main();
