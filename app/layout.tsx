import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";
import { FB_PIXEL_ID } from "@/lib/fpixel";
import FacebookPixel from "@/components/FacebookPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Carlo Cartier | Corso di Lettura a Voce Alta",
	description: "Trasforma la Tua Lettura in Arte con Carlo Cartier",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="it">
			<Script
				type="text/javascript"
				src="//embeds.iubenda.com/widgets/27d1dbfd-187e-4e3a-b0a8-46f126799b7d.js"
			/>
			<body className={inter.className}>
				{children}
				<FacebookPixel />
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
