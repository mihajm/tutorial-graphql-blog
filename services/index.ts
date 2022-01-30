import {request} from 'graphql-request';
import {Category} from '../data/Category';
import {Post} from '../data/Post';
import {CategoriesQuery, PostsQuery, RecentPostsQuery, SimilarPostsQuery} from './queries';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (): Promise<Post[]> => {
	const result = await request(graphqlAPI!, PostsQuery);
	return result.postsConnection.edges.map((pn: ({node: Post})) => pn.node);
};

export const getRecentPosts = async (): Promise<Post[]> => {
	const result = await request(graphqlAPI!, RecentPostsQuery);
	return result.posts;
};

export const getSimilarPosts = async (slug: string, categorySlugs: string[]): Promise<Post[]> => {
	const result = await request(graphqlAPI!, SimilarPostsQuery);
	return result.posts;
};

export const getCategories = async (): Promise<Category[]> => {
	const result = await request(graphqlAPI!, CategoriesQuery);
	return result.categories;
};
