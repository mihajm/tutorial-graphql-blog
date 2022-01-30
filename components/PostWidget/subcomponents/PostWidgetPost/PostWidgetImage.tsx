import {PhotoAsset} from '../../../../data/PhotoAsset';

const PostWidgetImage = ({featuredImage, title}: PostWidgetImageProps) => (
	<div className="w-16 flex-none">
		<img src={featuredImage.url} alt={title} height="60px" width="60px" className="align-middle rounded-full" />
	</div>
);

type PostWidgetImageProps = {
    featuredImage: PhotoAsset,
    title: string,
}

export default PostWidgetImage;
