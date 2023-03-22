import React from "react";
import "./App.css";
import "./components/Table.css";
import Table from "./components/Table";

class App extends React.Component {
   //  constructor(props) {
   //     super(props);
   //  }
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <h1>Toy Robot Challenge</h1>
            </header>
            <main>
               <Table />
               <div className="App-controls">
                  {/* <Commands /> */}
                  {/* <Results /> */}
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
