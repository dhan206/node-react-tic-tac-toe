"use strict";

var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Title = React.createClass({
    render: function() {
        return <h3># Tic Tac Toe Game #</h3>;
    }
})

var InformationBox = React.createClass({
    
    handleClick: function() {
        this.props.controller.playAgain();
    },
    
    render: function() {
        var Button  = ReactBootstrap.Button;
        var game = this.props.model;
        if (game.turn !== undefined) {
            return(
                <h4>Your turn, player &#34;{game.players[game.turn]}&#34;</h4>
            )
        } else if (game.winner !== undefined) {
            return (
                <div>
                    <h4>Player &#34;{game.winner}&#34; has won! <Button bsStyle="warning" onClick={this.handleClick}>Play Again</Button></h4>
                </div>
            )
        } else {
            return (
                <div>
                    <h4>Tie Game! <Button bsStyle="warning" onClick={this.handleClick}>Play Again</Button></h4>
                </div>
            )
        }
    }
})

var GameButton = React.createClass({ 
    handleClick: function() {
        this.props.controller.makeMove(this.props.id);
    },
    
    render: function() {
        var Button = ReactBootstrap.Button;
        return(
            <Button className="btn btn-lg gameButton" onClick={this.handleClick} id={this.props.id}>{this.props.model.gameboard[this.props.id]}</Button>
        )
    }
})

var Gameboard = React.createClass({
    render: function() {
        var contrProp = this.props.controller;
        var modelProp = this.props.model;
        var buttonList = this.props.model.gameboard.map(function(cell, i) {
            return <GameButton id={i} key={i} model={modelProp} controller={contrProp}/>
        })
        
        return(
            <div id="gameboard">
                { buttonList }
            </div>
        )
    }
})

var Scoreboard = React.createClass({
    render: function() {
        var players = this.props.model.players;
        var score = this.props.model.gameStats;
        console.log(score);
        return(
            <div>
                <strong>SCORE </strong>
                <span>Player {players[0]} : {score[0]} | </span>
                <span>Player {players[1]} : {score[1]} | </span>
                <span>Ties : {score["tie"]}</span>
            </div>
        )
    }
})

var GameInterface = React.createClass({
    render: function() {
       return(
            <div>
                <Title />
                <InformationBox model={this.props.model} controller={this.props.controller}/>
                <Gameboard model={this.props.model} controller={this.props.controller}/>
                <Scoreboard model={this.props.model} />
            </div>
       )
    }
})

module.exports.GameInterface = GameInterface;