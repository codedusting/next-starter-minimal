import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata: Metadata = {
	title: "State Management in App Router",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.variable} flex h-screen flex-col`}>
				<Header />
				<main className="flex-1">
					<Container>{children}</Container>
				</main>
				<Footer />
			</body>
		</html>
	);
}
