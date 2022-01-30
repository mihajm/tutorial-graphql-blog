import Link from 'next/link';

const PostCardLink = ({slug}: PostCardLinkProps) => (
	<div className="text-center">
		<Link href={`/post/${slug}`}>
			<span title={`/post/${slug}`} className="cursor-pointer transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3">Continue Reading</span>
		</Link>
	</div>
);

type PostCardLinkProps = {
    slug: string
}

export default PostCardLink;
