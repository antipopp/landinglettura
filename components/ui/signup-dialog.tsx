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
import { Checkbox } from "./checkbox";

interface SignupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignupDialog({ open, onOpenChange }: SignupDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState<string[]>([]);
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
    data.append("Martedì", preference.includes("Martedì") ? "Sì" : "No");
    data.append("Mercoledì", preference.includes("Mercoledì") ? "Sì" : "No");

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
  <title>Lettura a voce alta con CARLO CARTIER</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .header h1 {
      font-size: 24px;
    }

    .course-image {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .course-details {
      margin: 20px 0;
    }

    .course-structure {
      background-color: #f4f4f4;
      padding: 15px;
      border-radius: 5px;
    }

    .course-structure h2 {
      color: #2c3e50;
      border-bottom: 2px solid #2c3e50;
      padding-bottom: 10px;
    }

    .course-structure ul {
      padding-left: 20px;
    }

    .contact-info {
      margin-top: 20px;
      font-size: 14px;
      text-align: center;
    }

    .highlighted {
      background-color: #1d4ed8;
      color: white;
      padding: 15px;
      text-align: center;
      margin-top: 20px;
      border-radius: 5px;
      font-weight: bold;
      font-size: 18px;
    }
  </style>
</head>

<body>
  <div class="header highlighted">
    <h1>Lettura a voce alta con CARLO CARTIER</h1>
  </div>

  <div class="course-details">
    <p>Il laboratorio si rivolge a chi parla in pubblico, a chi fa della voce e della lettura uno strumento di
      lavoro o di ricerca personale (<b>agli amanti della lettura, ai docenti, agli studenti, agli avvocati, ai
        magistrati, ai politici, alle mamme, ai nonni ecc…</b>). La voce è il mezzo con cui la parola viene espressa;
      con essa si può discorrere, esporre, convincere, insegnare, sedurre, insomma ci permette tutte le attività
      di correlazione del vivere quotidiano.</p>

    <p>Essere coscienti del proprio strumento voce è quindi migliorare le proprie capacità comunicative e di
      relazione. Il laboratorio va inteso come luogo dove si possono ottenere dei miglioramenti, anche importanti,
      nella dizione e nella lettura; verranno fornite le conoscenze e gli strumenti per proseguire
      nell'apprendimento, anche esercitandosi e studiando da soli. Perché per <b>ottenere buoni risultati, duraturi,
        è necessaria una pratica costante.</b></p>
  </div>

  <div class="course-structure">
    <h2>FASI DEL LABORATORIO</h2>
    <ul>
      <li>Esercizi di respirazione</li>
      <li>Allenamento vocale e alla lettura ad alta voce con eventuali correzioni della pronuncia (dizione)</li>
      <li>Conseguimento di un'azione verbale efficace, espressiva, carica di intenzione, di ritmo, attraverso una
        voce organica e musicale capace di dare corpo alla comunicazione, all'emozione, al senso e all'immagine
        descritta</li>
      <li>Analisi, lettura logica e interpretata di un testo per praticarne le differenze e le possibilità
        espressive e comunicative</li>
    </ul>

    <p><strong>Dettagli del corso:</strong></p>
    <ul>
      <li>Inizio: <b>Martedì 23 Settembre</b> o <b>Mercoledì 24 Settembre</b></li>
      <li>Si svolge il <b>martedì</b> o il <b>mercoledì</b></li>
      <li>È possibile partecipare a una sola classe a settimana</li>
      <li>Totale di <b>sei incontri</b> di circa <b>1h30m</b></li>
      <li>Massimo sei iscritti per classe</li>
      <li><b>Costo totale del seminario: 130€</b></li>
      <li>Orario delle classi:
        <ul>
          <li>Classe del Martedì: dalle 20:00 alle 21:30</li>
          <li>Classe del Mercoledì: dalle 18:30 alle 20:00</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="highlighted">
    Se sei interessato a partecipare rispondi a questa mail specificando il tuo recapito telefonico e confermando la
    classe selezionata.
  </div>

  <div class="contact-info">
    <p>Ricevi questa mail perché hai prestato il tuo consenso tramite il mio sito web</p>
  </div>
</body>

</html>`,
          },
        }),
      });

      // === TRACKING META PIXEL ===
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          name,
          email,
          preference: preference.join(", "),
        });
      }

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

          <div className="space-y-2">
            <Label className="text-base">Preferenza di partecipazione</Label>
            <div className="flex flex-col space-y-2">
              <div>
                <Checkbox
                  id="tuesday"
                  value="Martedì"
                  checked={!!preference.find((v) => v === "Martedì")}
                  onCheckedChange={(checked) => {
                    setPreference((prev) =>
                      checked
                        ? [...prev, "Martedì"]
                        : prev.filter((v) => v !== "Martedì"),
                    );
                  }}
                  required={preference.length === 0}
                />
                <Label htmlFor="tuesday" className="ml-2">
                  Martedì (20:00 - 21:30)
                </Label>
              </div>
              <div className="mt-2">
                <Checkbox
                  id="wednesday"
                  value="Wednesday"
                  checked={!!preference.find((v) => v === "Mercoledì")}
                  onCheckedChange={(checked) => {
                    setPreference((prev) =>
                      checked
                        ? [...prev, "Mercoledì"]
                        : prev.filter((v) => v !== "Mercoledì"),
                    );
                  }}
                  required={preference.length === 0}
                />
                <Label htmlFor="wednesday" className="ml-2">
                  Mercoledì (18:30 - 20:00)
                </Label>
              </div>
            </div>
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

        {/* Check your spam */}
        <DialogDescription className="text-sm text-center">
          Controlla la tua cartella spam se non ricevi la nostra email.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
