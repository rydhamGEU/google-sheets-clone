import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Cell from './Cell';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [grid, setGrid] = useState(Array(rows).fill().map(() => Array(cols).fill('')));

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Google Sheets Clone</h1>
        <div className="grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  row={rowIndex}
                  col={colIndex}
                  value={cell}
                  onChange={handleCellChange}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;