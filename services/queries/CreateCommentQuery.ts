import {gql, RequestDocument} from 'graphql-request';

const CreateCommentQuery: RequestDocument = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {id}
    }
`;

export default CreateCommentQuery;
