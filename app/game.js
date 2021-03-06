"use strict";

class TicTacToeGame {
    //Takes in the size of the board (3x3 for 9 squares) and an array of plays 
    //that would be used to represent their moves on the gameboard
    //The game only supports a 3x3 board, 3 is the only valid size
    constructor(size, arrPlayers) {
        this._size = size; //game only supports a 3x3 board
        this._players = arrPlayers;
        this._turn = Math.floor(Math.random() * this._players.length); //randomly select a player to start
        
        //board with empty cells, used to model a new board state
        this._emptyBoard = [];
        for (var cell = 0; cell < Math.pow(this._size, 2); cell++) {
            this._emptyBoard[cell] = undefined;
        }
             
        //initializes the gameboard to an empty board
        this._gameboard = this._emptyBoard;
        
        this._gameStats = {
            0: 0, //wins for players[0]
            1: 0,
            tie: 0
        }
        
        this._winner = undefined;
    }
    
    
    get gameboard() {
        return this._gameboard;
    }
    
    get turn() {
        return this._turn;
    }
    
    set turn(response) {
        this._turn = response;
    }
    
    get gameStats() {
        return this._gameStats;
    }
    
    get winner() {
        return this._winner;
    }
    
    get players() {
        return this._players;
    }
    
    //reset the gamestate
    reset() {
        //board with empty cells, used to model a new board state
        this._emptyBoard = [];
        for (var cell = 0; cell < Math.pow(this._size, 2); cell++) {
            this._emptyBoard[cell] = undefined;
        }
             
        //initializes the gameboard to an empty board
        this._gameboard = this._emptyBoard;
        this._turn = Math.floor(Math.random() * this._players.length);//randomly select a player to start
        this._winner = undefined;
    }
    
    //returns whether a win or tie has occured, updates the gameStats accordingly
    winOrTie() {
        var board = this._gameboard;
        console.log(this._gameStats);
        if (board[0] == board[1] && board[1] == board[2] && board[0] !== undefined) { //top horizonal match

            this._winner = board[0];
            this._gameStats[this._players.indexOf(board[0])]++;
            return true;
            
        } else if (board[0] == board[4] && board[4] == board[8] && board[0] !== undefined) { //diagonal, left to right match
        
            this._winner = board[0];
            this._gameStats[this._players.indexOf(board[0])]++;
            return true;
            
        } else if (board[0] == board[3] && board[3] == board[6] && board[0] !== undefined) { //left veritcal match
        
            this._winner = board[0];
            this._gameStats[this._players.indexOf(board[0])]++;
            return true;
            
        } else if (board[1] == board[4] && board[4] == board[7] && board[1] !== undefined) { //middle vertical match
        
            this._winner = board[1];
            this._gameStats[this._players.indexOf(board[1])]++;
            return true;
            
        } else if (board[2] == board[5] && board[5] == board[8] && board[2] !== undefined) { //right vertical match
        
            this._winner = board[2];
            this._gameStats[this._players.indexOf(board[2])]++;
            return true;
            
        } else if (board[2] == board[4] && board[4] == board[6] && board[2] !== undefined) { //diagonal, right to left match
        
            this._winner = board[2];
            this._gameStats[this._players.indexOf(board[2])]++;
            return true;
            
        } else if (board[3] == board[4] && board[4] == board[5] && board[3] !== undefined) { //middle horizonal match
        
            this._winner = board[3];
            this._gameStats[this._players.indexOf(board[3])]++;
            return true;
            
        } else if (board[6] == board[7] && board[7] == board[8] && board[6] !== undefined) { //bottom row match
        
            this._winner = board[6];
            this._gameStats[this._players.indexOf(board[6])]++;
            return true;
            
        } else if (this._gameboard.indexOf(undefined) == -1) { //board is full with no matches
        
            this._gameStats["tie"]++;
            return true;
            
        } else { //no win or tie, game is ongoing
            return false;
        }
    }
    
    //places the move into a designated cell
     move(cell) {
        this._gameboard[cell] = this._players[this._turn]; //place move
        if(!this.winOrTie()) { //game is ongoing
            this._turn = (this._turn == 0 ? 1 : 0); //switch players
        } else {
            this._turn = undefined;
        }
    }
}

module.exports.TicTacToeGame = TicTacToeGame; //Exports the TicTacToeGame