import {Author} from './Author';
import {Category} from './Category';
import {PhotoAsset} from './PhotoAsset';
import {PostContent} from './PostContent';

export interface Post {
    title: string,
    excerpt: string,
    slug: string,
    featuredPost: boolean,
    featuredImage: PhotoAsset,
    createdAt: Date,
    content: PostContent,
    categories: Category[],
    author: Author,

}
