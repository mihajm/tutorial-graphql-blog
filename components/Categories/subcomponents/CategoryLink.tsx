import Link from 'next/link';
import {Category} from '../../../data/Category';

const CategoryLink = ({category}: CategoryLinkProps) => (
	<Link key={category.slug} href={`/category/${category.slug}`}>
		<span className="cursor-pointer block pb-3 mb-3 hover:text-pink-500">{category.name}</span>
	</Link>
);

type CategoryLinkProps = {
    category: Category;
}

export default CategoryLink;
