import {useRouter} from 'next/router';
import {getPosts, getPostDetails} from '../../services';

import {PostDetail, Categories, PostWidget, PostAuthor, PostComments, CommentForm, Loader} from '../../components';
import {Post} from '../../data/Post';

const PostDetails = ({post}: PostDetailProps) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}

	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

				<div className="col-span-1 lg:col-span-8">
					<PostDetail post={post} />
					{post.author && <PostAuthor author={post.author} />}
					<CommentForm slug={post.slug} />
					<PostComments slug={post.slug} />
				</div>

				<div className="col-span-1 lg:col-span-4">
					<div className="relative lg:sticky top-8">
						<PostWidget slug={post.slug} categories={post.categories} />
						<Categories />
					</div>
				</div>

			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({slug}) => ({params: {slug}})),
		fallback: true,
	};
}

export async function getStaticProps({params}: PostStaticProps) {
	const post = await getPostDetails(params.slug);

	return {
		props: {post},
	};
}

type PostStaticProps = {
	params: {
		slug: string
	}
}

type PostDetailProps = {
	post: Post
}

export default PostDetails;
