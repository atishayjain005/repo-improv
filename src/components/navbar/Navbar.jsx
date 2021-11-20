import React from "react";
import {
  Button,
  Container,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton color="inherit">
                <GitHubIcon size="large" />
              </IconButton>
              <Typography
                mx={1}
                sx={{ fontWeight: 700, fontSize: 18, letterSpacing: 2 }}
              >
                GitHub Improv
              </Typography>
            </Box>
            <Box>
              <Button size="large" variant="outlined" color="inherit" sx={{fontWeight:700}}>
                Login via GitHub
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}