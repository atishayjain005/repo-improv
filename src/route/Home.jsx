import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import env from "../RelayEnvironment";
import {
  Button,
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Link,
  TextField,
  InputAdornment,
  Tooltip,
  CircularProgress,
} from "@mui/material";

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query HomeRepositoryNameQuery($usr: String!) {
    user(login: $usr) {
      repositories(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          description
          collaborators(first: 10) {
            nodes {
              name
            }
          }
          issues(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
            nodes {
              __typename
            }
          }
          createdAt
          url
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(env, RepositoryNameQuery, {
  usr: localStorage.getItem("user"),
});

function Home(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  const signOut = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div id="home">
    <Container fluid>
      {data ? (
        <Box>
         <Box sx={{display:"flex" ,  flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" }}>
         <Typography
            color="#757575"
            my={5}
            variant="h2"
          >
            Repositories
          </Typography>
          <Button size="large" variant="text" onClick={signOut}>
            Sign Out
          </Button>
         </Box>
         <hr/>
         <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            {data.user.repositories.nodes.map((data) => {
              return (
                <Card
                  sx={{
                    minWidth: 275,
                    margin: 5,
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Created on : {data.createdAt}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <br />
                      {data.description ? data.description : "no description"}
                    </Typography>
                    <Typography color="text.secondary">
                      {data.collaborators?data.collaborators:"no collaborators"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button>
                      <Link underline="none" href={data.url}>GitHub link</Link>
                    </Button>
                  </CardActions>
                  <Tooltip title="Not working right now" disableInteractive arrow>
                    <TextField
                      id="outlined-basic"
                      label="Rename app"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <Button>Go</Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Tooltip>
                </Card>
              );
            })}
          </Box>
        </Box>
      ) : (
        <h1>no data found</h1>
      )}
    </Container>
    </div>
  );
}

function HomeRoot(props) {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        }
      >
        <Home preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default HomeRoot;
