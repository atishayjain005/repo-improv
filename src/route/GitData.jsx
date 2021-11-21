import React from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";/* 
import RelayEnvironment from "../RelayEnvironment"; */
import { Button, Container, Box, Typography , Card, CardContent,CardActions} from "@mui/material";
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import FetchGraphQL from '../FetchGraphQL';
import {Link} from "react-router-dom"

const { Suspense } = React;



const RepositoryNameQuery = graphql`
  query GitDataRepositoryNameQuery($usr : String!) {
    user(login: $usr) {
      repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          description
          collaborators(first:10) {
            nodes{
              name
            }
          }
          issues(first:10,orderBy:{field: CREATED_AT,direction:DESC}){
            nodes{
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

async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return await FetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
const env = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

const preloadedQuery = loadQuery(env, RepositoryNameQuery, {
usr : localStorage.getItem("user")
});

function GitData(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  const signOut = () =>{
    localStorage.clear();
    window.location="/";
  }

  return (
    <Container>
      {
        data?(
          <Box>
        <Typography
          color="lightgrey"
          my={10}
          sx={{ fontSize: 72, fontWeight: 900 }}
        >
          Repo-improv
        </Typography>
        <Button variant="contained" onClick={signOut}>Sign Out</Button>
        <Box sx={{ display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between",alignItems:"stretch"}}>
          {data.user.repositories.nodes.map((data) => {
            return (
              <Card  sx={{ minWidth: 275, margin: 5, display:"flex" , flexDirection:"column", flexWrap:"wrap" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.createdAt}
        </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.description}kjbk
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Button><Link underline="none" to={data.url}>link</Link></Button>
      </CardActions>
    </Card>
            );
          })}
        </Box>
      </Box>
      )
      :
      (<h1>no data found</h1>)
      }
    </Container>
  );
}

function GitDataRoot(props) {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={"Loading..."}>
        <GitData preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default GitDataRoot;
