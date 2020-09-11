import React from "react";
import Author from "./components/Author";
import Books from "./components/Books";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>
        <Switch>
          <Route path="/author">
            <Author />
          </Route>
          <Route path="/books/:id">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
