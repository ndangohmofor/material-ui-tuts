import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component={"h2"}
        gutterBottom
        color={"textSecondary"}
      >
        Create a New Note
      </Typography>
      <Container>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disableElevation
          onClick={() => console.log("You clicked me")}
        >
          Submit
        </Button>
      </Container>
      <Container>
        <Button type="submit">Submit</Button>
        <Button type="submit" color="secondary" variant="outlined">
          Submit
        </Button>

        <ButtonGroup color="secondary" variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Container>
    </Container>
  );
}
