import {gql, RequestDocument} from 'graphql-request';

const PostDetailsQuery: RequestDocument = gql`
    query PostDetailsQuery($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        createdAt
        slug
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

export default PostDetailsQuery;
