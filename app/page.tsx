"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SignupDialog } from "@/components/ui/signup-dialog"
import { Award, BookOpen, Calendar, ChevronRight, Mic, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [openSignup, setOpenSignup] = useState(false)

  const openSignupDialog = () => {
    setOpenSignup(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-900">
        <div className="container mx-auto px-2 sm:px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">Scopri il Potere</h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">della Tua Voce</h1>
            <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight">con</h3>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">Carlo Cartier</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 font-bold">
              Trasforma la tua voce in un&apos;alleata straordinaria
            </p>
            <p className="text-2xl mb-10 font-bold">
              Corsi interattivi di lettura a voce alta per comunicare con sicurezza ed emozione.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-500 font-bold px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto"
              onClick={openSignupDialog}
            >
              PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Instructor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Chi è Carlo Cartier?</h2>
              <p className="text-lg mb-8">
                Attore, formatore e coach vocale con oltre 45 anni di esperienza nel mondo dello spettacolo e della
                formazione. Ha lavorato con alcuni dei più grandi nomi del teatro e del cinema, e ora mette la sua
                esperienza al tuo servizio per aiutarti a scoprire il potenziale della tua voce.
              </p>

              <div className="mb-8 flex flex-col items-start">
                <h3 className="text-xl font-bold mb-2">Curriculum</h3>
                <Button variant="link" size="lg" className="text-lg">
                  <Link href="https://www.fiorellagiannelli.it/artisti/cartier-carlo/" target="_blank">
                    - Curriculum Vitae
                  </Link>
                </Button>
                <Button variant="link" size="lg" className="text-lg">
                  <Link href="https://www.imdb.com/it/name/nm0142025" target="_blank">
                    - International Movie DataBase
                  </Link>
                </Button>
              </div>

              <p className="text-lg italic mb-8">
                &quot;La mia missione è aiutarti a trovare la tua voce autentica e a usarla per raggiungere i tuoi
                obiettivi.&quot;
              </p>

              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-500 font-bold px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto"
                onClick={openSignupDialog}
              >
                PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
              </Button>
            </div>
            <div className="md:w-1/2 w-full overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HKsQ_9494oY?si=yO4lHnOVKjLxWkiS"
                  title="Carlo Cartier Showreel"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Scegliere Questo Corso</h2>
            <p className="text-xl text-gray-700">
              I corsi sono <b>interattivi e personalizzati</b>.<br />
              Non sono lezioni registrate, ma esperienze vive in cui verrai guidato passo dopo passo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
              <Award className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2">Esperienza garantita</h3>
              <p className="text-gray-700">45 anni di carriera teatrale, cinematografica e televisiva.</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
              <BookOpen className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2">Metodi collaudati</h3>
              <p className="text-gray-700">15 anni di formazione dedicata all&apos;educazione della voce.</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
              <Mic className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-2">Risultati tangibili</h3>
              <p className="text-gray-700">Migliora la tua dizione, il tono, l&apos;espressività e la tua sicurezza.</p>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-2xl italic font-light mb-8 max-w-3xl mx-auto">
              &quot;La voce è lo strumento più potente che hai. Impara a usarla per lasciare il segno in ogni
              conversazione, presentazione o performance.&quot;
            </blockquote>
            <Button
              size="lg"
              className="bg-teal-700 text-white hover:bg-teal-600 font-bold px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto"
              onClick={openSignupDialog}
            >
              PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Cosa Imparerai</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition-colors text-white">
              <div className="flex items-start mb-4">
                <div className="bg-white text-black rounded-full p-2 mr-2 sm:mr-4 flex-shrink-0">
                  <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Tecniche di respirazione</h3>
              </div>
              <p>Scopri come controllare il respiro per una voce più stabile e potente.</p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition-colors text-white">
              <div className="flex items-start mb-4">
                <div className="bg-white text-black rounded-full p-2 mr-2 sm:mr-4 flex-shrink-0">
                  <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Espressività</h3>
              </div>
              <p>Impara a modulare tono, volume e ritmo per comunicare emozioni.</p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition-colors text-white">
              <div className="flex items-start mb-4">
                <div className="bg-white text-black rounded-full p-2 mr-2 sm:mr-4 flex-shrink-0">
                  <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Dizione perfetta</h3>
              </div>
              <p>Elimina gli errori più comuni e parla con chiarezza.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition-colors text-white">
              <div className="flex items-start mb-4">
                <div className="bg-white text-black rounded-full p-2 mr-2 sm:mr-4 flex-shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Lettura a voce alta</h3>
              </div>
              <p>Padroneggia l&apos;arte di leggere in modo coinvolgente e persuasivo.</p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition-colors text-white">
              <div className="flex items-start mb-4">
                <div className="bg-white text-black rounded-full p-2 mr-2 sm:mr-4 flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Applicazioni pratiche</h3>
              </div>
              <p>Usa la tua voce per migliorare le tue performance professionali e personali.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Programma</h2>
            <p className="text-lg mb-8">
              Ogni lezione è progettata per darti strumenti concreti che potrai applicare immediatamente.
              <br />
              <b>6 incontri</b> interattivi ogni mercoledì in sessioni massimo di sei partecipanti.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <div className="bg-blue-800 text-white p-6 rounded-lg inline-block">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">Turno A</h3>
                </div>
                <p>dalle 18:30 alle 20:00</p>
              </div>
              <div className="bg-blue-800 text-white p-6 rounded-lg inline-block">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold">Turno B</h3>
                </div>
                <p>dalle 20:15 alle 21:45</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-12">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Trasforma la Tua Voce, Trasforma la Tua Vita</h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white hover:from-indigo-600 hover:to-teal-600 font-bold px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full w-full sm:w-auto"
            onClick={openSignupDialog}
          >
            PER SAPERNE DI PIÙ <ChevronRight className="ml-2" />
          </Button>
          <div className="mt-12 text-sm text-gray-400">
            © {new Date().getFullYear()} Carlo Cartier. Tutti i diritti riservati.
          </div>
        </div>
      </footer>

      <SignupDialog open={openSignup} onOpenChange={setOpenSignup} />
    </div>
  )
}

