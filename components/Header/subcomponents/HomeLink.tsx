import Link from 'next/link';

const HomeLink = () => (
	<div className="md:float-left block">
		<Link href="/">
			<span className="transition duration-100 cursor-pointer font-bold text-4xl text-white hover:text-pink-400">Graph Blog</span>
		</Link>
	</div>
);

export default HomeLink;
