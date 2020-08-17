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
  document.getElementById("excuse-one").innerHTML = generateExcuse();
  document.getElementById("excuse-two").innerHTML = generateExcuse();
};

/*
 * Generates a random excuse message
 */
function generateExcuse() {
  let randomInt;
  let excuseWho;
  let excuseWhat;
  let excuseWhen;

  randomInt = generateRandomInt(WHO.length - 1);
  excuseWho = WHO[randomInt];
  randomInt = generateRandomInt(WHAT.length - 1);
  excuseWhat = WHAT[randomInt];
  randomInt = generateRandomInt(WHEN.length - 1);
  excuseWhen = WHEN[randomInt];

  return excuseWho + " " + excuseWhat + " " + excuseWhen;
}

/*
 * Returns a random integer between 0 and a given integer (inclusive).
 */
function generateRandomInt(max) {
  return Math.round(Math.random() * max);
}
