"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

class GameController {
    //Takes in a model and view as parameters, view must be a reactClass
    constructor(model, view) {
        this._view = view;
        this._model = model;
    }
    
    //Resets the game, modifies the controller and updates view
    playAgain() {
        this._model.reset();
        this.update();
    }
    
    //Checks if the move can be placed, places the move on the board, modifies the controller and updates the view
    makeMove(cell) {
        if (this._model.turn !== undefined) { //game is still palying
            if (this._model.gameboard[cell] === undefined) { //cell is empty
                this._model.move(cell);
            }
        }
        this.update();
    }
    
    //Updates the view
    update() {
        var View = this._view;
        ReactDOM.render(<View model={this._model} controller={this}/>, document.getElementById('content'));
    }
}

module.exports.GameController = GameController;