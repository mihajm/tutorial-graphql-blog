import Image from 'next/image';
import {PhotoAsset} from '../../../../../data/PhotoAsset';

const PostDetailHeaderImage = ({title, featuredImage}: PostDetailHeaderImageProps) => (
	<div className="relative overflow-hidden shadow-md mb-6">
		<Image src={featuredImage.url} alt={title} layout="responsive" width={480} height={300} className="object-top h-full w-full rounded-t-lg" />
	</div>
);

type PostDetailHeaderImageProps = {
    featuredImage: PhotoAsset,
    title: string,
}

export default PostDetailHeaderImage;
