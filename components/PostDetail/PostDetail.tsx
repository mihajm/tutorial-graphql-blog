import {Post} from '../../data/Post';
import PostDetailContent from './subcomponents/PostDetailContent';
import PostDetailHeader from './subcomponents/PostDetailHeader/PostDetailHeader';

const PostDetail = ({post}: PostDetailProps) => (
	<div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
		<PostDetailHeader featuredImage={post.featuredImage} title={post.content ? post.title : 'Post unavailable'} createdAt={post.createdAt} author={post.author} />
		{post.content && <PostDetailContent content={post.content} />}
	</div>
);

type PostDetailProps = {
    post: Post
}

export default PostDetail;
