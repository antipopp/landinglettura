import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Mic, Users, Volume2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">VoceAlta</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Caratteristiche
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#program">
            Programma
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Prezzi
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF2F2]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Laboratorio di Lettura ad Alta Voce
                  </h1>
                  <p className="max-w-[600px] text-zinc-700 md:text-xl dark:text-zinc-400">
                    Sviluppa le tue capacità comunicative e di relazione attraverso l'arte della lettura espressiva
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-black text-white hover:bg-zinc-800">Inizia Ora</Button>
                  <Button variant="outline">Scopri di Più</Button>
                </div>
              </div>
              <Image
                src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/j7qcz.png`}
                alt="Illustrazione di lettura ad alta voce"
                width={600}
                height={600}
                className="mx-auto aspect-square object-contain rounded-xl"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cosa Imparerai</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un percorso completo per padroneggiare tutti gli elementi della lettura espressiva
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="p-6 space-y-2">
                <Mic className="h-12 w-12 text-pink-500" />
                <h3 className="text-xl font-bold">Tecnica Vocale</h3>
                <p className="text-zinc-500">
                  Respirazione, articolazione, timbro e cadenza per una voce chiara e potente
                </p>
              </Card>
              <Card className="p-6 space-y-2">
                <Volume2 className="h-12 w-12 text-pink-500" />
                <h3 className="text-xl font-bold">Espressività</h3>
                <p className="text-zinc-500">
                  Tecniche di interpretazione per dare vita alle parole e catturare l'attenzione
                </p>
              </Card>
              <Card className="p-6 space-y-2">
                <Users className="h-12 w-12 text-pink-500" />
                <h3 className="text-xl font-bold">Comunicazione</h3>
                <p className="text-zinc-500">
                  Sviluppo delle capacità di ascolto e connessione emotiva con il pubblico
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section id="program" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Programma del Corso</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un percorso strutturato in moduli progressivi
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Modulo 1: Fondamenti</h3>
                <ul className="space-y-2 text-zinc-500">
                  <li>• Tecniche di respirazione</li>
                  <li>• Articolazione e dizione</li>
                  <li>• Controllo del timbro vocale</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Modulo 2: Espressività</h3>
                <ul className="space-y-2 text-zinc-500">
                  <li>• Ritmo e cadenza</li>
                  <li>• Uso delle pause</li>
                  <li>• Coloriture vocali</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Modulo 3: Interpretazione</h3>
                <ul className="space-y-2 text-zinc-500">
                  <li>• Analisi del testo</li>
                  <li>• Gestione delle emozioni</li>
                  <li>• Tecniche interpretative</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Modulo 4: Pratica</h3>
                <ul className="space-y-2 text-zinc-500">
                  <li>• Esercitazioni pratiche</li>
                  <li>• Feedback personalizzato</li>
                  <li>• Progetti finali</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Inizia il tuo percorso oggi</h2>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Accesso completo al corso online con supporto dedicato e materiali esclusivi
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-black text-white hover:bg-zinc-800">Iscriviti Ora</Button>
                  <Button variant="outline">Richiedi Informazioni</Button>
                </div>
              </div>
              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Corso Completo</h3>
                  <div className="text-4xl font-bold">€297</div>
                  <ul className="space-y-2 text-zinc-500">
                    <li>✓ Accesso a tutti i moduli</li>
                    <li>✓ Materiali didattici</li>
                    <li>✓ Esercitazioni pratiche</li>
                    <li>✓ Feedback personalizzato</li>
                    <li>✓ Certificato di completamento</li>
                    <li>✓ Supporto dedicato</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500">© 2024 VoceAlta. Tutti i diritti riservati.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termini
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contatti
          </Link>
        </nav>
      </footer>
    </div>
  )
}

