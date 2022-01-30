import {gql, RequestDocument} from 'graphql-request';

const CategoriesQuery: RequestDocument = gql`
query CategoriesQuery {
    categories {
        name,
        slug
    }
}
`;

export default CategoriesQuery;
