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
