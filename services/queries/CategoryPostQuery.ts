import {gql, RequestDocument} from 'graphql-request';

const CategoryPostQuery: RequestDocument = gql`
query CategoryPostQuery($slug: String!) {
  postsConnection(where: {categories_some: {slug: $slug}}) {
    edges {
      cursor
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  }
}
`;

export default CategoryPostQuery;
