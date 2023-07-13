let button = document.querySelector(".start");
let lvl = document.querySelector(".message .lvl");
let seconds = document.querySelector(".message .seconds");
let input = document.querySelector("input");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let time = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finish = document.querySelector(".finish");

const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];
const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};
let defaultLvlName = "Easy";
let defaultLvlSeconds = lvls[defaultLvlName];

lvl.innerHTML = defaultLvlName;
seconds.innerHTML = defaultLvlSeconds;
time.innerHTML = defaultLvlSeconds;
scoreTotal.innerHTML = words.length;

button.onclick = function () {
  this.remove();
  input.focus();
  wordGen();
};
function wordGen() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  theWord.innerHTML = randomWord;
  upcomingWords.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  strtplay();
}
function strtplay() {
  time.innerHTML = defaultLvlSeconds;
  let count = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML === "0") {
      clearInterval(count);
      if (
        input.value.toLocaleLowerCase() ===
        theWord.innerHTML.toLocaleLowerCase()
      ) {
        input.value = "";
        scoreGot.innerHTML++;
        if (words.length > 0) {
          wordGen();
        } else {
          let goodMsg = document.createElement("span");
          goodMsg.className = "good";
          goodMsg.innerHTML = "Cogratulation!";
          finish.appendChild(goodMsg);
          upcomingWords.remove();
        }
      } else {
        let badMsg = document.createElement("span");
        badMsg.className = "bad";
        badMsg.innerHTML = "Better Luck Next Time";
        finish.appendChild(badMsg);
      }
    }
  }, 1000);
}
