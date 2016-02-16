"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

class GameController {
    constructor(model, view) {
        this._view = view;
        this._model = model;
    }
    
    playAgain() {
        this._model.reset();
        this.update();
    }
    
    makeMove(cell) {
        this._model.move(cell);
        this.update();
    }
    
    update() {
        var View = this._view;
        ReactDOM.render(<View model={this._model} controller={this}/>, document.getElementById('content'));
    }
}

module.exports.GameController = GameController;