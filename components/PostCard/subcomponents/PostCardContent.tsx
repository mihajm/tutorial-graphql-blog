const PostCardContent = ({excerpt}: PostCardContentProps) => (
	<p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
		{excerpt}
	</p>
);

type PostCardContentProps = {
    excerpt?: string,
}

export default PostCardContent;
