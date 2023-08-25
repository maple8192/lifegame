import { useEffect, useState } from "react";
import Cell from "./Cell";

type Props = {
  width: number,
  height: number,
}

const World = ({width, height}: Props) => {
  const [board, setBoard]= useState([...Array(height)].map((_, __) => [...Array(width)].map((_, __) => Math.random() >= 0.5)));

  return (
    <div className="flex flex-col">
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

export default World;