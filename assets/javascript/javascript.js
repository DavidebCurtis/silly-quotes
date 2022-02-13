var secondQuote = document.querySelector("#second-quote");
var authorTwo = document.querySelector("#author-2");
var btnTwo = document.querySelector("#btn-2");

const firstQuoteObj = [
  {
    text: "You call to a dog and a dog will break its neck to get to you. Dogs just want to please. Call to a cat and its attitude is, 'What's in it for me?'",
    author: "Lewis Grizzard",
  },
];

JSON.stringify(firstQuoteObj);

// settings values to variables
let firstQuoteStr = firstQuoteObj[0].text;
let firstQuoteAuth = "- " + firstQuoteObj[0].author;

// arrays to be mapped
const quoteArray = firstQuoteStr.split(" ");
const spacerQuoteArray = [
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
  "%20",
];

// combines the arrays
var arrayCombined = $.map(quoteArray, function (stringVal, index) {
  return [stringVal, spacerQuoteArray[index]];
});

// string to be used in get request
let callString = arrayCombined.join("");
console.log(callString);

// get randomg persons to use it get request
var persons = ["yoda", "chef"];
var person = persons[Math.floor(Math.random() * persons.length)];
console.log(person);

// url to use in get request
let apiUrl =
  "https://api.funtranslations.com/translate/" + person + ".json?text=";

// get request
let fetchFinalQuote = function () {
  fetch(apiUrl + callString).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // print quote and author to page
        secondQuote.innerText = data.contents.translated;
        authorTwo.innerText = firstQuoteAuth;
      });
    }
  });
};

// call function on button click
btnTwo.addEventListener("click", fetchFinalQuote);
