import {useEffect, useState} from 'react';
import {Category} from '../../data/Category';
import {getCategories} from '../../services';
import CategoryLinks from './subcomponents/CategoryLinks';
import HomeLink from './subcomponents/HomeLink';

const Header = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		getCategories()
			.then(cats => setCategories(cats))
			.catch(() => setCategories([]));
	}, []);

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
