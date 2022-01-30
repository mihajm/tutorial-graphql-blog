import moment from 'moment';
import Link from 'next/link';

const PostWidgetPostContent = ({createdAt, slug, title}: PostWidgetPostContentProps) => (
	<div className="flex-grow ml-4">

		<p className="text-gray-500 font-xs">
			{moment(createdAt).format('MMM DD, YYYY')}
		</p>

		<Link href={`/post/${slug}`}>
			<p className="text-md hover:text-pink-500">{title}</p>
		</Link>
	</div>
);

type PostWidgetPostContentProps = {
    createdAt: Date,
	slug: string,
	title: string,
}

export default PostWidgetPostContent;
