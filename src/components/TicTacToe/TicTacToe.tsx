import { useState } from "react";
import "./TicTacToe.css";

interface SquareProp {
  value: string;
  squareClick: () => void;
}

const Square = ({ value, squareClick }: SquareProp) => {
  return (
    <button
      className="square"
      onClick={() => {
        squareClick();
      }}
    >
      {value}
    </button>
  );
};

const Board = () => {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [isx, setIsx] = useState(true);

  let winner = calculateWinner(squares);
  let status: string;
  if(winner) {
    status = "Winner is: " + (isx ? 'O' : 'X');
  }else {
      status = "Next is: " + (isx ? 'X' : 'O');
  }

  const handleClick = (value: number) => {
    if (squares[value] || calculateWinner(squares)) {
      return;
    }

    let newSquares = squares.slice();
    if (isx) {
      newSquares[value] = "x";
    } else {
      newSquares[value] = "o";
    }
    setSquares(newSquares);
    setIsx(!isx);
  };

  return (
    <>
      <section className="board-container">
        <div>{status}</div>
        <div className="row">
          <Square
            value={squares[0]}
            squareClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            squareClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            squareClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squares[3]}
            squareClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            squareClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            squareClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squares[6]}
            squareClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            squareClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            squareClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </section>
    </>
  );
};

const TicTacToe = () => {
  return (
    <>
      <Board />
    </>
  );
};

const calculateWinner = (squares: any[]) => {
  const condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let i = 0; i < condition.length; i++) {
    let [a, b, c] = condition[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return true;
  }
  return false;
};

export default TicTacToe;
