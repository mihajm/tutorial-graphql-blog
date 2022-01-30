import Head from 'next/head';

import {PostCard, Categories, PostWidget} from '../components';
import {Post} from '../data/Post';

const posts: Post[] = [{
	title: 'React testing',
	excerpt: 'Lorem ipsum',
}, {
	title: 'React with tailwinds',
	excerpt: 'dolor sit amet',
}];

const Home = () => (
	<div className="container mx-auto px-10 mb-8">
		<Head>
			<title>Graph Blog</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

			<div className="lg:col-span-8 col-span-1">
				{posts.map((post, i) => (<PostCard key={i} post={post} />))}
			</div>

			<div className="lg:col-span-4 col-span-1">
				<div className="lg:sticky relative top-8">
					<PostWidget />
					<Categories />
				</div>
			</div>

		</div>

	</div>
);

export default Home;
