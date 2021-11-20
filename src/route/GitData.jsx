import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "../RelayEnvironment";

import { Button, Container, Box, Typography } from "@mui/material";

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query GitDataRepositoryNameQuery($usr: String!) {
    user(login: $usr) {
      repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          pushedAt
          id
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  usr: localStorage.getItem("user"),
});

function GitData(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

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
        <Box>
          {data.user.repositories.nodes.map((data) => {
            return (
              <Box>
                <Box>
                  <Typography>{data.name}</Typography>
                  {console.log(data.name)}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

function GitDataRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <GitData preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default GitDataRoot;
