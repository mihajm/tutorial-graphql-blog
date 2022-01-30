import {PhotoAsset} from '../../../data/PhotoAsset';

const PostCardImage = ({featuredImage, alt}: PostCardImageProps) => (
	<div className="relative overflow-hidden shadow-md pb-80 mb-6">
		<img src={featuredImage.url} alt={alt} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
	</div>
);

type PostCardImageProps = {
    featuredImage: PhotoAsset
	alt: string
}

export default PostCardImage;
