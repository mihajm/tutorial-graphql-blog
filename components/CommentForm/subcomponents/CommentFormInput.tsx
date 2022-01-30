import {ReactChild, ReactChildren} from 'react';

const CommentFormInput = ({children, cls}: CommentFormInputProps) => (
	<div className={`grid grid-cols-1 gap-4 mb-4 ${cls}`}>
		{Array.isArray(children) ? children.map((child, i) => (<div className="contents" key={i}>{child}</div>)) : children}
	</div>
);

type CommentFormInputProps = {
    children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[],
    cls?: string
}

export default CommentFormInput;
