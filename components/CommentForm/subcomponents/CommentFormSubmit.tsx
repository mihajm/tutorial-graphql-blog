const CommentFormSubmit = ({handleSubmit, showSuccess}: CommentFormSubmitProps) => (
	<div className="mt-8 flex justify-between items-center">
		<button
			onClick={() => handleSubmit()}
			type="button"
			className="transition duration-200 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
		>
        Post Comment
		</button>
		{showSuccess && <span className="text-md font-semibold text-green-500">Comment submitted for review</span>}
	</div>
);

type CommentFormSubmitProps = {
    handleSubmit: Function,
    showSuccess: boolean
}

export default CommentFormSubmit;
