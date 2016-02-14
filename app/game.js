class TicTacToeGame {
    constructor(size, arrPlayers) {
        this._players = arrPlayers;
        this._turn = Math.floor(Math.random() * arrPlayers.length); //randomly select a player to start
        
        //board with empty cells, used to model a new board state
        this._emptyBoard = [];
        for (var cell = 0; cell < Math.pow(size, 2); cell++) {
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
    
    get gameStats() {
        return this._gameStats;
    }
    
    get winner () {
        return this._winner;
    }
    
    reset() {
        this._gameboard = this._emptyBoard;
        this._winner = undefined;
    }
    
    winOrTie() {
        var board = this._gameboard;
        if (board[0] == board[1] && board[1] == board[2]) { //top horizonal match
        
            this._winner = board[0];
            this._gameStats[this._players.indexOf[board[0]]]++;
            return true;
            
        } else if (board[0] == board[4] && board[4] == board[8]) { //diagonal, left to right match
        
            this._winner = board[0];
            this._gameStats[this._players.indexOf[board[0]]]++;
            return true;
            
        } else if (board[0] == board[3] && board[3] == board[6]) { //left veritcal match
        
            this._winner = board[0];
            this._gameStats[this._players.indexOf[board[0]]]++;
            return true;
            
        } else if (board[1] == board[4] && board[4] == board[7]) { //middle vertical match
        
            this._winner = board[1];
            this._gameStats[this._players.indexOf[board[1]]]++;
            return true;
            
        } else if (board[2] == board[5] && board[5] == board[8]) { //right vertical match
        
            this._winner = board[2];
            this._gameStats[this._players.indexOf[board[2]]]++;
            return true;
            
        } else if (board[2] == board[4] && board[4] == board[6]) { //diagonal, right to left match
        
            this._winner = board[2];
            this._gameStats[this._players.indexOf[board[2]]]++;
            return true;
            
        } else if (board[3] == board[4] && board[4] == board[5]) { //middle horizonal match
        
            this._winner = board[3];
            this._gameStats[this._players.indexOf[board[3]]]++;
            return true;
            
        } else if (board[6] == board[7] && board[7] == board[8]) { //bottom row match
        
            this._winner = board[6];
            this._gameStats[this._players.indexOf[board[6]]]++;
            return true;
            
        } else if (this._gameboard.indexOf(undefined) == -1) { //board is full with no matches
        
            this._gameStats["tie"]++;
            return true;
            
        } else {
            return false;
        }
    }
    
     move(cell) {
        if (this._turn) { //game is still playing
            if (this._gameboard[cell] === undefined) { //cell is empty
                this._gameboard.splice(cell, 0, this._players[this._turn]); //place move
                if (!this.winOrTie()) { //game is ongoing
                    this._turn = (this._turn == 0 ? 1 : 0); //switch player
                } else {
                    this._turn = undefined;
                }
            }
        }
    }
    
    
    
    
}