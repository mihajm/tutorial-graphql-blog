import {gql, RequestDocument} from 'graphql-request';

const PostQuery: RequestDocument = gql`
query PostsQuery {
    postsConnection {
        edges {
            node {
                slug
                title
                excerpt
                createdAt
                featuredPost
                featuredImage {
                    url
                }
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                categories {
                    name
                    slug
                }
                content {
                    html
                }
            }
        }
    }
}
`;

export default PostQuery;
