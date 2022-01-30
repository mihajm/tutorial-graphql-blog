import {Post} from '../../data/Post';
import moment from 'moment';
import Link from 'next/link';
import {PostCardImage, PostCardHeader, PostCardContent, PostCardLink} from './subcomponents';

const PostCard = ({post}: PostCardProps) => (
	<div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
		<PostCardImage featuredImage={post.featuredImage} alt={post.title} />
		<PostCardHeader slug={post.slug} title={post.title} author={post.author} createdAt={post.createdAt} />
		<PostCardContent excerpt={post.excerpt} />
		<PostCardLink slug={post.slug} />
	</div>
);

type PostCardProps = {
    post: Post
}

export default PostCard;
