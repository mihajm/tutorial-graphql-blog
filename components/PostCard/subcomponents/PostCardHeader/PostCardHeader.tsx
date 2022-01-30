import {Author} from '../../../../data/Author';
import {PostCardHeaderAuthor, PostCardHeaderDate, PostCardHeaderTitle} from './subcomponents';

const PostCardHeader = ({slug, title, author, createdAt}: PostCardHeaderProps) => (
	<>
		<div className="block lg:flex text-center items-center justify-center mb-8 w-full">
			<PostCardHeaderTitle slug={slug} title={title} />
			<PostCardHeaderAuthor name={author.name} photo={author.photo} />
			<PostCardHeaderDate createdAt={createdAt} />
		</div>
	</>

);

type PostCardHeaderProps = {
    createdAt: Date,
    slug: string,
    title: string,
    author: Author,
}

export default PostCardHeader;
