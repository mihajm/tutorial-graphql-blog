import {PostContent} from '../../../data/PostContent';
import parseRawContent from '../../../utils/parseRawContent';

const PostDetailContent = ({content}: PostDetailContentProps) => (
	<div className="px-4">
		{parseRawContent(content)}
	</div>
);

type PostDetailContentProps = {
    content: PostContent
}

export default PostDetailContent;
