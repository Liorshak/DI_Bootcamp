/// ex 1 => the data will submit in query on the URL link
/// ex 2 => data will be sent to server if any and will not be presented in query

//part 3

let marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

//   Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

jsonElement = JSON.stringify(marioGame);
console.log(jsonElement);

/// the nested object become strings instead of reference to other objects

jsonElementPretty = JSON.stringify(marioGame, null, 2);
console.log(jsonElementPretty);
