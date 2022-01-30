import {gql, RequestDocument} from 'graphql-request';

const SimilarPostsQuery: RequestDocument = gql`
query GetPostDetails($slug: String!, $categories: [String!]) {
    posts(
        where: {slug_not: $slug AND {categories_some: {slug_in: $categories}}}
        orderBy: createdAt_ASC
        last: 3
        ) {
            title,
            createdAt,
            slug,
            featuredImage {
                url
            }

        }
}
`;

export default SimilarPostsQuery;
