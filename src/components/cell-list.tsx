import React from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const renderedCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return (
    <div className="cell-list">
      {renderedCells}
      <AddCell forceVisible={cells.length === 0 && true} nextCellId={null} />
    </div>
  );
};

export default CellList;
