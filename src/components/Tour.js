import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from "./ImageCollage";

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
      <Box
        marginTop={3}
        sx={{
          display: "flex",
        }}
      >
        <img src="/images/falls-4.jpg" alt="some image of vegas" height={325} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component={"h4"} marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component={"p"} marginTop={3}>
          Ea dolore minim aute culpa proident ullamco tempor aliqua duis.
          Laboris aute fugiat irure tempor minim. Qui veniam ea ullamco nisi ut
          cupidatat eiusmod ipsum pariatur magna reprehenderit velit.
          Consectetur qui eiusmod non esse non. Consectetur nulla laborum enim
          labore dolore. Fugiat in qui eiusmod adipisicing cillum irure sunt
          dolore pariatur cillum non laborum laborum tempor. Ullamco nostrud ad
          nulla nisi esse et in consequat duis quis commodo deserunt anim.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component={"h4"} marginTop={3}>
          Frequently Asked Questions
        </Typography>
      </Box>
    </Container>
  );
};

export default Tour;
