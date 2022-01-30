import {PhotoAsset} from '../../../../data/PhotoAsset';
import PostWidgetImage from './PostWidgetImage';
import PostWidgetPostContent from './PostWidgetPostContent';

const PostWidgetPost = ({title, featuredImage, createdAt, slug}: PostWidgetPostProps) => (
	<div className="flex items-center w-full mb-4">

		<PostWidgetImage title={title} featuredImage={featuredImage} />
		<PostWidgetPostContent createdAt={createdAt} slug={slug} title={title} />

	</div>
);

type PostWidgetPostProps = {
    featuredImage: PhotoAsset,
    title: string,
	createdAt: Date,
	slug: string
}

export default PostWidgetPost;
