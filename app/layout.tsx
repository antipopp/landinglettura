import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Carlo Cartier | Corso di Voce",
	description: "Trasforma la Tua Lettura in Arte con Carlo Cartier",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="it">
			<body className={inter.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
