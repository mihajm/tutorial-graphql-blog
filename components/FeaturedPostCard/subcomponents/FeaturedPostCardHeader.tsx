import moment from 'moment';
import React from 'react';
import {Author} from '../../../data/Author';
import FeaturedPostCardAuthor from './FeaturedPostCardAuthor';

const FeaturedPostCardHeader = ({author, title, createdAt}: FeaturedPostCardHeaderProps) => (
	<div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
		<p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(createdAt ? createdAt : new Date()).format('MMM DD, YYYY')}</p>
		<p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{title}</p>
		{author && <FeaturedPostCardAuthor author={author} />}
	</div>
);

type FeaturedPostCardHeaderProps = {
    author?: Author
    createdAt?: Date,
    title: string
}

export default FeaturedPostCardHeader;
