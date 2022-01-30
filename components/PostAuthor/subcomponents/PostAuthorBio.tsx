import React from 'react';

const PostAuthorBio = ({name, bio}: PostAuthorBioProps) => (
	<>
		<h3 className="text-white mt-4 mb-4 text-xl font-bold">{name}</h3>
		<p className="text-white text-lg">{bio}</p>
	</>
);

type PostAuthorBioProps = {
    name: string,
    bio: string,
}

export default PostAuthorBio;
