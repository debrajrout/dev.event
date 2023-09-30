import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dev.event",
	description: "A lunch event website for developers",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
