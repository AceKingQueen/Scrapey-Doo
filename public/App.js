// Grab the articles as a json
  // $("#articles").empty();

function renderPage(saved) {
  $.getJSON("/articles", function(data){

    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      // What happens if the article is not saved.
      if(saved === "default" && data[i].saved === false) {
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

      if(saved === "saved" && data[i].saved === true) {
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
    };
  });

};


$(document).ready(function(){
  $('.modal').modal();


  renderPage("default");



});


$(document).on("click", "#save", function () {

  var thisId = $(this).attr("data-id");


});



$("#saved-button").on("click", function() {
  
  $("#articles").empty();
  renderPage("saved");

}); 

$("#scrape-button").on("click", function () {

  $.getJSON("/scrape", function (data) {


  });

  window.location.reload()
});
