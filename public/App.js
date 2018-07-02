
// Grab the articles as a json
$("#scrape-button").on("click", function() {

$.getJSON("/articles", function(data) {

//get only first 20 articles  
var firstTwentyArticles = data.slice(0, 21);

//break up array into individual articles
while (firstTwentyArticles.length > 0) {
  var eachArticle = firstTwentyArticles.splice(0,1);

  // console.log(eachArticle);
}

for (var i = 0; i < data.length; i++) {
  // Display the apropos information on the page
  $("#articles")
    .append("<p data-id='" + data[i]._id 
+ "'>" + data[i].title 
+ "<br />" + data[i].link + "</p>" 
+ "<a id='note' class='waves-effect waves-light green btn left'>Add a Note</a>" 
+ "<p> </p>"
+ "<a id='save' class='waves-effect waves-light green lighten-2 btn left'>Save</a>" 
+ "<br /><br />"
);
};
});
});

$(document).on("click", "#save", function() {

  var thisId = $(this).attr("data-id");

  alert("article saved");

});



