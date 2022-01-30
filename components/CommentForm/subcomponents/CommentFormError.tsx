import React from 'react';

const CommentFormError = ({error}: CommentFormErrorProps) => (
	<>
		{error && <p className="text-xs text-red-500">All fields are required</p>}
	</>
);

type CommentFormErrorProps = {
    error: boolean
}

export default CommentFormError;
