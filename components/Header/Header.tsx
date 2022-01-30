import {useContext} from 'react';
import {Category} from '../../data/Category';
import CategoryLinks from './subcomponents/CategoryLinks';
import HomeLink from './subcomponents/HomeLink';

const categories: Category[] = [{name: 'React', slug: 'react'}, {name: 'Web Development', slug: 'webdev'}];

const Header = () => {
	const t = 1;
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block border-blue-400 py-8">

				<HomeLink />
				<CategoryLinks categories={categories} />

			</div>
		</div>
	);
};

export default Header;
