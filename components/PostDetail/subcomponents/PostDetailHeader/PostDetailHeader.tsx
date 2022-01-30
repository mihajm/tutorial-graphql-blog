import {Author} from '../../../../data/Author';
import {PhotoAsset} from '../../../../data/PhotoAsset';
import {PostHeaderAuthor, PostHeaderDate} from '../../../common';
import PostDetailHeaderImage from './subcomponents/PostDetailHeaderImage';

const PostDetailHeader = ({featuredImage, title, createdAt, author}: PostDetailHeaderProps) => (
	<>
		<PostDetailHeaderImage featuredImage={featuredImage} title={title} />

		<div className="px-4 lg:px-0">
			<div className="flex items-center mb-8 w-full">
				{author && <PostHeaderAuthor name={author.name} photo={author?.photo} details={true} />}
				<PostHeaderDate createdAt={createdAt} />
			</div>
			<h2 className="mb-8 text-3xl font-semibold">{title}</h2>
		</div>
	</>
);

type PostDetailHeaderProps = {
    featuredImage: PhotoAsset,
    title: string,
    createdAt: Date,
    author?: Author
}

export default PostDetailHeader;
