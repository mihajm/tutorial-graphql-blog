const PostWidgetTitle = ({slug}: PostWidgetTitleProps) => (
	<h3 className="text-xl mb-8 font-semibold border-b pb-4">
		{slug ? 'Related Posts' : 'Recent Posts' }
	</h3>
);

type PostWidgetTitleProps = {
    slug?: string
}

export default PostWidgetTitle;
