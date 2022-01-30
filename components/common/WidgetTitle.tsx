const WidgetTitle = ({title}: WidgetTitleProps) => (
	<h3 className="text-xl mb-8 font-semibold border-b pb-4">
		{title}
	</h3>
);

type WidgetTitleProps = {
    title: string
}

export default WidgetTitle;
