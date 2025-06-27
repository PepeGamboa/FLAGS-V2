"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, MapPin, Calendar, BookOpen, Quote, Heart, Globe, Book, Pen, X } from "lucide-react"

interface Country {
  id: string
  name: string
  flag: string
  capital: string
  population: string
  language: string
  currency: string
  founded: string
  writer: {
    name: string
    profession: string
    quote: string
    period: string
    photo: string
    masterwork: {
      title: string
      year: string
      genre: string
      summary: string
      image: string
      themes: string[]
    }
  }
}

const countries: Country[] = [
  {
    id: "spain",
    name: "España",
    flag: "🇪🇸",
    capital: "Madrid",
    population: "47.4 millones",
    language: "Español",
    currency: "Euro (€)",
    founded: "1469",
    writer: {
      name: "Miguel de Cervantes",
      profession: "Novelista, poeta y dramaturgo",
      quote: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
      period: "1547-1616",
      photo: "/cervantes-historical.png",
      masterwork: {
        title: "Don Quijote de la Mancha",
        year: "1605-1615",
        genre: "Novela",
        summary:
          "Don Quijote de la Mancha es considerada la primera novela moderna y una de las obras más importantes de la literatura universal. Narra las aventuras de Alonso Quixano, un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante bajo el nombre de Don Quijote. Acompañado por su fiel escudero Sancho Panza, emprende aventuras para defender a los desvalidos y luchar contra las injusticias. La obra es una sátira de las novelas de caballerías, pero también una profunda reflexión sobre la realidad y la fantasía, los ideales y la vida práctica. A través del contraste entre el idealista Don Quijote y el pragmático Sancho Panza, Cervantes explora temas universales como la locura y la cordura, la justicia, el amor y la muerte. La novela presenta episodios memorables como la lucha contra los molinos de viento, que Don Quijote confunde con gigantes, simbolizando la lucha eterna entre los ideales y la realidad. La obra influyó profundamente en el desarrollo de la novela moderna y sigue siendo relevante por su exploración de la condición humana y la naturaleza de la verdad.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Idealismo vs Realismo", "Locura y Cordura", "Justicia", "Amistad", "Sátira Social"],
      },
    },
  },
  {
    id: "germany",
    name: "Alemania",
    flag: "🇩🇪",
    capital: "Berlín",
    population: "83.2 millones",
    language: "Alemán",
    currency: "Euro (€)",
    founded: "1871",
    writer: {
      name: "Johann Wolfgang von Goethe",
      profession: "Poeta y dramaturgo",
      quote: "Lo que no se empieza hoy, nunca se termina mañana.",
      period: "1749-1832",
      photo: "/goethe-sketch.png",
      masterwork: {
        title: "Fausto",
        year: "1808-1832",
        genre: "Drama",
        summary:
          "Fausto, de Goethe, narra la historia de un sabio insatisfecho que, a través de un pacto con el diablo Mefistófeles, busca conocimiento y placeres terrenales, vendiendo su alma a cambio de juventud y experiencias ilimitadas. La obra, dividida en dos partes, explora la búsqueda de sentido en la vida, la lucha entre el bien y el mal, y la naturaleza del alma humana, culminando en una compleja reflexión sobre la redención y la trascendencia. El doctor Fausto, un erudito consumido por su sed de conocimiento, se siente frustrado por los límites de la ciencia y la filosofía. A través de sus aventuras, Fausto experimenta el amor con Margarita (Gretchen), una joven inocente que se convierte en víctima de su pasión. En la segunda parte, Fausto continúa su búsqueda de conocimiento y poder, participando en eventos históricos y realizando grandes obras para la humanidad. La obra culmina mostrando la posibilidad de redención incluso para aquellos que han caído profundamente. Finalmente, a pesar de sus pecados y errores, Fausto es redimido y salvado por la gracia divina.",
        image: "/fausto-illustration.png",
        themes: ["Pacto Diabólico", "Búsqueda del Conocimiento", "Amor y Tragedia", "Redención", "Naturaleza Humana"],
      },
    },
  },
  {
    id: "uk",
    name: "Reino Unido",
    flag: "🇬🇧",
    capital: "Londres",
    population: "67.8 millones",
    language: "Inglés",
    currency: "Libra esterlina (£)",
    founded: "1707",
    writer: {
      name: "William Shakespeare",
      profession: "Dramaturgo y poeta",
      quote: "Ser o no ser, esa es la cuestión.",
      period: "1564-1616",
      photo: "/shakespeare-historical-engraving.png",
      masterwork: {
        title: "Hamlet",
        year: "1600-1601",
        genre: "Tragedia",
        summary:
          "Hamlet es la tragedia más famosa de Shakespeare, que narra la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre tras ser visitado por su fantasma. La obra explora temas profundos como la venganza, la locura, la muerte, la traición y la corrupción moral. Hamlet finge estar loco mientras planea su venganza contra su tío Claudio, quien ha asesinado a su padre y se ha casado con su madre Gertrudis. La obra incluye algunos de los monólogos más famosos de la literatura, incluyendo 'Ser o no ser', donde Hamlet reflexiona sobre la vida y la muerte. La complejidad psicológica del protagonista, sus dudas existenciales y su lucha interna entre la acción y la contemplación han convertido a Hamlet en uno de los personajes más estudiados de la literatura. La tragedia culmina en una serie de muertes que incluyen a Hamlet, Claudio, Gertrudis y Laertes, dejando solo a Horacio para contar la historia. La obra es una meditación profunda sobre la naturaleza humana, el poder, la corrupción y la inevitabilidad del destino.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Venganza", "Locura", "Muerte", "Traición", "Dilema Moral"],
      },
    },
  },
  {
    id: "france",
    name: "Francia",
    flag: "🇫🇷",
    capital: "París",
    population: "68.4 millones",
    language: "Francés",
    currency: "Euro (€)",
    founded: "843",
    writer: {
      name: "Victor Hugo",
      profession: "Novelista, poeta y dramaturgo",
      quote:
        "El futuro tiene muchos nombres. Para los débiles es lo inalcanzable. Para los temerosos, lo desconocido. Para los valientes, la oportunidad.",
      period: "1802-1885",
      photo: "/victor-hugo-engraving.jpeg",
      masterwork: {
        title: "Los Miserables",
        year: "1862",
        genre: "Novela",
        summary:
          "Los Miserables es una monumental novela que retrata la Francia del siglo XIX a través de la historia de Jean Valjean, un ex-convicto que busca la redención. La obra sigue las vidas entrelazadas de varios personajes, incluyendo a Fantine, una madre soltera; Cosette, su hija; Marius, un joven revolucionario; y Javert, el implacable inspector de policía. Hugo utiliza estas historias personales para explorar temas de justicia social, pobreza, revolución y redención. La novela culmina durante los levantamientos de París de 1832, donde los personajes enfrentan sus destinos. Es una obra que combina el drama personal con la crítica social, mostrando tanto la miseria humana como la capacidad de transformación y esperanza. Hugo presenta un panorama épico de la sociedad francesa, desde los salones aristocráticos hasta las alcantarillas de París, creando un fresco social de extraordinaria amplitud. La transformación de Jean Valjean de criminal a santo secular representa la posibilidad de redención humana, mientras que la obsesión de Javert con la ley ilustra los peligros del fanatismo moral.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Justicia Social", "Redención", "Revolución", "Pobreza", "Amor y Sacrificio"],
      },
    },
  },
  {
    id: "argentina",
    name: "Argentina",
    flag: "🇦🇷",
    capital: "Buenos Aires",
    population: "45.8 millones",
    language: "Español",
    currency: "Peso argentino ($)",
    founded: "1816",
    writer: {
      name: "Jorge Luis Borges",
      profession: "Poeta y ensayista",
      quote: "Siempre imaginé que el Paraíso sería algún tipo de biblioteca.",
      period: "1899-1986",
      photo: "/borges-sketch.png",
      masterwork: {
        title: "Ficciones",
        year: "1944",
        genre: "Cuentos",
        summary:
          "Ficciones es una colección de cuentos que revolucionó la literatura del siglo XX con su exploración de temas como el infinito, los laberintos, los espejos y la naturaleza de la realidad. Borges crea mundos fantásticos que desafían la lógica convencional: bibliotecas infinitas, laberintos temporales, enciclopedias de mundos imaginarios y personajes que existen en múltiples realidades. Cuentos como 'La Biblioteca de Babel', 'El jardín de senderos que se bifurcan' y 'Pierre Menard, autor del Quijote' han influenciado profundamente la literatura contemporánea. La obra combina erudición, filosofía y fantasía para crear una literatura intelectual única que explora los límites del conocimiento humano y la naturaleza de la ficción misma. Borges utiliza la metaficción para cuestionar las fronteras entre realidad y literatura, creando textos que son tanto cuentos como ensayos filosóficos. Su estilo conciso y preciso, combinado con una imaginación desbordante, estableció nuevos paradigmas para la narrativa contemporánea y anticipó muchas de las preocupaciones de la literatura posmoderna.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Infinito", "Laberintos", "Realidad y Ficción", "Tiempo", "Conocimiento"],
      },
    },
  },
]

type ViewState = "flag" | "info" | "writer" | "masterwork"

// Función cn simplificada para evitar problemas con tailwind-merge
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

export default function CountriesApp() {
  const [mounted, setMounted] = useState(false)
  const [countryStates, setCountryStates] = useState<Record<string, ViewState>>({})
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
    // Inicializar estados de países después del montaje
    const initialStates = countries.reduce((acc, country) => ({ ...acc, [country.id]: "flag" as ViewState }), {})
    setCountryStates(initialStates)
  }, [])

  // Obtener idiomas únicos y crear mapeo de banderas
  const languageOptions = useMemo(() => {
    const languages = Array.from(new Set(countries.map((country) => country.language))).sort()

    // Mapeo de idiomas a banderas representativas
    const languageFlags: Record<string, string> = {
      Español: "🇪🇸",
      Francés: "🇫🇷",
      Alemán: "🇩🇪",
      Inglés: "🇬🇧",
    }

    return languages.map((language) => ({
      value: language,
      label: language,
      flag: languageFlags[language] || "🌐",
    }))
  }, [])

  // Filtrar y ordenar países
  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries

    if (selectedLanguage !== "all") {
      filtered = countries.filter((country) => country.language === selectedLanguage)
    }

    // Ordenar alfabéticamente por nombre
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }))
  }, [selectedLanguage])

  const handleCardClick = (countryId: string) => {
    const currentState = countryStates[countryId] || "flag"

    if (currentState === "masterwork") {
      // Si está en masterwork, cerrar la expansión y volver a flag
      setExpandedCountry(null)
      setCountryStates((prev) => ({ ...prev, [countryId]: "flag" }))
      return
    }

    setCountryStates((prev) => {
      let nextState: ViewState

      if (currentState === "flag") {
        nextState = "info"
      } else if (currentState === "info") {
        nextState = "writer"
      } else if (currentState === "writer") {
        nextState = "masterwork"
        setExpandedCountry(countryId) // Expandir cuando llegue a masterwork
      } else {
        nextState = "flag"
        setExpandedCountry(null)
      }

      return { ...prev, [countryId]: nextState }
    })
  }

  const resetCard = (countryId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setCountryStates((prev) => ({ ...prev, [countryId]: "flag" }))
    setExpandedCountry(null)
  }

  const closeExpanded = () => {
    if (expandedCountry) {
      setCountryStates((prev) => ({ ...prev, [expandedCountry]: "flag" }))
      setExpandedCountry(null)
    }
  }

  // No renderizar hasta que el componente esté montado
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando países del mundo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen library-background">
      <style jsx>
        {`
/* IMPORTAR FUENTES LITERARIAS */
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

/* FONDO DE BIBLIOTECA MÁS NÍTIDO */
.library-background {
background-image: url('/modern-library-background.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
position: relative;
font-family: 'Crimson Text', 'Times New Roman', serif;
}

.library-background::before {
content: '';
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(255, 255, 255, 0.65);
backdrop-filter: blur(0.3px);
z-index: 0;
}

.library-background > * {
position: relative;
z-index: 1;
}

/* FONDO MÁGICO PARA EL HERO */
.hero-section {
background-image: url('/magical-book-background.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed;
position: relative;
}

.hero-section::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(139, 69, 19, 0.75);
backdrop-filter: blur(1px);
z-index: 0;
}

.hero-section > * {
position: relative;
z-index: 1;
}

/* TIPOGRAFÍAS LITERARIAS */
.literary-title {
font-family: 'Playfair Display', 'Georgia', serif;
font-weight: 700;
letter-spacing: -0.02em;
}

.literary-quote {
font-family: 'Libre Baskerville', 'Times New Roman', serif;
font-style: italic;
line-height: 1.4;
}

.literary-body {
font-family: 'Crimson Text', 'Times New Roman', serif;
line-height: 1.6;
}

.flip-card {
perspective: 1200px;
}

.flip-card-inner {
width: 100%;
height: 100%;
position: relative;
transition: transform 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.0);
transform-style: preserve-3d;
}

.flag-face {
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
backface-visibility: hidden;
border-radius: 12px;
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
box-sizing: border-box;
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.flag-front { transform: rotateY(0deg); z-index: 4; }
.flag-back { transform: rotateY(90deg); z-index: 3; }
.flag-writer { transform: rotateY(180deg); z-index: 2; }
.flag-masterwork { transform: rotateY(270deg); z-index: 1; }

.flip-card[data-state="info"] .flip-card-inner {
transform: rotateY(-90deg);
}

.flip-card[data-state="writer"] .flip-card-inner {
transform: rotateY(-180deg);
}

.flip-card[data-state="masterwork"] .flip-card-inner {
transform: rotateY(-270deg);
}

/* EFECTO BOCETO A LÁPIZ MEJORADO Y VISIBLE */
.author-photo {
position: relative;
filter: 
  grayscale(100%) 
  contrast(200%) 
  brightness(130%) 
  invert(0.1)
  sepia(25%) 
  hue-rotate(15deg);
background: #f8f8f8;
mix-blend-mode: darken;
}

.author-photo::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: 
  repeating-linear-gradient(
    45deg,
    transparent,
    transparent 1px,
    rgba(0,0,0,0.08) 1px,
    rgba(0,0,0,0.08) 2px
  ),
  repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 1px,
    rgba(0,0,0,0.06) 1px,
    rgba(0,0,0,0.06) 2px
  );
border-radius: inherit;
pointer-events: none;
z-index: 1;
}

.masterwork-image {
filter: 
  grayscale(100%) 
  contrast(150%) 
  brightness(110%) 
  sepia(20%) 
  hue-rotate(10deg);
background: #f5f5f5;
}

.masterwork-image::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: 
  repeating-linear-gradient(
    30deg,
    transparent,
    transparent 1px,
    rgba(0,0,0,0.06) 1px,
    rgba(0,0,0,0.06) 2px
  ),
  repeating-linear-gradient(
    -30deg,
    transparent,
    transparent 1px,
    rgba(0,0,0,0.04) 1px,
    rgba(0,0,0,0.04) 2px
  );
border-radius: inherit;
pointer-events: none;
z-index: 1;
}

/* OVERLAY EXPANDIDO CON PROPORCIÓN ÁUREA */
.masterwork-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.masterwork-content {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  width: 90vw;
  height: 90vh; /* Altura fija basada en viewport */
  max-width: 1400px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.masterwork-header {
  height: 38.2vh; /* Proporción áurea: parte menor (38.2%) */
  min-height: 200px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.masterwork-body {
  height: 61.8vh; /* Proporción áurea: parte mayor (61.8%) */
  min-height: 300px;
  overflow-y: auto;
  padding: 2rem;
  background: white;
  border-radius: 0 0 20px 20px;
}

.force-scroll {
height: 384px !important;
overflow-y: scroll !important;
overflow-x: hidden !important;
padding: 0 !important;
margin: 0 !important;
position: relative !important;
}

.force-scroll::-webkit-scrollbar {
width: 8px !important;
display: block !important;
}

.force-scroll::-webkit-scrollbar-track {
background: rgba(241, 245, 249, 0.8) !important;
border-radius: 4px !important;
}

.force-scroll::-webkit-scrollbar-thumb {
background: rgba(203, 213, 225, 0.8) !important;
border-radius: 4px !important;
min-height: 30px !important;
}

.force-scroll::-webkit-scrollbar-thumb:hover {
background: rgba(148, 163, 184, 0.8) !important;
}

.force-content {
min-height: 800px !important;
height: auto !important;
padding: 20px !important;
box-sizing: border-box !important;
}

.scroll-spacer {
height: 200px !important;
width: 100% !important;
display: block !important;
visibility: hidden !important;
}

.content-overlay {
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(5px);
border-radius: 20px;
padding: 2rem;
margin: 1rem;
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-overlay {
background: transparent;
backdrop-filter: none;
border-radius: 30px;
padding: 3rem;
margin: 2rem;
box-shadow: none;
border: none;
}

.footer-overlay {
background: rgba(15, 23, 42, 0.95);
backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
.content-overlay, .hero-overlay {
  margin: 0.5rem;
  padding: 1.5rem;
}

.masterwork-overlay {
  padding: 1rem;
}

.masterwork-content {
  max-width: 95vw;
  max-height: 95vh;
}
}
`}
      </style>

      {/* OVERLAY EXPANDIDO PARA OBRA MAESTRA */}
      {expandedCountry && (
        <div className="masterwork-overlay" onClick={closeExpanded}>
          <div className="masterwork-content" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 h-10 w-10 p-0 z-20 bg-white/80 hover:bg-white"
              onClick={closeExpanded}
            >
              <X className="h-6 w-6" />
            </Button>

            {(() => {
              const country = countries.find((c) => c.id === expandedCountry)
              if (!country) return null

              return (
                <>
                  {/* HEADER CON PROPORCIÓN ÁUREA - PARTE MENOR */}
                  <div className="masterwork-header">
                    <div className="text-center z-10">
                      <div className="mb-4">
                        <Badge variant="secondary" className="text-lg px-4 py-2 bg-amber-100 text-amber-800 font-bold">
                          ✨ OBRA MAESTRA ✨
                        </Badge>
                      </div>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-5xl">{country.flag}</span>
                        <div className="text-left">
                          <h1 className="literary-title text-4xl font-bold text-gray-800 mb-2">
                            {country.writer.masterwork.title}
                          </h1>
                          <p className="text-xl text-gray-600">por {country.writer.name}</p>
                          <div className="flex gap-3 mt-3">
                            <Badge variant="outline" className="text-sm">
                              {country.writer.masterwork.genre}
                            </Badge>
                            <Badge variant="outline" className="text-sm">
                              {country.writer.masterwork.year}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patrón decorativo de fondo */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 text-6xl">📚</div>
                      <div className="absolute top-20 right-20 text-4xl">✍️</div>
                      <div className="absolute bottom-10 left-20 text-5xl">🎭</div>
                      <div className="absolute bottom-20 right-10 text-3xl">📖</div>
                    </div>
                  </div>

                  {/* BODY CON PROPORCIÓN ÁUREA - PARTE MAYOR */}
                  <div className="masterwork-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                      {/* IMAGEN DE LA OBRA */}
                      <div className="flex flex-col justify-center">
                        <div className="relative">
                          <img
                            src={country.writer.masterwork.image || "/placeholder.svg"}
                            alt={country.writer.masterwork.title}
                            className="masterwork-image w-full h-80 object-cover rounded-lg shadow-lg"
                            crossOrigin="anonymous"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=400&width=600"
                            }}
                          />
                        </div>

                        <div className="mt-6">
                          <h4 className="literary-title font-semibold text-lg text-gray-800 mb-3">Temas Principales</h4>
                          <div className="flex flex-wrap gap-2">
                            {country.writer.masterwork.themes.map((theme, index) => (
                              <Badge key={index} variant="outline" className="text-sm">
                                {theme}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CONTENIDO TEXTUAL */}
                      <div className="space-y-6 flex flex-col justify-center">
                        <div className="literary-body text-gray-700 leading-relaxed text-justify">
                          <p>{country.writer.masterwork.summary}</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                          <h4 className="literary-title font-semibold text-lg text-blue-800 mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Sobre el Autor
                          </h4>
                          <div className="text-blue-700">
                            <p className="font-semibold mb-2">
                              {country.writer.name} ({country.writer.period})
                            </p>
                            <p className="mb-3">{country.writer.profession}</p>
                            <blockquote className="literary-quote italic border-l-2 border-blue-300 pl-4">
                              "{country.writer.quote}"
                            </blockquote>
                          </div>
                        </div>

                        <div className="text-center bg-amber-50 p-4 rounded-lg">
                          <p className="text-sm text-amber-800 font-medium">
                            📍 Obra representativa de la literatura de {country.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}

      {/* ENCABEZADO HERO CON FONDO MÁGICO */}
      <div className="hero-section relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="hero-overlay text-center">
            <div className="mb-8">
              <span className="text-6xl mb-4 block">😍📚</span>
              <Quote className="h-12 w-12 text-amber-800 mx-auto mb-6" />
            </div>

            <blockquote className="literary-quote text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl mx-auto text-white">
              «Las bibliotecas son catedrales de la mente; hospitales del alma; parques temáticos de la imaginación»
            </blockquote>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-16 bg-white"></div>
              <cite className="literary-body text-lg lg:text-xl font-medium text-white not-italic">Caitlin Moran</cite>
              <div className="h-1 w-16 bg-white"></div>
            </div>

            <p className="literary-body text-gray-200 text-lg mb-8">Autora y periodista británica</p>

            <div className="flex justify-center items-center gap-2 text-gray-200">
              <BookOpen className="h-5 w-5" />
              <span className="literary-body text-sm">Explorando la literatura mundial</span>
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL CON OVERLAY */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="content-overlay">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedCountries.map((country) => {
              const currentState = countryStates[country.id] || "flag"

              return (
                <div key={country.id} className="flip-card" data-state={currentState}>
                  <Card
                    className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/95 backdrop-blur-sm border-2 hover:border-blue-300 h-96 relative overflow-hidden"
                    onClick={() => handleCardClick(country.id)}
                  >
                    <div className="flip-card-inner h-full">
                      {/* CARA 1: BANDERA */}
                      <div className="flag-face flag-front flex flex-col items-center justify-center p-4">
                        <div className="w-[95%] h-[85%] flex items-center justify-center">
                          <div className="w-full h-full flex items-center justify-center text-[12rem] leading-none drop-shadow-lg">
                            {country.flag}
                          </div>
                        </div>
                        <CardTitle className="literary-title text-xl font-bold text-gray-800 text-center absolute bottom-4">
                          {country.name}
                        </CardTitle>
                      </div>

                      {/* CARA 2: INFORMACIÓN DEL PAÍS */}
                      <div className="flag-face flag-back">
                        <div className="force-scroll">
                          <div className="force-content">
                            <div className="relative mb-6">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-0 left-0 h-8 w-8 p-0 z-10"
                                onClick={(e) => resetCard(country.id, e)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="text-center pt-8">
                                <div className="text-4xl mb-3">{country.flag}</div>
                                <CardTitle className="literary-title text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                                  <MapPin className="h-5 w-5" />
                                  {country.name}
                                </CardTitle>
                              </div>
                            </div>

                            <div className="space-y-4 literary-body">
                              <div className="flex items-center gap-3 text-sm">
                                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                <span className="font-medium">Capital:</span>
                                <span>{country.capital}</span>
                              </div>

                              <div className="flex items-center gap-3 text-sm">
                                <Users className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="font-medium">Población:</span>
                                <span>{country.population}</span>
                              </div>

                              <div className="flex items-center gap-3 text-sm">
                                <Calendar className="h-4 w-4 text-purple-600 flex-shrink-0" />
                                <span className="font-medium">Fundado:</span>
                                <span>{country.founded}</span>
                              </div>

                              <div className="pt-3 border-t border-gray-200">
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div>
                                    <strong>Idioma:</strong> {country.language}
                                  </div>
                                  <div>
                                    <strong>Moneda:</strong> {country.currency}
                                  </div>
                                </div>
                              </div>

                              <p className="text-xs text-center text-gray-500 mt-6 bg-blue-50 p-3 rounded-lg">
                                Haz click de nuevo para ver el escritor representativo
                              </p>

                              <div className="scroll-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CARA 3: ESCRITOR */}
                      <div className="flag-face flag-writer">
                        <div className="force-scroll">
                          <div className="force-content">
                            <div className="relative mb-6">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-0 left-0 h-8 w-8 p-0 z-10"
                                onClick={(e) => resetCard(country.id, e)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="text-center pt-8">
                                <div className="flex flex-col items-center mb-4">
                                  <div className="relative">
                                    <img
                                      src={country.writer.photo || "/placeholder.svg"}
                                      alt={country.writer.name}
                                      className="author-photo w-40 h-40 rounded-full object-cover border-4 border-amber-200 shadow-lg mb-3"
                                      crossOrigin="anonymous"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=400&width=400"
                                      }}
                                    />
                                  </div>
                                  <div className="text-2xl mb-2">{country.flag}</div>
                                </div>
                                <CardTitle className="literary-title text-lg font-bold text-gray-800 flex items-center justify-center gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  {country.writer.name}
                                </CardTitle>
                                <p className="literary-body text-sm text-gray-600 mt-2 font-medium italic">
                                  {country.writer.profession}
                                </p>
                                <Badge variant="secondary" className="mt-2 text-xs">
                                  {country.writer.period}
                                </Badge>
                              </div>
                            </div>

                            <div className="space-y-4 literary-body">
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                <Quote className="h-5 w-5 text-blue-600 mb-3" />
                                <blockquote className="literary-quote text-sm italic text-gray-700 leading-relaxed font-medium">
                                  "{country.writer.quote}"
                                </blockquote>
                              </div>

                              <p className="text-xs text-center text-gray-500 mt-4 bg-amber-50 p-3 rounded-lg">
                                Haz click de nuevo para ver su obra maestra
                              </p>

                              <div className="scroll-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CARA 4: OBRA MAESTRA (PLACEHOLDER - LA EXPANSIÓN SE MANEJA ARRIBA) */}
                      <div className="flag-face flag-masterwork flex items-center justify-center p-4">
                        <div className="text-center">
                          <Book className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                          <h3 className="literary-title text-xl font-bold text-gray-800 mb-2">
                            {country.writer.masterwork.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">{country.writer.masterwork.year}</p>
                          <Badge variant="outline">{country.writer.masterwork.genre}</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12 literary-body">
            <p className="text-sm text-gray-500">💡 Tip: Haz click en las cards para explorar cada país paso a paso</p>
            <p className="text-xs text-gray-400 mt-2">
              Cuarto click: Obra maestra expandida | Fotos: Wikipedia Commons
            </p>
          </div>
        </div>
      </div>

      {/* PIE DE PÁGINA CON OVERLAY */}
      <footer className="footer-overlay text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 literary-body">
            <div className="space-y-4">
              <h3 className="literary-title text-xl font-bold flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-300" />
                Países del Mundo
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Una experiencia interactiva para explorar la diversidad cultural y literaria de nuestro planeta.
                Descubre países, sus tradiciones y los escritores que han marcado la historia.
              </p>
              <div className="flex items-center gap-2 text-blue-300">
                <Heart className="h-4 w-4" />
                <span className="text-sm">Hecho con pasión por la literatura</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <Book className="h-5 w-5 text-green-300" />
                Características
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  {countries.length} países incluidos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Escritores representativos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Obras maestras expandidas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Animaciones 3D interactivas
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <Pen className="h-5 w-5 text-purple-300" />
                Idiomas Incluidos
              </h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                {languageOptions.slice(0, 4).map((lang) => (
                  <div key={lang.value} className="flex items-center gap-2">
                    <span className="text-base">{lang.flag}</span>
                    <span className="truncate">{lang.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-yellow-300" />
                Estadísticas
              </h4>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-300">{countries.length}</div>
                  <div className="text-xs text-gray-300">Países explorados</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-300">{countries.length}</div>
                  <div className="text-xs text-gray-300">Obras maestras</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 my-8"></div>

          <div className="text-center mb-8">
            <div className="max-w-3xl mx-auto">
              <Quote className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <blockquote className="literary-quote text-lg italic text-gray-200 mb-4">
                "Un libro es un sueño que tienes en tus manos"
              </blockquote>
              <cite className="literary-body text-blue-300 font-medium">Neil Gaiman</cite>
            </div>
          </div>

          <div className="border-t border-white/20 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 literary-body">
            <div className="text-gray-400 text-sm">© 2024 Países del Mundo. Proyecto educativo y cultural.</div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Datos actualizados
              </span>
              <span>Fotos: Wikipedia Commons</span>
              <span>Diseño: v0.dev</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
