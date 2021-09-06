//Import packages
const mongoose = require('mongoose');
const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");

//models
const Actor = require('./models/actors');
const Movie = require('./models/movie');
