const PostCommentsTitle = ({length}: {length: number}) => (
	<h3 className="text-xl mb-8 font-semibold border-b pb-4">
		{`${length} Comment${length > 1 ? 's' : ''}`}
	</h3>
);

export default PostCommentsTitle;
