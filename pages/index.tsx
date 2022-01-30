import Head from 'next/head';

import {PostCard, Categories, PostWidget} from '../components';
import {Post} from '../data/Post';
import {getPosts} from '../services';

const Home = ({posts}: HomeProps) => (
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

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: {posts},
	};
}

type HomeProps = {
	posts: Post[]
;}

export default Home;

