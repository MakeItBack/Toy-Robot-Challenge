import React from "react";

import "./App.css";
import "./components/Table.css";
import "./components/Commands.css";

import Table from "./components/Table";
import Commands from "./components/Commands";
import Results from "./components/Results";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: { x: 0, y: 0 },
         facing: "NORTH",
         outputMessage: "Output messages appear here",
         // invalidCommand: false,
      };
      this.areValidArgs = this.areValidArgs.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.moveIt = this.moveIt.bind(this);
      this.rotateIt = this.rotateIt.bind(this);
   }
   moveIt(facing) {
      const x = this.state.location.x;
      const y = this.state.location.y;
      switch (facing) {
         case "NORTH":
            if (y < 4) {
               this.setState({
                  location: { x: x, y: y + 1 },
                  outputMessage: `Robot moved ${this.state.facing}`,
               });
            } else {
               this.setState({ outputMessage: "INVALID COMMAND" });
            }
            break;
         case "SOUTH":
            if (y > 0) {
               this.setState({
                  location: { x: x, y: y - 1 },
                  outputMessage: `Robot moved ${this.state.facing}`,
               });
            } else {
               this.setState({ outputMessage: "INVALID COMMAND" });
            }
            break;
         case "EAST":
            if (x < 4) {
               this.setState({
                  location: { x: x + 1, y: y },
                  outputMessage: `Robot moved ${this.state.facing}`,
               });
            } else {
               this.setState({ outputMessage: "INVALID COMMAND" });
            }
            break;
         case "WEST":
            if (x > 0) {
               this.setState({
                  location: { x: x - 1, y: y },
                  outputMessage: `Robot moved ${this.state.facing}`,
               });
            } else {
               this.setState({ outputMessage: "INVALID COMMAND" });
            }
            break;
         default:
            this.setState({ outputMessage: "INVALID COMMAND" });
            break;
      }
   }
   rotateIt(facing, clockwise) {
      const cardinals = ["NORTH", "EAST", "SOUTH", "WEST"];
      const index = cardinals.findIndex((e) => e === facing);
      // console.log(facing, "index: ", index);
      if (clockwise) {
         this.setState(index === 3 ? { facing: "NORTH" } : { facing: cardinals[index + 1] });
      } else if (!clockwise) {
         this.setState(index === 0 ? { facing: "WEST" } : { facing: cardinals[index - 1] });
      }
   }
   areValidArgs(column, row, facing) {
      const columnInteger = parseInt(column, 10);
      const rowInteger = parseInt(row, 10);
      if (columnInteger === undefined || rowInteger === undefined || facing === undefined) {
         return false;
      } else if (columnInteger < 0 || columnInteger > 4 || rowInteger < 0 || rowInteger > 4) {
         return false;
      } else if (!["NORTH", "SOUTH", "EAST", "WEST"].includes(facing)) {
         return false;
      } else {
         return true;
      }
   }

   handleSubmit(event) {
      event.preventDefault();
      console.log(
         "SUBMIT VALUES: ",
         event.target[0].value, // command type
         event.target[1].value, // column
         event.target[2].value, // row
         event.target[3].value // facing
      );
      switch (event.target[0].value) {
         case "place":
            if (
               this.areValidArgs(
                  event.target[1].value,
                  event.target[2].value,
                  event.target[3].value
               )
            ) {
               this.setState({
                  location: {
                     x: parseInt(event.target[1].value, 10),
                     y: parseInt(event.target[2].value, 10),
                  },
                  facing: event.target[3].value,
                  outputMessage: "Robot placed in new position",
               });
            } else {
               this.setState({ outputMessage: "INVALID COMMAND" });
            }
            break;
         case "move":
            this.moveIt(this.state.facing);
            break;
         case "left":
            this.rotateIt(this.state.facing, false);
            this.setState({ outputMessage: "Robot rotated anticlockwise" });
            break;
         case "right":
            this.rotateIt(this.state.facing, true);
            this.setState({ outputMessage: "Robot rotated clockwise" });
            break;
         case "report":
            this.setState({
               outputMessage: `Location: (${this.state.location.x},${this.state.location.y}) Facing: ${this.state.facing} (${this.state.location.x},${this.state.location.y},${this.state.facing})`,
            });
            break;
         default:
            this.setState({ outputMessage: "INVALID COMMAND" });
            break;
      }
   }
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <h1>Toy Robot Challenge</h1>
            </header>
            <main>
               <Table location={this.state.location} facing={this.state.facing} />
               <div className="App-controls">
                  <Commands handleSubmit={this.handleSubmit} />
                  <Results outputMessage={this.state.outputMessage} />
               </div>
            </main>
            <footer className="App-footer">
               <a target="_blank" rel="noreferrer" href="https://github.com/MakeItBack">
                  <div>
                     <p>
                        Built with React using CRA by <span>MakeItBack</span>
                     </p>
                     <img src="github.svg" alt="github logo" />
                  </div>
               </a>
            </footer>
         </div>
      );
   }
}

export default App;
