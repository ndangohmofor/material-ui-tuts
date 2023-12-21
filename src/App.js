import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import "./App.css";
import Home from "./pages/Home";
import SearchAppBar from "./components/Appbar";
import Tour from "./components/Tour";

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Tour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
