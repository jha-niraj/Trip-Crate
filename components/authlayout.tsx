interface AuthLayoutProps {
	children: React.ReactNode;
	title?: string;
	subtitle?: string;
	floating?: React.ReactNode[];
}

export function AuthLayout({ children, title, subtitle, floating }: AuthLayoutProps) {
	return (
		<div>
			{title && <h1>{title}</h1>}
			{subtitle && <p>{subtitle}</p>}
			{floating && <div>{floating}</div>}
			{children}
		</div>
	);
}

export default AuthLayout;
