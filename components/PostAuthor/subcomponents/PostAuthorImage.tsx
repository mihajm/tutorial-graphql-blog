import {PhotoAsset} from '../../../data/PhotoAsset';
import Image from 'next/image';

const PostAuthorImage = ({photo, name}: PostAuthorImageProps) => (
	<div className="absolute left-0 right-0 -top-14 ">
		<Image height="100px" width="100px" alt={name} className="align-middle rounded-full" src={photo.url} />
	</div>
);

type PostAuthorImageProps = {
    photo: PhotoAsset,
    name: string,
}

export default PostAuthorImage;
