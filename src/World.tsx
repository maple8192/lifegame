import { useEffect, useState } from "react";
import Cell from "./Cell";

type Props = {
  width: number,
  height: number,
}

const World = ({width, height}: Props) => {
  const [board, setBoard]= useState([...Array(height)].map((_, __) => [...Array(width)].map((_, __) => Math.random() >= 0.7)));

  useEffect(() => {
    setInterval(() => setBoard(current => update(current)), 500);
  }, [])
  

  return (
    <div className="whitespace-nowrap">
      {
        board.map((row, _) =>
          <div className="flex">
            {
              row.map((cell, _) => <Cell state={cell} />)
            }
          </div>
        )
      }
    </div>
  )
}

const update = (current: boolean[][]) => {
  return current.map((row, y) => {
    return row.map((c, x) => {
      let sum = countAliveCells(cutAround(current, x, y)) - (c ? 1 : 0);

      return c ? sum === 2 || sum === 3 : sum === 3;
    });
  });
}

const cutAround = (board: boolean[][], x: number, y: number) => {
  let boardHeight = board.length;
  let boardWidth = board[0].length;

  return [-1, 0, 1].map((dy, _) => {
    return [-1, 0, 1].map((dx, _) => {
      return board[(y + dy + boardHeight) % boardHeight][(x + dx + boardWidth) % boardWidth];
    });
  });
}

const countAliveCells = (cells: boolean[][]) => {
  return cells.reduce((ar, row) => {
    return ar + row.reduce((ac, c) => {
      return ac + (c ? 1 : 0);
    }, 0);
  }, 0);
}

export default World;