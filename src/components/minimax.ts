import React from 'react'

//PLAYER WANTS TO CHOOSE MAXIMISING SCORE (+10)
//AI WANTS TO CHOOSE MINIMISING SCORE (-10)
//0 FOR DRAW

let scores = {
    X: 1,
    O: -1,
    tie: 0
};

const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
function checkWinner(squares:any){
    for (let i = 0; i < winLines.length; i++) {
        const [a, b, c] = winLines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return (squares[a])
        }
        return null;
    }
}

let temp = 0;

export function minimax(squares:any, depth:number, isMaximising: boolean){
    let bestScore = -1000;
    let bestMove = -1;
    for(let i=0; i<9; i++){
        if(squares[i] == null){
            squares[i] = "O"
            let score = algorithm(squares, depth, isMaximising);
            console.log(score + " score");
            squares[i] = null;
            if(score > bestScore){
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

function algorithm(squares:any, depth:number, isMaximising: boolean) {
    // temp+=1
    // console.log(temp);
    let result = checkWinner(squares);
    if(result !== null){
        if(result.squares == "O"){
            return(1);
        }
        else if(result.squares == "X"){
            return(-1);
        }
        else {
            return 0;
        }
    }
    
    //AI (O, MAXIMISER)
    if (isMaximising){
        let bestScore = -1000;
        for(let i=0; i<9; i++){
            if(squares[i] == null){
                squares[i] = "O"
                // let score = algorithm(squares, depth+=1, false);
                // bestScore = Math.max(score, bestScore);
                bestScore = Math.max(bestScore, algorithm(squares, depth+=1, !isMaximising));
                squares[i] = null;
            }
        }
        return bestScore;
    //PLAYER (X, MINIMISER)
    } else {
        let bestScore = 1000;
        for(let i=0; i<9; i++){
            if(squares[i] == null){
                squares[i] = "X"
                // let score = algorithm(squares, depth+=1, true);
                // bestScore = Math.min(score, bestScore);
                bestScore = Math.min(bestScore, algorithm(squares, depth+=1, !isMaximising));
                squares[i] = null;
            }
        }
        return bestScore;
    }
}
