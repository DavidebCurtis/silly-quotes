var newQuotebutton = document.querySelector("#btn-1");
// var firstQuotep = document.querySelector("#first-quote");
var authorFirstquote = document.querySelector("#author-1");



var getQuotes = function () {
var apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

fetch(apiUrl)
.then(function (response) {
    if(response.ok) {
response.json().then(function(data){
 
firstQuotep.innerText = data.quotes[0].text;
authorFirstquote .innerText = (data.quotes[0].author);

var firstQuote = data.quotes[0].text;
return(firstQuote);
})
    }
})
}

newQuotebutton.addEventListener("click",getQuotes);
