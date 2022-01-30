import {PhotoAsset} from '../../../../../data/PhotoAsset';

const PostDetailHeaderImage = ({title, featuredImage}: PostDetailHeaderImageProps) => (
	<div className="relative overflow-hidden shadow-md mb-6">
		<img src={featuredImage.url} alt={title} className="object-top h-full w-full rounded-t-lg" />
	</div>
);

type PostDetailHeaderImageProps = {
    featuredImage: PhotoAsset,
    title: string,
}

export default PostDetailHeaderImage;
