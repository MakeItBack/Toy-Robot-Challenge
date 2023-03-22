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
         facing: "north",
         outputMessage: "An output message will go here",
      };
   }
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <h1>Toy Robot Challenge</h1>
            </header>
            <main>
               <Table location={this.state.location} />
               <div className="App-controls">
                  <Commands />
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
