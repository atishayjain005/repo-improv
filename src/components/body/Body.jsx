import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import githubProvider from "../../config/authMethods";
import { useContext } from "react";
import TokenContext from "../../context/Token/TokenContext";
import { Link } from "react-router-dom";

export default function Body() {
  const validation = useContext(TokenContext);

  return (
    <Container>
      <Box>
        <Typography
          color="lightgrey"
          my={10}
          sx={{ fontSize: 72, fontWeight: 900 }}
        >
          Make changes in your GitHub repository directly
          <Typography mt={2}>
            Just a simple web-app where you can edit the name of your GitHub
            repository or Delete it. You can make some minor changes.Just a
            simple web-app where you can edit the name of your GitHub repository
            or Delete it. You can make some minor changesJust a simple web-app
            where you can edit the name of your GitHub repository or Delete it.
            You can make some minor changes
          </Typography>
        </Typography>
        <Button
          onClick={() => validation.signInAuth(githubProvider)}
          size="large"
          variant="contained"
          sx={{ fontSize: 18 }}
        >
          <Link to="/GitData">Get Started</Link>
          <DoubleArrowIcon />
        </Button>
        <Box></Box>
      </Box>
    </Container>
  );
}
