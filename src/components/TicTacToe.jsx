import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../css/tictactoe.css';
import PropTypes from 'prop-types';

function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      className="square"
      {...highlight ? { style: { backgroundColor: "cyan" } } : {}}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if ( squares[i] ) {
      return;
    }

    const nextSquares = squares.slice();
    if ( xIsNext ) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "0";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = "Draw: No one won.";
  for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
          status = null; 
      }
  }

  if (winner) {
    status = "Winner: " + squares[winner[0]];
  } else if (!status) {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  const board = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
          highlight={winner && winner.includes(index)}
        />
      );
    }
    board.push(
      <div key={i} className="board-row">
        {row}
      </div>
    );
  }

  return (
    <div className='board'>
      <div className={"status" + (status.includes("Winner") ? " alert alert-success" : "")} style={{ position: "absolute", top: status.includes("Winner") ? 70 : 100, left: 0, right: 0, zIndex: 999 }}>
        {status}
      </div>
      {board}
    </div>
    );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpto(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      description = 'You are at move #' + move;
      return (<li key={move} className='move'>{description}</li>);
    } else if (move > 0) { 
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move} className='mt-1'>
        <button className='border border-info rounded-pill px-2' onClick={() => jumpto(move)}>{description}</button>
      </li>
    );
  });

  function newGame() {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
  }

  return (
    <div className='game'>
      <button className="btn btn-primary mb-2" onClick={() => newGame()}>New Game</button>
      <div className="break"></div>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div> 
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );  
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
  highlight: PropTypes.bool
};

Board.propTypes = {
    xIsNext: PropTypes.bool,
    squares: PropTypes.array,
    onPlay: PropTypes.func
};
