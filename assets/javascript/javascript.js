const firstQuoteObj = [
  {
    text: "You call to a dog and a dog will break its neck to get to you. Dogs just want to please. Call to a cat and its attitude is, 'What's in it for me?'",
    author: "Lewis Grizzard",
  },
];
JSON.stringify(firstQuoteObj);

let firstQuoteStr = firstQuoteObj[0].text;
let firstQuoteAuth = "- " + firstQuoteObj[0].author;

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

var arrayCombined = $.map(quoteArray, function (stringVal, index) {
  return [stringVal, spacerQuoteArray[index]];
});

let callString = arrayCombined.join("");
console.log(callString);

let apiUrl = "https://api.funtranslations.com/translate/yoda.json?text=";

let fetchFinalQuote = function () {
  fetch(apiUrl + callString).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
};

fetchFinalQuote();
