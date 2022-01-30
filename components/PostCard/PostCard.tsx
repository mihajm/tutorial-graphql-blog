import {Post} from '../../data/Post';

const PostCard = ({post}: PostCardProps) => (
	<div>
		{post.title}
		{post.excerpt}
	</div>
);

export type PostCardProps = {
    post: Post
}

export default PostCard;
