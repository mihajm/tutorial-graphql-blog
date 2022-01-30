import {gql, RequestDocument} from 'graphql-request';

const RecentPostsQuery: RequestDocument = gql`
query GetPostDetails {
    posts(
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

export default RecentPostsQuery;
