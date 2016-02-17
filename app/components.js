"use strict";

var React = require('react');
var ReactBootstrap = require('react-bootstrap');

//The TicTacToe game title
var Title = React.createClass({
    render: function() {
        return <h1># Tic-Tac-Toe #</h1>;
    }
})

//Game information box that displays who's turn it is, whether someone has won or if the game is tied
var InformationBox = React.createClass({
    
    handleClick: function() {
        this.props.controller.playAgain(); //delegates the interaction to the controller
    },
    
    render: function() {
        var Button  = ReactBootstrap.Button;
        var game = this.props.model;
        if (game.turn !== undefined) { //game is still playing
            return(
                <div className="infoBox">
                    <p>Your turn, Player &#39;<span id="turn">{game.players[game.turn]}</span>&#39;</p>
                </div>
            )
        } else if (game.winner !== undefined) { //there is a winner
            return (
                <div className="infoBox">
                    <p>Player &#39;<span id="turn">{game.winner}</span>&#39; has won! <Button bsStyle="info" className="btn-lg" onClick={this.handleClick}>Play Again</Button></p>
                </div>
            )
        } else { //the game has tied
            return (
                <div className="infoBox">
                    <p>Tie Game! <Button bsStyle="info" className="btn-lg" onClick={this.handleClick}>Play Again</Button></p>	
                </div>
            )
        }
    }
})

//The button components for the Gameboard
var GameButton = React.createClass({ 
    handleClick: function() {
        this.props.controller.makeMove(this.props.id); //delegates the interaction to the controller
    },
    
    render: function() {
        var Button = ReactBootstrap.Button;
        return(
            <Button className="btn btn-lg gameButton" onClick={this.handleClick} id={this.props.id}>{this.props.model.gameboard[this.props.id]}</Button>
        )
    }
})

//The Gameboard that displays the grid of GameButtons
var Gameboard = React.createClass({
    render: function() {
        var contrProp = this.props.controller;
        var modelProp = this.props.model;
        
        return(
            <div id="gameboard">
                <div id="row1">
                    <GameButton id={0} key={0} model={modelProp} controller={contrProp}/>
                    <GameButton id={1} key={1} model={modelProp} controller={contrProp}/>
                    <GameButton id={2} key={2} model={modelProp} controller={contrProp}/>
                </div>
                <div id="row=2">
                    <GameButton id={3} key={3} model={modelProp} controller={contrProp}/>
                    <GameButton id={4} key={4} model={modelProp} controller={contrProp}/>
                    <GameButton id={5} key={5} model={modelProp} controller={contrProp}/>
                </div>
                <div id="row3">
                    <GameButton id={6} key={6} model={modelProp} controller={contrProp}/>
                    <GameButton id={7} key={7} model={modelProp} controller={contrProp}/>
                    <GameButton id={8} key={8} model={modelProp} controller={contrProp}/>
                </div>
            </div> 
        )
    }
})

//The Scoreboard that displays the gameStats
var Scoreboard = React.createClass({
    render: function() {
        var players = this.props.model.players;
        var score = this.props.model.gameStats;
        console.log(score);
        return(
            <div id="scoreboard">
                <strong>SCORE </strong>
                <em>
                <span>Player &#39;{players[0]}&#39; : <strong>{score[0]}</strong> | </span>
                <span>Player &#39;{players[1]}&#39; : <strong>{score[1]}</strong> | </span>
                <span>Ties : <strong>{score["tie"]}</strong></span>
                </em>
            </div>
        )
    }
})

//The Gameinterface that displays all of the components of the game
var GameInterface = React.createClass({
    render: function() {
       return(
            <div>
                <Title />
                <Gameboard model={this.props.model} controller={this.props.controller}/>
                <Scoreboard model={this.props.model} />
                 <InformationBox model={this.props.model} controller={this.props.controller}/>
            </div>
       )
    }
})

module.exports.GameInterface = GameInterface; //Exports the GameInterface