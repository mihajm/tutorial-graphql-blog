import {request, gql, RequestDocument} from 'graphql-request';
import {Post} from '../data/Post';
import {PostsQuery} from './queries';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (): Promise<Post[]> => {
	const result = await request(graphqlAPI!, PostsQuery);
	return result.postsConnection.edges.map((pn: ({node: Post})) => pn.node);
};
