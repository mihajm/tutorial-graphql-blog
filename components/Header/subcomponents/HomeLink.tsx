import Link from 'next/link';

const HomeLink = () => (
	<div className="md:float-left block">
		<Link href="/">
			<span className="cursor-pointer font-bold text-4xl text-white hover:text-gray-200">Graph Blog</span>
		</Link>
	</div>
);

export default HomeLink;
