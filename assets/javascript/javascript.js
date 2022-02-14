var newQuotebutton = document.querySelector("#btn-1");
var firstQuotep = document.querySelector("#first-quote");
var authorFirstquote = document.querySelector("#author-1");

var secondQuote = document.querySelector("#second-quote");
var authorTwo = document.querySelector("#author-2");
var btnTwo = document.querySelector("#btn-2");
var persons = ["yoda", "chef"];
var person = persons[Math.floor(Math.random() * persons.length)];

// first fetch request
var getQuotes = function () {
  var apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        firstQuotep.innerText = data.quotes[0].text;
        authorFirstquote.innerText = data.quotes[0].author;
        JSON.stringify(data.quotes[0].text);
        var firstAuth = data.quotes[0].author;
        var firstQuote = data.quotes[0].text;
        console.log(firstQuote);

        // arrays to be mapped
        const quoteArray = firstQuote.split(" ");
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
        fetchFinalQuote(callString, firstAuth);
        return callString + firstAuth;
      });
    }
  });
};

newQuotebutton.addEventListener("click", getQuotes);

// url to use in second fecth request
let apiUrl =
  "https://api.funtranslations.com/translate/" + person + ".json?text=";

//  second fetch request
let fetchFinalQuote = function (callString, firstAuth) {
  console.log(callString);
  fetch(apiUrl + callString).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // print quote and author to page
        console.log(data);
        secondQuote.innerText = data.contents.translated;
        authorTwo.innerText = firstAuth;
      });
    }
  });
};

//
//This section is for the slide show
const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
//End of slide show
//
