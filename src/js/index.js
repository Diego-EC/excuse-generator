import "../style/index.scss";

const WHO = ["the dog", "my granma", "his turtle", "my bird", "Firulais"];
const WHAT = ["eat", "pissed", "crushed", "broked"];
const WHEN = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  sendExcuse();
};

/* Show the excuse message into the HTML tag  */
function sendExcuse() {
  document.getElementById("excuse").innerHTML = generateExcuse();
}

/* Generates a random excuse message */
function generateExcuse() {
  let randomInt;
  let excuse_who;
  let excuse_what;
  let excuse_when;

  randomInt = generateRandomInt(WHO.length - 1);
  excuse_who = WHO[randomInt];

  randomInt = generateRandomInt(WHAT.length - 1);
  excuse_what = WHAT[randomInt];

  randomInt = generateRandomInt(WHEN.length - 1);
  excuse_when = WHEN[randomInt];

  return excuse_who + " " + excuse_what + " " + excuse_when;
}

/*
 * Returns a random integer between 0 and a given integer (inclusive).
 */
function generateRandomInt(max) {
  return Math.round(Math.random() * max);
}
