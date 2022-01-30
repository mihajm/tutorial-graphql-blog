import {useState, useEffect} from 'react';

import {Post} from '../../data/Post';
import {Category} from '../../data/Category';
import {getRecentPosts, getSimilarPosts} from '../../services';
import {PostWidgetPost, PostWidgetTitle} from './subcomponents';

const PostWidget = ({slug, categories}: PostWidgetProps) => {
	const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

	useEffect(() => {
		if (slug && Array.isArray(categories)) {
			getSimilarPosts(slug, categories.map(c => c.slug))
				.then(res => setRelatedPosts(res));
		} else {
			getRecentPosts()
				.then(res => setRelatedPosts(res));
		}
	}, []);

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8">
			<PostWidgetTitle slug={slug} />
			{relatedPosts.map(post => (<PostWidgetPost slug={post.slug} createdAt={post.createdAt} featuredImage={post.featuredImage} title={post.title} key={post.title} />))}
		</div>
	);
};

type PostWidgetProps = {
    slug?: string,
    categories?: Category[]
}

export default PostWidget;
