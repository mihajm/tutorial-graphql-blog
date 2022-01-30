import Link from 'next/link';

const PostCardHeaderTitle = ({slug, title}: PostCardHeaderTitleProps) => (
	<h2 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-400 text-3xl font-semibold">
		<Link href={`/post/${slug}`}>{title}</Link>
	</h2>
);

type PostCardHeaderTitleProps = {
    slug: string,
    title: string,
}
export default PostCardHeaderTitle;
