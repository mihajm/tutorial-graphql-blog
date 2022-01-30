import {gql, RequestDocument} from 'graphql-request';

const FeaturedPostsQuery: RequestDocument = gql`
query FeaturedPostsQuery() {
  posts(where: {featuredPost: true}) {
    author {
      name
      photo {
        url
      }
    }
    featuredImage {
      url
    }
    title
    slug
    createdAt
  }
}   
`;

export default FeaturedPostsQuery;
