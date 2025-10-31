import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers/providers";
import { AuthDialog } from "@/components/auth-dialog";

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-space-grotesk',
})
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TripCrate",
	description: "Student-curated travel guides, discounts, and plans for nearby getaways",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/mainlogo.ico" />

				<title>TripCrate</title>
				<meta name="description" content="Student-curated travel guides, discounts, and plans for nearby getaways" />

				<meta property="og:url" content="https://tripcrate.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="TripCrate" />
				<meta property="og:description" content="Student-curated travel guides, discounts, and plans for nearby getaways" />
				<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/f71f0216-3b30-47a0-9891-ce57484aa7d1.png?token=G_OZubYLQFZSvCuSb60ebjP20gErNXrw0ky-gMCCVjM&height=1200&width=1200&expires=33297936804" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="tripcrate.vercel.app" />
				<meta property="twitter:url" content="https://tripcrate.vercel.app/" />
				<meta name="twitter:title" content="TripCrate" />
				<meta name="twitter:description" content="Student-curated travel guides, discounts, and plans for nearby getaways" />
				<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/f71f0216-3b30-47a0-9891-ce57484aa7d1.png?token=G_OZubYLQFZSvCuSb60ebjP20gErNXrw0ky-gMCCVjM&height=1200&width=1200&expires=33297936804" />
			</head>
			<body
				className={`${geistSans.variable} ${spaceGrotesk.className} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster />
						<AuthDialog />
						{children}
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}