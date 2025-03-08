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

		// Simulate API call
		try {
			// Replace with actual API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

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
							className="w-full bg-black text-white hover:bg-gray-800"
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
