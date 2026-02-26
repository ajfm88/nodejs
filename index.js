// Problem 1 — Warm Up
// Fetch all users from https://jsonplaceholder.typicode.com/users
// and print only their name and email, sorted alphabetically by name.

const axios = require("axios");

async function main() {
  try {
    // make a GET request to the API and destructure the data property
    // axios always wraps the response in { data }, regardless of what the API returns
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    // sort by the name property
    /*data.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
      // keep a before b
        return -1;
      }
      if (nameA > nameB) {
      // put b before a
        return 1;
      }
      // equal, dont move them
      return 0;
    });*/

    // sort the array of user objects alphabetically by name
    // localeCompare compares two strings and returns -1, 0, or 1
    // which is exactly what sort() needs to order the array
    data.sort((a, b) => a.name.localeCompare(b.name));

    // map over the sorted array and return a new array
    // with only the name and email properties from each user object
    const simplifiedUsers = data.map((user) => ({
      name: user.name,
      email: user.email,
    }));

    // print the final result
    console.log(simplifiedUsers);
  } catch (err) {
    // if anything goes wrong (network error, bad response, etc.)
    // catch it and print the error message
    console.log("Error: ", err.message);
  }
}

// call the function to actually run it
// without this line, nothing happens
main();
