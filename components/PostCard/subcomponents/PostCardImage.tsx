import Image from 'next/image';
import {PhotoAsset} from '../../../data/PhotoAsset';

const PostCardImage = ({featuredImage, alt}: PostCardImageProps) => (
	<div className="relative overflow-hidden shadow-md mb-6">
		<Image src={featuredImage.url} alt={alt} layout="responsive" width={350} height={200} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
	</div>
);

type PostCardImageProps = {
    featuredImage: PhotoAsset
	alt: string
}

export default PostCardImage;
