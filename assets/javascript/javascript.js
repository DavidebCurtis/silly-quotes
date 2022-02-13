
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

//This section is for the slide show 

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
      sectionIndex = ind;
      document.querySelector('.controls .selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
  });

});

leftArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})

rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
})





//End of slide show

