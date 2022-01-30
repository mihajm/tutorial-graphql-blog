import {useState, useEffect} from 'react';
import {Comment} from '../../data/Comment';
import {getComments} from '../../services';
import PostComment from './subcomponents/PostComment';
import PostCommentsTitle from './subcomponents/PostCommentsTitle';

const PostComments = ({slug}: PostCommentsProps) => {
	const [comments, setComments] = useState<Comment[]>([]);

	useEffect(() => {
		getComments(slug)
			.then(res => setComments(res))
			.catch(() => setComments([]));
	}, []);

	return (
		<>
			{comments.length > 0 && (
				<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
					<PostCommentsTitle length={comments.length} />
					{comments.map((comment, i) => (<PostComment name={comment.name} key={i} comment={comment.comment} createdAt={comment.createdAt} />))}
				</div>
			)}
		</>
	);
};

type PostCommentsProps = {
    slug: string
}

export default PostComments;
