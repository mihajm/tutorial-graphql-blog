import {gql, RequestDocument} from 'graphql-request';

const PostCommentsQuery: RequestDocument = gql`
query PostCommentsQuery($slug: String!) {
    comments(
        where: {post: {slug: $slug}},
        orderBy: createdAt_ASC
        ) {
        name,
        createdAt,
        comment,
        email
    }
}
`;

export default PostCommentsQuery;
