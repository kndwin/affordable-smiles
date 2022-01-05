import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export const Markdown = ({ children }) => {
	return (
		<ReactMarkdown
			components={{
				link: ({ childre, href}) => {
					return <Link href={href}>{children}</Link>
				}
			}}
		>
			{children}
		</ReactMarkdown>
	);
}
