"use strict";

var React = require('react');
var game = require("./game.js");                //Model
var components = require("./components.js");    //View
var controller = require("./controller.js");    //Controller

var View = components.GameInterface; //Initiates the view
var ticTacToeGame = new game.TicTacToeGame(3, ["X", "O"]); //Initiates the game model
var gameController = new controller.GameController(ticTacToeGame, View); //Initials the game controller

gameController.update(); //Initiates the first rendering of the game