import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  generateExcuse();
};

function generateExcuse() {
  let randomInt;
  let who = ["the dog", "my granma", "his turtle", "my bird", "Firulais"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse;

  randomInt = generateRandomInt(who.length - 1);
  excuse = who[randomInt];

  randomInt = generateRandomInt(what.length - 1);
  excuse = excuse + " " + what[randomInt];

  randomInt = generateRandomInt(when.length - 1);
  excuse = excuse + " " + when[randomInt];

  document.getElementById("excuse").innerHTML = excuse;
}

/**
 * Returns a random integer between 0 and a given integer (inclusive).
 */
function generateRandomInt(max) {
  return Math.round(Math.random() * max);
}
