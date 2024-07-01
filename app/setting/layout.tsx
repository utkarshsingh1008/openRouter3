export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-4 md:py-4">
			<div className="inline-block max-w-lg ">
				{children}
			</div>
		</section>
	);
}