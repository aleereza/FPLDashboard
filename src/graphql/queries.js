/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGw = /* GraphQL */ `
  query GetGw($id: ID!) {
    getGW(id: $id) {
      id
      name
      posts
    }
  }
`;
export const listGWs = /* GraphQL */ `
  query ListGWs($filter: ModelGWFilterInput, $limit: Int, $nextToken: String) {
    listGWs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts
      }
      nextToken
    }
  }
`;
