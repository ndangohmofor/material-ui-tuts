import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Tour = (props) => {
  return (
    <Container
      sx={{
        width: 900,
      }}
    >
      <Typography variant="h3" component={"h1"} marginTop={3}>
        Explore the World in Vegas
      </Typography>
    </Container>
  );
};

export default Tour;
