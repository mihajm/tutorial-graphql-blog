import {gql, RequestDocument} from 'graphql-request';

const CategoriesQuery: RequestDocument = gql`
query CategoriesQuery {
    categories(orderBy: name_ASC) {
        name,
        slug
    }
}
`;

export default CategoriesQuery;
