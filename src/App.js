import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Create from "./pages/Create";
import TourCard from "./components/TourCard";
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container>
            <Grid container spacing={5}>
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
            </Grid>
          </Container>
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
