
import {Author} from '../../../../data/Author';
import {PostCardHeaderTitle} from './subcomponents';
import {PostHeaderAuthor, PostHeaderDate} from '../../../common';

const PostCardHeader = ({slug, title, author, createdAt}: PostCardHeaderProps) => (
	<>
		<div className="block lg:flex text-center items-center justify-center flex-col mb-8 w-full">
			<PostCardHeaderTitle slug={slug} title={title} />
			<div className="lg:flex contents justify-center items-center w-full px-5">
				<PostHeaderAuthor name={author.name} photo={author.photo} />
				<PostHeaderDate createdAt={createdAt} />
			</div>

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
