import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Create from "./pages/Create";
import TourCard from "./components/TourCard";
import Grid from "@mui/material/Grid";
import "./App.css";
import SearchAppBar from "./components/Appbar";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchAppBar />
          <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
              <>
                <Typography
                  variant="h4"
                  component={"h2"}
                  marginTop={5}
                  marginBottom={3}
                >
                  Top {city.name} Tours
                </Typography>
                <Grid container spacing={5}>
                  {city.tours.map((tour, idx) => (
                    <TourCard tour={tour} key={idx} />
                  ))}
                </Grid>
              </>
            ))}
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
