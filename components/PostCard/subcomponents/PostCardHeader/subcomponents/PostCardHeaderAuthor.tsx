import {PhotoAsset} from '../../../../../data/PhotoAsset';

const PostCardHeaderAuthor = ({name, photo}: PostCardHeaderAuthorProps) => (
	<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
		<img src={photo.url} alt={name} height="30px" width="30px" className="align-middle rounded-full"/>
		<p className="inline align-middle text-gray-700 ml-2 text-lg">{name}</p>
	</div>
);

type PostCardHeaderAuthorProps = {
    photo: PhotoAsset,
    name: string,
}

export default PostCardHeaderAuthor;
