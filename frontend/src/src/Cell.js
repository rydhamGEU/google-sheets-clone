import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Cell = ({ row, col, value, onChange }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CELL',
    item: { row, col },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'CELL',
    drop: (item) => {
      onChange(row, col, grid[item.row][item.col]);
      onChange(item.row, item.col, '');
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="cell"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(row, col, e.target.value)}
      />
    </div>
  );
};

export default Cell;