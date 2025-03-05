"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignupDialog } from "@/components/ui/signup-dialog";
import {
	Award,
	BookOpen,
	Calendar,
	ChevronRight,
	Mic,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [openSignup, setOpenSignup] = useState(false);

	const openSignupDialog = () => {
		setOpenSignup(true);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-black text-white">
				<div className="absolute inset-0 opacity-20">
					<Image
						src="/landing.jpg"
						alt="Voice expression art"
						fill
						className="object-cover"
						priority
					/>
				</div>
				<div className="container mx-auto px-4 py-24 relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							Scopri il Potere della Tua Voce con Carlo Cartier
						</h1>
						<p className="text-xl md:text-2xl mb-8 font-light">
							Trasforma la Tua Lettura in Arte
						</p>
						<p className="text-lg mb-10">
							Dopo 45 anni di carriera e 15 anni di formazione, ti guido passo
							dopo passo per curare, migliorare e padroneggiare la tua voce.
						</p>
						<Button
							size="lg"
							className="bg-white text-black hover:bg-gray-200 hover:text-black font-bold px-8 py-6 text-lg rounded-full"
							onClick={openSignupDialog}
						>
							ISCRIVITI PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
						</Button>
					</div>
				</div>
			</section>

			{/* Introduction Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<Image
								src="/professionale.jpeg"
								alt="Carlo Cartier"
								width={400}
								height={400}
								className="rounded-lg shadow-xl"
							/>
						</div>
						<div className="md:w-1/2">
							<h2 className="text-3xl font-bold mb-6">
								La voce è il tuo biglietto da visita: impara ad usarla per
								comunicare con sicurezza
							</h2>
							<p className="text-lg text-gray-700 mb-8">
								Dedicato agli amanti della lettura, ai docenti, agli studenti,
								agli avvocati, ai magistrati, ai politici, alle mamme, ai nonni
								etc.
							</p>
							<p className="text-lg text-gray-700 mb-8">A chiunque utilizzi la voce come strumento di lavoro</p>
							<Button
								size="lg"
								className="bg-black text-white hover:bg-gray-800 font-bold px-8 py-6 text-lg rounded-full"
								onClick={openSignupDialog}
							>
								ISCRIVITI PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Perché Scegliere Questo Corso
						</h2>
						<p className="text-xl text-gray-700">
							La Voce che Ti Rappresenta: Un Corso Unico per Chi Vuole Fare la
							Differenza
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="p-8 hover:shadow-lg transition-shadow">
							<Award className="w-12 h-12 mb-4 text-black" />
							<h3 className="text-xl font-bold mb-2">Esperienza garantita</h3>
							<p className="text-gray-700">
								45 anni di carriera teatrale, cinematografica e televisiva.
							</p>
						</Card>

						<Card className="p-8 hover:shadow-lg transition-shadow">
							<BookOpen className="w-12 h-12 mb-4 text-black" />
							<h3 className="text-xl font-bold mb-2">Metodi collaudati</h3>
							<p className="text-gray-700">
								15 anni di formazione dedicata all'arte della voce.
							</p>
						</Card>

						<Card className="p-8 hover:shadow-lg transition-shadow">
							<Mic className="w-12 h-12 mb-4 text-black" />
							<h3 className="text-xl font-bold mb-2">Risultati tangibili</h3>
							<p className="text-gray-700">
								Migliora la tua dizione, il tono, l'espressività e la sicurezza.
							</p>
						</Card>
					</div>

					<div className="mt-16 text-center">
						<blockquote className="text-2xl italic font-light mb-8 max-w-3xl mx-auto">
							"La voce è lo strumento più potente che hai. Impara a usarla per
							lasciare il segno in ogni conversazione, presentazione o
							performance."
						</blockquote>
						<Button
							size="lg"
							className="bg-black text-white hover:bg-gray-800 font-bold px-8 py-6 text-lg rounded-full"
							onClick={openSignupDialog}
						>
							ISCRIVITI PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
						</Button>
					</div>
				</div>
			</section>

			{/* What You'll Learn Section */}
			<section className="py-20 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
						Cosa imparerai
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
							<div className="flex items-start mb-4">
								<div className="bg-white text-black rounded-full p-2 mr-4">
									<Mic className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold">Tecniche di respirazione</h3>
							</div>
							<p className="text-gray-300">
								Scopri come controllare il respiro per una voce più stabile e
								potente.
							</p>
						</div>

						<div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
							<div className="flex items-start mb-4">
								<div className="bg-white text-black rounded-full p-2 mr-4">
									<Mic className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold">Espressività</h3>
							</div>
							<p className="text-gray-300">
								Impara a modulare tono, volume e ritmo per comunicare emozioni.
							</p>
						</div>

						<div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
							<div className="flex items-start mb-4">
								<div className="bg-white text-black rounded-full p-2 mr-4">
									<BookOpen className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold">Lettura a voce alta</h3>
							</div>
							<p className="text-gray-300">
								Padroneggia l'arte di leggere in modo coinvolgente e persuasivo.
							</p>
						</div>

						<div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
							<div className="flex items-start mb-4">
								<div className="bg-white text-black rounded-full p-2 mr-4">
									<Mic className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold">Dizione perfetta</h3>
							</div>
							<p className="text-gray-300">
								Elimina gli errori più comuni e parla con chiarezza.
							</p>
						</div>

						<div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
							<div className="flex items-start mb-4">
								<div className="bg-white text-black rounded-full p-2 mr-4">
									<Users className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold">Applicazioni pratiche</h3>
							</div>
							<p className="text-gray-300">
								Usa la tua voce per migliorare le tue performance professionali
								e personali.
							</p>
						</div>
					</div>

					<div className="mt-12 text-center">
						<p className="text-lg mb-8">
							Ogni lezione è progettata per darti strumenti concreti che potrai
							applicare immediatamente.
						</p>
						<div className="bg-gray-800 p-6 rounded-lg inline-block">
							<div className="flex items-center mb-4">
								<Calendar className="w-6 h-6 mr-2" />
								<h3 className="text-xl font-bold">Programma del corso</h3>
							</div>
							<p className="text-gray-300 mb-2">
								6 incontri interattivi ogni mercoledì in sessioni massimo di sei
								partecipanti
							</p>
							<p className="text-gray-300">
								Sessione A: dalle 18:30 alle 19:45
							</p>
							<p className="text-gray-300">
								Sessione B: dalle 20:00 alle 21:15
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Instructor Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Chi è Carlo Cartier?
							</h2>
							<p className="text-xl text-gray-700 mb-6">
								Un Maestro della Voce con una Carriera Straordinaria
							</p>
							<p className="text-lg text-gray-700 mb-8">
								Attore, formatore e coach vocale con oltre 45 anni di esperienza
								nel mondo dello spettacolo e della formazione. Ha lavorato con
								alcuni dei più grandi nomi del teatro e del cinema, e ora mette
								la sua esperienza al tuo servizio per aiutarti a scoprire il
								potenziale della tua voce.
							</p>

							<div className="mb-8 flex flex-col items-start">
								<h3 className="text-xl font-bold mb-2">Credenziali</h3>
								<Button variant="link" size="lg" className="text-lg">
									<Link
										href="https://www.fiorellagiannelli.it/artisti/cartier-carlo/"
										target="_blank"
									>
										- Fiorella Giannelli Consulenza Artistica
									</Link>
								</Button>
								<Button variant="link" size="lg" className="text-lg">
									<Link
										href="https://www.imdb.com/it/name/nm0142025"
										target="_blank"
									>
										- IMDB
									</Link>
								</Button>
							</div>

							<p className="text-lg italic mb-8">
								"La mia missione è aiutarti a trovare la tua voce autentica e a
								usarla per raggiungere i tuoi obiettivi."
							</p>

							<Button
								size="lg"
								className="bg-black text-white hover:bg-gray-800 font-bold px-8 py-6 text-lg rounded-full"
								onClick={openSignupDialog}
							>
								ISCRIVITI PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
							</Button>
						</div>
						<div className="md:w-1/2">
							<Image
								src="/sorriso.jpeg"
								alt="Carlo Cartier"
								width={600}
								height={600}
								className="rounded-lg shadow-xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-black text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-8">
						Trasforma la Tua Voce, Trasforma la Tua Vita
					</h2>
					<Button
						size="lg"
						className="bg-white text-black hover:bg-gray-200 hover:text-black font-bold px-8 py-6 text-lg rounded-full"
						onClick={openSignupDialog}
					>
						ISCRIVITI PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
					</Button>
					<div className="mt-12 text-sm text-gray-400">
						© {new Date().getFullYear()} Carlo Cartier. Tutti i diritti
						riservati.
					</div>
				</div>
			</footer>

			<SignupDialog open={openSignup} onOpenChange={setOpenSignup} />
		</div>
	);
}
