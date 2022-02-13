var newQuotebutton = document.querySelector("#new-quote-button");
var firstQuotecontainer = document.querySelector("#first-quote-container");



var getQuotes = function () {}
var apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

fetch(apiUrl)
.then(function (response) {
response.json().then(function(data){
// console.log(data.quotes[0]);

    // firstQuotecontainer.innerHTML = data.quotes[0];

 displayQuotes(data)

})

})
var displayQuotes = function (data) {
console.log(data);

firstQuotecontainer.innerHTML = data.quotes[0];

}



newQuotebutton.addEventListener("click" , displayQuotes);