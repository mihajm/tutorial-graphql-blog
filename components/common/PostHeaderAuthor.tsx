import Image from 'next/image';
import {PhotoAsset} from '../../data/PhotoAsset';

const PostHeaderAuthor = ({name, photo, details = false}: PostHeaderAuthorProps) => {
	if (!name) {
		return (<></>);
	}

	return (
		<div className={`flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ${details ? '' : 'justify-center'}`}>
			{photo && <Image src={photo.url} alt={name} height="30px" width="30px" className="align-middle rounded-full"/>}
			<p className="inline align-middle text-gray-700 ml-2 text-lg">{name}</p>
		</div>
	);
};

type PostHeaderAuthorProps = {
    photo?: PhotoAsset,
    name?: string,
	details?: boolean
}

export default PostHeaderAuthor;
