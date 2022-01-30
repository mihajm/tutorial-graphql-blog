import Image from 'next/image';
import {Author} from '../../../data/Author';

const FeaturedPostCardAuthor = ({author}: FeaturedPostCardAuthorProps) => (
	<div className="flex items-center absolute bottom-5 w-full justify-center">
		<Image
			alt={author.name}
			height="30px"
			width="30px"
			className="align-middle drop-shadow-lg rounded-full"
			src={author.photo.url}
		/>
		<p className="inline align-middle text-white text-shadow ml-2 font-medium">{author.name}</p>
	</div>
);

type FeaturedPostCardAuthorProps = {
    author: Author
}

export default FeaturedPostCardAuthor;
