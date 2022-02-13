var newQuotebutton = document.querySelector("#new-quote-button");
var firstQuotecontainer = document.querySelector("#first-quote-container");
var firstQuotep = document.querySelector("#first-quote");



var getQuotes = function () {}
var apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

fetch(apiUrl)
.then(function (response) {
response.json().then(function(data){
    // return (data);
    // console.log(data.quotes[0]);
 
    // firstQuotecontainer.innerHTML = data.quotes[0];
    displayQuotes(data)
})

})
var displayQuotes = function (data) {

//    console.log(data.quotes[0].text)
// console.log(data);
// console.log(data.quotes[0]);
// // console.log(data.quotes.text);
// var quote = data.quotes[0];
// const myJSON = JSON.stringify(data.quotes[0]);

firstQuotep.innerHTML = data.quotes[0].text;

}


// newQuotebutton.addEventListener("click" , getQuotes);
newQuotebutton.addEventListener("click" , displayQuotes);