import Link from 'next/link';
import {Category} from '../../../data/Category';

const CategoryLinks = ({categories}: CategoryLinksProps) => (
	<div className="hidden md:float-left md:contents">
		{categories.map(category => (
			<Link key={category.slug} href={`/category/${category.slug}`}>
				<span className="transition duration-100 md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-pink-400">{category.name}</span>
			</Link>
		))}
	</div>
);

type CategoryLinksProps = {
    categories: Category[];
}

export default CategoryLinks;
