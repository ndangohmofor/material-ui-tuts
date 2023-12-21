import Container from "@mui/material/Container";
import TourCard from "../components/TourCard";
import Grid from "@mui/material/Grid";
import SearchAppBar from "../components/Appbar";
import cities from "../data.json";
import { Typography } from "@mui/material";

const Home = () => (
  <>
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
  </>
);

export default Home;
