import moment from 'moment';
import parse from 'html-react-parser';

const PostComment = ({name, comment, createdAt}: PostCommentProps) => (
	<div className="border-b border-gray-100 mb-4 pb-4">
		<p className="mb-4">
			<span className="font-semibold">{name}</span>
			{' '}
            on
			{' '}
			{moment(createdAt || new Date()).format('MMM DD, YYYY')}
		</p>
		<p className="whitespace-pre-line text-gray-600 w-full">{parse(comment)}</p>
	</div>
);

type PostCommentProps = {
    name: string,
    comment: string,
    createdAt?: Date,
}

export default PostComment;
