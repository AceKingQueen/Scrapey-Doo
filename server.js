//home page with button to scrape articles from ny times

//articles appear with buttons to save

//saved articles /saved

//each with comment button and delete from save button

//remove comment button and remove from saved page

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/scrapeydoodb");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapeydoodb";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//Routes

//GET route for scraping the NYT website
app.get("/scrape", function(req, res) {
    axios.get("https://www.nytimes.com/").then(function (response) {

    var $ = cheerio.load(response.data);

    //grab the h2 of each article
    $("h2.story-heading").each(function(i, element) {
        var result = {};

        //add link & title of every link and save them as properties of result object
        result.link = $(this)
            .children()
            .attr("href");
        result.title = $(this)
            .children()
            .text();       

        db.Article.create(result)
            .then(function(dbArticle) {
                console.log(dbArticle);
            })
            .catch(function(err) {

                return res.json(err)
            });
    });
    //If scrape complete
    res.send("Scrape complete");
    });
});

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
