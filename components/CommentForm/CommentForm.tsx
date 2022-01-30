import {useState, useEffect, useRef} from 'react';
import {Comment} from '../../data/Comment';
import {CommentFormError, CommentFormInput, CommentFormSubmit} from './subcomponents';
import {submitComment} from '../../services';

const CommentForm = ({slug}: CommentFormProps) => {
	const [error, setError] = useState<boolean>(false);
	const [localStorage, setLocalStorage] = useState<Storage | null>(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

	const commentEl = useRef<HTMLTextAreaElement | null>(null);
	const nameEl = useRef<HTMLInputElement | null>(null);
	const emailEl = useRef<HTMLInputElement | null>(null);
	const storeDataEl = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		setLocalStorage(window.localStorage);

		if (!localStorage) {
			return;
		}

		if (nameEl.current) {
			nameEl.current.value = localStorage!.getItem('name') || '';
		}

		if (emailEl.current) {
			emailEl.current.value = localStorage!.getItem('email') || '';
		}
	}, []);

	const handleSubmit = () => {
		setError(false);

		const {value: comment} = commentEl.current || {value: ''};
		const {value: name} = nameEl.current || {value: ''};
		const {value: email} = emailEl.current || {value: ''};
		const {checked: storeData} = storeDataEl.current || {checked: false};

		if (!comment || !name || !email) {
			setError(true);
			return;
		}

		const commentObj: Comment = {
			name,
			email,
			comment,
			slug,
		};
		if (localStorage) {
			if (storeData) {
				localStorage.setItem('name', name);
				localStorage.setItem('email', email);
			} else {
				localStorage.removeItem('name');
				localStorage.removeItem('email');
			}
		}

		submitComment(commentObj)
			.then(res => {
				setShowSuccessMessage(true);
				setTimeout(() => setShowSuccessMessage(false), 2500);
			});
	};

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">

			<h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Comments
			</h3>

			<CommentFormInput>
				<textarea
					placeholder="Thoughts?"
					name="comment"
					ref={commentEl}
					className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
				/>
			</CommentFormInput>

			<CommentFormInput cls="lg:grid-cols-2">
				<input
					type="text"
					placeholder="Your name"
					name="name"
					ref={nameEl}
					className="p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
				/>
				<input
					type="email"
					placeholder="email@example.com"
					name="email"
					ref={emailEl}
					className="p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
				/>
			</CommentFormInput>

			<CommentFormInput>
				<div className="pt-2">
					<input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
					<label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save my e-mail and name for the next time I comment</label>
				</div>
			</CommentFormInput>

			<CommentFormError error={error} />
			<CommentFormSubmit handleSubmit={handleSubmit} showSuccess={showSuccessMessage} />

		</div>
	);
};

type CommentFormProps = {
    slug: string
}

export default CommentForm;
