function Table(props) {
   let grid = [];
   for (let y = 4; y >= 0; y--) {
      let row = [];
      for (let x = 0; x < 5; x++) {
         row.push({ row: y, col: x });
      }
      grid.push(row);
   }
   // console.log(grid);

   return grid.map((row) => {
      return (
         <div className="Table-row">
            {row.map((square) => {
               return (
                  <div className="Table-cell" id={`Table-square${square.col}-${square.row} `}>
                     {square.col === props.location.x && square.row === props.location.y ? (
                        <img
                           id="Table-robot"
                           src="robot.png"
                           alt="robot sprite"
                           className={`Table-img-${props.facing.toLowerCase()}`}
                        />
                     ) : (
                        <p>
                           ({square.col},{square.row})
                        </p>
                     )}
                  </div>
               );
            })}
         </div>
      );
   });
}
export default Table;
