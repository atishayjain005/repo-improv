import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import githubProvider from "../../config/authMethods";
import { useContext } from "react";
import TokenContext from "../../context/Token/TokenContext";

export default function Body() {
  const validation = useContext(TokenContext);

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box>
        <Typography
          color="lightgrey"
          my={10}
          sx={{ fontSize: 72, fontWeight: 900 }}
        >
          Github OAuth implentation using Firebase With GraphQL client Rely
          <Typography color="gray" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Typography>

        <Button
          onClick={() => validation.signInAuth(githubProvider)}
          size="large"
          variant="contained"
          sx={{ fontSize: 18 }}
        >
          Get Started
          <DoubleArrowIcon />
        </Button>
      </Box>
    </Container>
  );
}
