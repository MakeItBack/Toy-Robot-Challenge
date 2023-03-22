import "./Table";

function Table() {
   let grid = [];
   for (let y = 4; y >= 0; y--) {
      let row = [];
      for (let x = 0; x < 5; x++) {
         row.push({ row: y, col: x });
      }
      grid.push(row);
   }
   console.log(grid);
   return grid.map((row) => {
      return (
         <div className="Table-row">
            {row.map((square) => {
               return (
                  <div className="Table-cell" id={`Table-square${square.col}-${square.row} `}>
                     {`(${square.col},${square.row})`}
                  </div>
               );
            })}
         </div>
      );
   });
}
export default Table;
