import {useState, useEffect} from 'react';

import {Post} from '../../data/Post';
import {Category} from '../../data/Category';
import {getRecentPosts, getSimilarPosts} from '../../services';
import {PostWidgetPost} from './subcomponents';
import {WidgetTitle} from '../common';

const PostWidget = ({slug, categories}: PostWidgetProps) => {
	const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

	useEffect(() => {
		if (slug && Array.isArray(categories)) {
			getSimilarPosts(slug, categories.map(c => c.slug))
				.then(res => setRelatedPosts(res))
				.catch(() => setRelatedPosts([]));
		} else {
			getRecentPosts()
				.then(res => setRelatedPosts(res))
				.catch(() => setRelatedPosts([]));
		}
	}, []);

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8">
			<WidgetTitle title={`${slug ? 'Related' : 'Recent'} Posts`} />
			{relatedPosts.map(post => (<PostWidgetPost slug={post.slug} createdAt={post.createdAt} featuredImage={post.featuredImage} title={post.title} key={post.title} />))}
		</div>
	);
};

type PostWidgetProps = {
    slug?: string,
    categories?: Category[]
}

export default PostWidget;
