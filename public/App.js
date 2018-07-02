
// Grab the articles as a json
$("#scrape-button").on("click", function() {

$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles")
        .append("<p data-id='" + data[i]._id 
    + "'>" + data[i].title 
    + "<br />" + data[i].link + "</p>"+ "<a class='waves-effect waves-light green btn left'>Notes</a>" + "<a class='waves-effect waves-light green lighten-2 btn left'>Save</a>" + "<br /><br/>"
        );
    
    }
  });


});

{/* <a class="waves-effect waves-light btn">button</a> */}
