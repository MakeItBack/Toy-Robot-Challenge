function Commands(props) {
   return (
      <form id="Commands-form" onSubmit={props.handleSubmit}>
         <div className="Commands-input">
            <label for="Commands-types" id="Commands-types-label">
               Command Type{" "}
            </label>
            <select name="commandTypes" id="Commands-types">
               <option value="place">place</option>
               <option value="move">move</option>
               <option value="left">left</option>
               <option value="right">right</option>
               <option value="report">report</option>
            </select>
         </div>
         <div className="Commands-input">
            <label for="Commands-x-loc">Column# </label>
            <input type="number" id="Commands-x-loc" />
            <label for="Commands-y-loc">Row# </label>
            <input type="number" id="Commands-y-loc" />
            <label for="Commands-facing"> Facing </label>
            <input type="text" id="Commands-facing" />
         </div>

         <div className="Commands-input">
            <button type="submit" id="Commands-submit">
               SEND COMMAND
            </button>
         </div>
      </form>
   );
}

export default Commands;
