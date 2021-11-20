
/* import { useContext , useState } from 'react'; */
const FetchGraphQL = async(text, variables) => {  

  const TOKEN = "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";//put your github token to remove blank screen 
  const t = localStorage.getItem("token");
  console.log(t)
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default FetchGraphQL;