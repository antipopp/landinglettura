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
						subject: "Informazioni sul Laboratorio di Lettura a Voce Alta",
						text: "",
						html: `
						 <!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio di Lettura a Voce Alta</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px;">
    <h1 style="font-size: 24px; color: #333;">LABORATORIO DI LETTURA A VOCE ALTA</h1>
    <p style="font-size: 16px; color: #666;">
        Il laboratorio si rivolge a chi parla in pubblico, a chi fa della voce e della lettura
        uno strumento di lavoro o di ricerca personale (agli amanti della lettura, ai docenti,
        <strong>agli studenti, agli avvocati, ai magistrati, ai politici, alle mamme, ai nonni ecc…</strong>).
        La voce è il mezzo con cui la parola viene espressa; con essa si può discorrere,
        esporre, convincere, insegnare, sedurre, insomma ci permette tutte le attività di
        correlazione del vivere quotidiano. Essere coscienti del proprio strumento voce è
        quindi migliorare le proprie capacità comunicative e di relazione. Il laboratorio va
        inteso come luogo dove si possono ottenere dei miglioramenti, anche importanti,
        nella dizione e nella lettura; verranno fornite le conoscenze e gli strumenti per
        proseguire nell’apprendimento, anche esercitandosi e studiando da soli. Perché per
        <strong>ottenere buoni risultati, duraturi, è necessaria una pratica costante.</strong>
    </p>

    <h2 style="font-size: 20px; color: #555;">Fasi del laboratorio</h2>
    <ul style="font-size: 16px; color: #666;">
        <li>esercizi di respirazione</li>
        <li>esercizi di articolazione vocale</li>
        <li>allenamento vocale e alla lettura ad alta voce con eventuali correzioni della pronuncia (dizione);</li>
        <li>conseguimento di un’azione verbale efficace, espressiva, carica di intenzione, di ritmo, attraverso una voce organica e musicale capace di dare corpo alla comunicazione, all’emozione, al senso e all’immagine descritta.</li>
        <li>analisi, lettura logica e interpretata di un testo per praticarne le differenze e le possibilità espressive e comunicative.</li>
    </ul>

    <h2 style="font-size: 20px; color: #555;">Informazioni corso</h2>
    <p style="font-size: 16px; color: #666;">
        Il corso si svolgerà in due sessioni:
    </p>
    <ul style="font-size: 16px; color: #666;">
        <li><strong>Prima sessione:</strong> 18:30 - 20:00</li>
        <li><strong>Seconda sessione:</strong> 20:15 - 21:45</li>
    </ul>
    <p style="font-size: 16px; color: #666;">
        Il costo totale del corso è di <strong>130 euro</strong>.
    </p>
    <p style="font-size: 16px; color: #666;">
        Se sei interessato/a a partecipare, rispondi a questa email indicando la tua disponibilità.
    </p>
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
