"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface SignupDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function SignupDialog({ open, onOpenChange }: SignupDialogProps) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim() || !email.trim()) {
			toast("Per favore, compila tutti i campi.");
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast("Per favore, inserisci un indirizzo email valido.");
			return;
		}

		setIsSubmitting(true);

		const data = new FormData();
		data.append("Email", email);
		data.append("Name", name);

		try {
			// POST to API
			await fetch(
				"https://script.google.com/macros/s/AKfycbwkqJbP_jHgItTcSUCZkKk7BWCjHxDuKtMtMX7DdEWb16zacQzP_A35wzElvxsLk3Pc/exec",
				{
					method: "POST",
					body: data,
				},
			);

			await fetch("/api/sendEmail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					to: [email],
					cc: [""],
					message: {
						subject: "Benvenuto",
						text: "YOUR TEXT",
						html: `
						 <html>
								<head></head>
								<body>
									 <p>Hello user</p>
									 <p><b>Full Name:</b> ${name}</p>
									 <p><b>Email:</b> ${email}</p>
									 <br>
									 <p>Thank you & Regards,<br><b>Team</b></p>
								</body>
						 </html>`,
					},
				}),
			});

			toast("Grazie per il tuo interesse. Ti contatteremo presto.");

			// Reset form and close dialog
			setName("");
			setEmail("");
			onOpenChange(false);
		} catch (error) {
			toast("Si è verificato un errore. Riprova più tardi.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						Iscriviti per saperne di più
					</DialogTitle>
					<DialogDescription>
						Inserisci i tuoi dati per ricevere informazioni sul corso con Carlo
						Cartier.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-6 py-4">
					<div className="space-y-2">
						<Label htmlFor="name" className="text-base">
							Nome e Cognome
						</Label>
						<Input
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Inserisci il tuo nome completo"
							className="w-full"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email" className="text-base">
							Email
						</Label>
						<Input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Inserisci la tua email"
							className="w-full"
							required
						/>
					</div>

					<DialogFooter>
						<Button
							type="submit"
							className="bg-blue-600 text-white hover:bg-blue-500 font-bold px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Invio in corso..." : "INVIA"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
