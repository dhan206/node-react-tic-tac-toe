'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var gameModel = require("./game"); //M
// var gameController = require("./controller"); //C


var Title = React.createClass({
    render: function() {
        return <h3>TicTacToe Game!</h3>;
    }
})

var InformationBox = React.createClass({
    render: function() {
        
    }
})



ReactDOM.render(<Title />, document.getElementById('content'));