/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GitDataRepositoryNameQueryVariables = {|
  usr: string
|};
export type GitDataRepositoryNameQueryResponse = {|
  +user: ?{|
    +repositories: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string,
        +pushedAt: ?any,
        +id: string,
      |}>
    |}
  |}
|};
export type GitDataRepositoryNameQuery = {|
  variables: GitDataRepositoryNameQueryVariables,
  response: GitDataRepositoryNameQueryResponse,
|};
*/


/*
query GitDataRepositoryNameQuery(
  $usr: String!
) {
  user(login: $usr) {
    repositories(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        name
        pushedAt
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "usr"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "usr"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 10
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "DESC",
        "field": "CREATED_AT"
      }
    }
  ],
  "concreteType": "RepositoryConnection",
  "kind": "LinkedField",
  "name": "repositories",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pushedAt",
          "storageKey": null
        },
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "repositories(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GitDataRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GitDataRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "44b9c37f8481bef67b8572d1779d7514",
    "id": null,
    "metadata": {},
    "name": "GitDataRepositoryNameQuery",
    "operationKind": "query",
    "text": "query GitDataRepositoryNameQuery(\n  $usr: String!\n) {\n  user(login: $usr) {\n    repositories(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {\n      nodes {\n        name\n        pushedAt\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4dc91e5be7a2d31daf0ce629a7e413fe';

module.exports = node;
