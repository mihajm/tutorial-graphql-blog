import {request} from 'graphql-request';
import {PostComments} from '../components';
import {Category} from '../data/Category';
import {Comment} from '../data/Comment';
import {Post} from '../data/Post';
import {CategoriesQuery, CategoryPostQuery, FeaturedPostsQuery, PostCommentsQuery, PostDetailsQuery, PostsQuery, RecentPostsQuery, SimilarPostsQuery} from './queries';

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
	const result = await request(graphqlAPI!, SimilarPostsQuery, {slug, categories: categorySlugs});
	return result.posts;
};

export const getCategories = async (): Promise<Category[]> => {
	const result = await request(graphqlAPI!, CategoriesQuery);
	return result.categories;
};

export const getPostDetails = async (slug: string): Promise<Post> => {
	const result = await request(graphqlAPI!, PostDetailsQuery, {slug});
	return result.post;
};

export const submitComment = async (comment: Comment): Promise<{createComment: {id: string}}> => {
	const result = await fetch('/api/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(comment),
	});

	return result.json();
};

export const getComments = async (slug: string): Promise<Comment[]> => {
	const result = await request(graphqlAPI!, PostCommentsQuery, {slug});
	return result.comments;
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
	const result = await request(graphqlAPI!, FeaturedPostsQuery);

	return result.posts;
};

export const getCategoryPost = async (slug: string): Promise<Post[]> => {
	const result = await request(graphqlAPI!, CategoryPostQuery, {slug});

	return result.postsConnection.edges.map((pn: {node: Post}) => pn.node);
};
