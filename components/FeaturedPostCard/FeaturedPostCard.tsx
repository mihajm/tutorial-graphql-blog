import Link from 'next/link';
import {Post} from '../../data/Post';
import FeaturedPostCardHeader from './subcomponents/FeaturedPostCardHeader';

const FeaturedPostCard = ({post}: FeaturedPostCardProps) => (
	<div className="relative h-72">
		<div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{backgroundImage: `url('${post.featuredImage.url}')`}} />
		<div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
		<FeaturedPostCardHeader author={post.author} title={post.title} createdAt={post.createdAt} />
		<Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
	</div>
);

type FeaturedPostCardProps = {
    post: Post
}

export default FeaturedPostCard;
