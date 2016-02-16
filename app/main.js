"use strict";

var React = require('react');
var game = require("./game.js");
var components = require("./components.js");
var controller = require("./controller.js");

var View = components.GameInterface;
var ticTacToeGame = new game.TicTacToeGame(3, ["X", "O"]);
var gameController = new controller.GameController(ticTacToeGame, View);

gameController.update();