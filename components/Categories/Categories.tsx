import {useState, useEffect} from 'react';
import Link from 'next/link';

import {getCategories} from '../../services';
import {Category} from '../../data/Category';
import {WidgetTitle} from '../common';
import CategoryLink from './subcomponents/CategoryLink';

const Categories = () => {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		getCategories()
			.then(cats => setCategories(cats))
			.catch(() => setCategories([]));
	}, []);

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
			<WidgetTitle title="Categories" />
			{categories.map(cat => (<CategoryLink key={cat.slug} category={cat}/>))}
		</div>
	);
};

export default Categories;

