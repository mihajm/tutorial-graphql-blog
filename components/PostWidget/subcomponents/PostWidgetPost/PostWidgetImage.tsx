import Image from 'next/image';
import {PhotoAsset} from '../../../../data/PhotoAsset';

const PostWidgetImage = ({featuredImage, title}: PostWidgetImageProps) => (
	<div className="w-16 flex-none">
		<Image src={featuredImage.url} alt={title} height={60} width={60} className="align-middle rounded-full" />
	</div>
);

type PostWidgetImageProps = {
    featuredImage: PhotoAsset,
    title: string,
}

export default PostWidgetImage;
