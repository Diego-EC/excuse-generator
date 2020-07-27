import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  generateExcuse();
};

function generateExcuse() {
  let randomInt;
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse;

  randomInt = generateRandomInt(0, 3);
  excuse = who[randomInt];
  randomInt = generateRandomInt(0, 3);
  excuse = excuse + " " + what[randomInt];
  randomInt = generateRandomInt(0, 4);
  excuse = excuse + " " + when[randomInt];

  document.getElementById("excuse").innerHTML = excuse;
  //console.log(randomInt);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function generateRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
