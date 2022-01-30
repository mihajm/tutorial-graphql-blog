import {Author} from '../../data/Author';
import PostAuthorImage from './subcomponents/PostAuthorImage';
import PostAuthorBio from './subcomponents/PostAuthorBio';

const PostAuthor = ({author}: PostAuthorProps) => (
	<div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">

		<PostAuthorImage name={author.name} photo={author.photo} />
		<PostAuthorBio name={author.name} bio={author.bio} />

	</div>
);

type PostAuthorProps = {
    author: Author
}

export default PostAuthor;
