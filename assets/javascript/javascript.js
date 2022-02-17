var newQuotebutton = document.querySelector("#btn-1");
var firstQuotep = document.querySelector("#first-quote");
var authorFirstquote = document.querySelector("#author-1");

var secondQuote = document.querySelector("#second-quote");
var authorTwo = document.querySelector("#author-2");
var translateQuoteButton = document.querySelector("#btn-2");

const slider = document.querySelector(".slider");


const alertPlaceholder = document.querySelector("#alert-placeholder");


// picks the person the quote will be translated to
var persons = ["yoda", "chef"];
var person = persons[Math.floor(Math.random() * persons.length)];

// quote data global variable
var quoteData = {};

// fetch request to first API
async function getQuotes() {
  const apiUrlOne = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
  return (await fetch(apiUrlOne)).json();
}

// on button click set data to handleAPICalls and insert first quote and author in to the HTML
newQuotebutton.addEventListener("click", async () => {
  try {
    const data = await handleAPICalls();
    firstQuotep.innerText = data.firstQuote.quotes[0].text;
    authorFirstquote.innerText = data.firstQuote.quotes[0].author;
  } catch (error) {
    console.log("Error!");
    console.log(error);
  }
});

// handles API calls
const handleAPICalls = async () => {
  // sets variable to the first fetch request response
  let quotesFirstResponse = await getQuotes();
  // takes the first quote and prepares it for the second API call
  let firstQuote = quotesFirstResponse.quotes[0].text;
  let callString = firstQuote.replaceAll(" ", "%20");
  // second API call
  async function getSecondQuote() {
    let apiUrlTwo =
      "https://api.funtranslations.com/translate/" + person + ".json?text=";
    return (await fetch(apiUrlTwo + callString)).json();
  }
  // sets varible to the second fetch request response
  let quotesSecondResponse = await getSecondQuote();
  // sets both fetch request reponses to object quoteData
  quoteData = {
    firstQuote: quotesFirstResponse,
    secondQuote: quotesSecondResponse,
  };
  console.log("Quotes fetched");
  console.log(quoteData);
  return quoteData;
};

// on translate button click insert translated quote and author
translateQuoteButton.addEventListener("click", async () => {
  const data = quoteData;
  secondQuote.innerText = data.secondQuote.contents.translated;
  authorTwo.innerText = data.secondQuote.contents.translation;

  console.log(authorTwo);

  saveQuotes();
  displaySavedQuotes();
});

var savedQuotes = JSON.parse(localStorage.getItem("saved quotes")) || [];


// save quote to localstorage
function saveQuotes() {
  const data = quoteData;
  const saved = {
    quote: data.secondQuote.contents.translated,
    author: data.secondQuote.contents.translation,
    
  };
  savedQuotes.push(saved);
  localStorage.setItem("saved quotes", JSON.stringify(savedQuotes));
}


// save quote to localstorage
function saveQuotes() {
  const data = quoteData;
  const saved = {
    quote: data.secondQuote.contents.translated,
    author: data.firstQuote.quotes[0].author,
  };
  savedQuotes.push(saved);
  localStorage.setItem("saved quotes", JSON.stringify(savedQuotes));
}

// load quote to element
function displaySavedQuotes() {
  for (let index = 0; index < savedQuotes.length; index++) {
    console.log(savedQuotes[index].quote);
    const makeSection = document.createElement("section");
    makeSection.innerText = savedQuotes[index].quote;
    slider.appendChild(makeSection);
  }
}

//This section is for the slide show
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

// load quote to element
function displaySavedQuotes() {
  var savecontainer = document.querySelector("#saved-quotes");
  savecontainer.innerHTML = ""

  if (savedQuotes.length === 0) {
    var alertMessage = document.createElement("p");
    alertMessage.textContent = "No Quotes yet."
    alertMessage.setAttribute("class" ,"alert");
    savecontainer.append(alertMessage);
  } else {


  for (let index = 0; index < savedQuotes.length; index++) {
 

    // create p for quote
    const quoteContainer = document.createElement("section");
    const makeP = document.createElement("p");
    makeP.innerText = savedQuotes[index].quote;
    makeP.setAttribute("class","quote-Saved ");

    const makeAuthor = document.createElement("h4");
    makeAuthor.innerText= savedQuotes[index].author;
    makeAuthor.style.textAlign = "right";
    makeAuthor.style.textTransform = "capitalize";
    makeAuthor.setAttribute("class","saved-author ");
   
  quoteContainer.setAttribute("class" , "saved");

  // savecontainer.setAttribute("class" , "saved");
    // create p for author
    quoteContainer.appendChild(makeP);
    quoteContainer.appendChild(makeAuthor);
  savecontainer.appendChild( quoteContainer);

  }
}
}

displaySavedQuotes();
// //This section is for the slide show
// const leftArrow = document.querySelector(".left");
// const rightArrow = document.querySelector(".right");
// const indicatorParents = document.querySelector(".controls ul");
// var sectionIndex = 0;

// document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
//   indicator.addEventListener("click", function () {
//     sectionIndex = ind;
//     document.querySelector(".controls .selected").classList.remove("selected");
//     indicator.classList.add("selected");
//     slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
//   });
// });

// leftArrow.addEventListener("click", function () {
//   sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
//   document.querySelector(".controls .selected").classList.remove("selected");
//   indicatorParents.children[sectionIndex].classList.add("selected");
//   slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
// });

// rightArrow.addEventListener("click", function () {
//   sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
//   document.querySelector(".controls .selected").classList.remove("selected");
//   indicatorParents.children[sectionIndex].classList.add("selected");
//   slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
// });
//End of slide show
