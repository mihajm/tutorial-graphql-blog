import {GraphQLClient} from 'graphql-request';
import {CreateCommentQuery} from '../../services/queries';

export default async function comments(req: any, res: any) {
	const client: GraphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!, {
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
		},
	});

	try {
		const {name, email, comment, slug} = req.body;

		const result = await client.request(CreateCommentQuery, {
			name,
			email,
			comment,
			slug,
		});

		return res.status(200).send(result);
	} catch (err) {
		console.error(err);
		return res.status(500).send('Oops something went wrong');
	}
}
