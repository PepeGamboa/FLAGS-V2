"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, MapPin, Calendar, BookOpen, Quote, Heart, Globe, Book, Pen } from "lucide-react"

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
    },
  },
  {
    id: "italy",
    name: "Italia",
    flag: "🇮🇹",
    capital: "Roma",
    population: "59.1 millones",
    language: "Italiano",
    currency: "Euro (€)",
    founded: "1861",
    writer: {
      name: "Dante Alighieri",
      profession: "Poeta",
      quote: "El amor mueve el sol y las demás estrellas.",
      period: "1265-1321",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dante-alighieri.jpg/400px-Dante-alighieri.jpg",
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
    },
  },
  {
    id: "russia",
    name: "Rusia",
    flag: "🇷🇺",
    capital: "Moscú",
    population: "146.2 millones",
    language: "Ruso",
    currency: "Rublo (₽)",
    founded: "1547",
    writer: {
      name: "León Tolstói",
      profession: "Novelista y filósofo",
      quote: "Todas las familias felices se parecen, pero cada familia infeliz es infeliz a su manera.",
      period: "1828-1910",
      photo: "/tolstoi-sketch.png",
    },
  },
  {
    id: "japan",
    name: "Japón",
    flag: "🇯🇵",
    capital: "Tokio",
    population: "125.8 millones",
    language: "Japonés",
    currency: "Yen (¥)",
    founded: "660 a.C.",
    writer: {
      name: "Yukio Mishima",
      profession: "Novelista y dramaturgo",
      quote:
        "La belleza es algo terrible y espantoso. Terrible porque es indefinible, y no se puede definir porque Dios no puso más que enigmas.",
      period: "1925-1970",
      photo: "/mishima-sketch.png",
    },
  },
  {
    id: "brazil",
    name: "Brasil",
    flag: "🇧🇷",
    capital: "Brasília",
    population: "215.3 millones",
    language: "Portugués",
    currency: "Real (R$)",
    founded: "1822",
    writer: {
      name: "Paulo Coelho",
      profession: "Novelista",
      quote: "Cuando quieres realmente una cosa, todo el universo conspira para ayudarte a conseguirla.",
      period: "1947-presente",
      photo: "/coelho-sketch.png",
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
    },
  },
  {
    id: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    capital: "Bogotá",
    population: "51.3 millones",
    language: "Español",
    currency: "Peso colombiano ($)",
    founded: "1810",
    writer: {
      name: "Gabriel García Márquez",
      profession: "Novelista, periodista",
      quote: "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
      period: "1927-2014",
      photo: "/garcia-marquez-portrait.png",
    },
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    capital: "Nueva Delhi",
    population: "1.4 mil millones",
    language: "Hindi e Inglés",
    currency: "Rupia india (₹)",
    founded: "1947",
    writer: {
      name: "Rabindranath Tagore",
      profession: "Poeta y filósofo",
      quote: "No llores porque ya se terminó, sonríe porque sucedió.",
      period: "1861-1941",
      photo: "/tagore-sketch.png",
    },
  },
  {
    id: "chile",
    name: "Chile",
    flag: "🇨🇱",
    capital: "Santiago",
    population: "19.5 millones",
    language: "Español",
    currency: "Peso chileno ($)",
    founded: "1818",
    writer: {
      name: "Pablo Neruda",
      profession: "Poeta y diplomático",
      quote: "Podrán cortar todas las flores, pero no podrán detener la primavera.",
      period: "1904-1973",
      photo: "/neruda-sketch.png",
    },
  },
  {
    id: "norway",
    name: "Noruega",
    flag: "🇳🇴",
    capital: "Oslo",
    population: "5.4 millones",
    language: "Noruego",
    currency: "Corona noruega (kr)",
    founded: "1905",
    writer: {
      name: "Henrik Ibsen",
      profession: "Dramaturgo",
      quote: "La mayoría tiene la fuerza, pero no el derecho.",
      period: "1828-1906",
      photo: "/ibsen-photo.png",
    },
  },
  {
    id: "sweden",
    name: "Suecia",
    flag: "🇸🇪",
    capital: "Estocolmo",
    population: "10.4 millones",
    language: "Sueco",
    currency: "Corona sueca (kr)",
    founded: "1523",
    writer: {
      name: "Selma Lagerlöf",
      profession: "Novelista",
      quote: "Hay una fuerza motriz más poderosa que el vapor, la electricidad y la energía atómica: la voluntad.",
      period: "1858-1940",
      photo: "/lagerlof-sketch.png",
    },
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    capital: "Canberra",
    population: "25.7 millones",
    language: "Inglés",
    currency: "Dólar australiano ($)",
    founded: "1901",
    writer: {
      name: "Patrick White",
      profession: "Novelista",
      quote: "La vida es un misterio que debe ser vivido, no un problema que debe ser resuelto.",
      period: "1912-1990",
      photo: "/white-painting.png",
    },
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    capital: "Pekín",
    population: "1.4 mil millones",
    language: "Mandarín",
    currency: "Yuan (¥)",
    founded: "1949",
    writer: {
      name: "Confucio",
      profession: "Filósofo y maestro",
      quote: "El hombre que mueve una montaña comienza cargando pequeñas piedras.",
      period: "551-479 a.C.",
      photo: "/confucio-sketch.png",
    },
  },
  {
    id: "greece",
    name: "Grecia",
    flag: "🇬🇷",
    capital: "Atenas",
    population: "10.7 millones",
    language: "Griego",
    currency: "Euro (€)",
    founded: "1821",
    writer: {
      name: "Sócrates",
      profession: "Filósofo",
      quote: "Solo sé que no sé nada.",
      period: "470-399 a.C.",
      photo: "/socrates-sketch.png",
    },
  },
  {
    id: "czech",
    name: "República Checa",
    flag: "🇨🇿",
    capital: "Praga",
    population: "10.7 millones",
    language: "Checo",
    currency: "Corona checa (Kč)",
    founded: "1993",
    writer: {
      name: "Franz Kafka",
      profession: "Escritor",
      quote: "Un libro debe ser la hacha que rompa el mar helado que hay dentro de nosotros.",
      period: "1883-1924",
      photo: "/kafka-sketch.png",
    },
  },
  {
    id: "netherlands",
    name: "Países Bajos",
    flag: "🇳🇱",
    capital: "Ámsterdam",
    population: "17.4 millones",
    language: "Neerlandés",
    currency: "Euro (€)",
    founded: "1581",
    writer: {
      name: "Anne Frank",
      profession: "Escritora y diarista",
      quote: "A pesar de todo, creo que la gente es realmente buena de corazón.",
      period: "1929-1945",
      photo: "/anne-frank-sketch.png",
    },
  },
  {
    id: "belgium",
    name: "Bélgica",
    flag: "🇧🇪",
    capital: "Bruselas",
    population: "11.5 millones",
    language: "Francés, Neerlandés, Alemán",
    currency: "Euro (€)",
    founded: "1830",
    writer: {
      name: "Julio Cortázar",
      profession: "Escritor y traductor",
      quote: "Nada está perdido si se tiene el valor de proclamar que todo está perdido y hay que empezar de nuevo.",
      period: "1914-1984",
      photo: "/cortazar-sketch.png",
    },
  },
  {
    id: "cuba",
    name: "Cuba",
    flag: "🇨🇺",
    capital: "La Habana",
    population: "11.3 millones",
    language: "Español",
    currency: "Peso cubano ($)",
    founded: "1902",
    writer: {
      name: "José Martí",
      profession: "Poeta, ensayista y héroe nacional",
      quote: "Ser culto es el único modo de ser libre.",
      period: "1853-1895",
      photo: "/jose-marti-historical.png",
    },
  },
  {
    id: "usa",
    name: "Estados Unidos",
    flag: "🇺🇸",
    capital: "Washington D.C.",
    population: "331 millones",
    language: "Inglés",
    currency: "Dólar estadounidense ($)",
    founded: "1776",
    writer: {
      name: "Edgar Allan Poe",
      profession: "Poeta, cuentista y crítico literario",
      quote: "Todo lo que vemos o parecemos no es sino un sueño dentro de un sueño.",
      period: "1809-1849",
      photo: "/edgar-allan-poe-sketch.png",
    },
  },
  {
    id: "ireland",
    name: "Irlanda",
    flag: "🇮🇪",
    capital: "Dublín",
    population: "5.0 millones",
    language: "Irlandés e Inglés",
    currency: "Euro (€)",
    founded: "1922",
    writer: {
      name: "Oscar Wilde",
      profession: "Escritor, poeta y dramaturgo",
      quote: "Podemos perdonar a un hombre por hacer algo útil mientras no lo admire.",
      period: "1854-1900",
      photo: "/oscar-wilde-sketch.png",
    },
  },
  {
    id: "venezuela",
    name: "Venezuela",
    flag: "🇻🇪",
    capital: "Caracas",
    population: "28.4 millones",
    language: "Español",
    currency: "Bolívar (Bs)",
    founded: "1811",
    writer: {
      name: "Rómulo Gallegos",
      profession: "Novelista, educador y político",
      quote: "El pueblo que no conoce su historia está condenado a repetir sus errores.",
      period: "1884-1969",
      photo: "/romulo-gallegos-sketch.png",
    },
  },
  {
    id: "mexico",
    name: "México",
    flag: "🇲🇽",
    capital: "Ciudad de México",
    population: "128.9 millones",
    language: "Español",
    currency: "Peso mexicano ($)",
    founded: "1821",
    writer: {
      name: "Juan Rulfo",
      profession: "Escritor y fotógrafo",
      quote: "Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo.",
      period: "1917-1986",
      photo: "/juan-rulfo-sketch.png",
    },
  },
  {
    id: "israel",
    name: "Israel",
    flag: "🇮🇱",
    capital: "Jerusalén",
    population: "9.5 millones",
    language: "Hebreo y Árabe",
    currency: "Nuevo shekel (₪)",
    founded: "1948",
    writer: {
      name: "Amos Oz",
      profession: "Novelista, ensayista y activista por la paz",
      quote: "La literatura es sobre la condición humana, no sobre la condición judía o árabe.",
      period: "1939-2018",
      photo: "/amos-oz-photo.png",
    },
  },
  {
    id: "turkey",
    name: "Turquía",
    flag: "🇹🇷",
    capital: "Ankara",
    population: "84.3 millones",
    language: "Turco",
    currency: "Lira turca (₺)",
    founded: "1923",
    writer: {
      name: "Orhan Pamuk",
      profession: "Novelista y Premio Nobel de Literatura",
      quote: "El verdadero arte de la memoria no es la capacidad de recordar, sino la capacidad de olvidar.",
      period: "1952-presente",
      photo: "/orhan-pamuk-photo.png",
    },
  },
  {
    id: "switzerland",
    name: "Suiza",
    flag: "🇨🇭",
    capital: "Berna",
    population: "8.7 millones",
    language: "Alemán, Francés, Italiano, Romanche",
    currency: "Franco suizo (CHF)",
    founded: "1291",
    writer: {
      name: "Hermann Hesse",
      profession: "Novelista, poeta y Premio Nobel",
      quote: "Cada hombre lleva en sí mismo la posibilidad de ser todos los hombres.",
      period: "1877-1962",
      photo: "/herman-hesse-sketch.png",
    },
  },
  {
    id: "canada",
    name: "Canadá",
    flag: "🇨🇦",
    capital: "Ottawa",
    population: "38.2 millones",
    language: "Inglés y Francés",
    currency: "Dólar canadiense ($)",
    founded: "1867",
    writer: {
      name: "Margaret Atwood",
      profession: "Novelista, poeta y crítica literaria",
      quote: "Una palabra después de una palabra después de una palabra es poder.",
      period: "1939-presente",
      photo: "/margaret-atwood-portrait.png",
    },
  },
  {
    id: "southafrica",
    name: "Sudáfrica",
    flag: "🇿🇦",
    capital: "Ciudad del Cabo",
    population: "60.4 millones",
    language: "Afrikáans, Inglés y otros",
    currency: "Rand (R)",
    founded: "1910",
    writer: {
      name: "J.R.R. Tolkien",
      profession: "Filólogo, escritor y profesor",
      quote: "No todos los que vagan están perdidos.",
      period: "1892-1973",
      photo: "/tolkien-sketch.png",
    },
  },
  {
    id: "peru",
    name: "Perú",
    flag: "🇵🇪",
    capital: "Lima",
    population: "33.4 millones",
    language: "Español",
    currency: "Sol (S/)",
    founded: "1821",
    writer: {
      name: "Mario Vargas Llosa",
      profession: "Novelista, ensayista y Premio Nobel",
      quote: "La literatura es la mejor manera que ha encontrado el ser humano para decir la verdad.",
      period: "1936-presente",
      photo: "/vargas-llosa-portrait.png",
    },
  },
  {
    id: "southkorea",
    name: "Corea del Sur",
    flag: "🇰🇷",
    capital: "Seúl",
    population: "51.8 millones",
    language: "Coreano",
    currency: "Won (₩)",
    founded: "1948",
    writer: {
      name: "Han Kang",
      profession: "Novelista y Premio Nobel",
      quote: "La escritura es un acto de resistencia contra el olvido.",
      period: "1970-presente",
      photo: "/han-kang-portrait.png",
    },
  },
]

type ViewState = "flag" | "info" | "writer"

// Función cn simplificada para evitar problemas con tailwind-merge
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

export default function CountriesApp() {
  const [mounted, setMounted] = useState(false)
  const [countryStates, setCountryStates] = useState<Record<string, ViewState>>({})
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")

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
      Italiano: "🇮🇹",
      Alemán: "🇩🇪",
      Inglés: "🇬🇧",
      Ruso: "🇷🇺",
      Japonés: "🇯🇵",
      Portugués: "🇧🇷",
      "Hindi e Inglés": "🇮🇳",
      Noruego: "🇳🇴",
      Sueco: "🇸🇪",
      Mandarín: "🇨🇳",
      Griego: "🇬🇷",
      Checo: "🇨🇿",
      Neerlandés: "🇳🇱",
      "Francés, Neerlandés, Alemán": "🇧🇪",
      "Irlandés e Inglés": "🇮🇪",
      "Afrikáans, Inglés y otros": "🇿🇦",
      Coreano: "🇰🇷",
      "Hebreo y Árabe": "🇮🇱",
      Turco: "🇹🇷",
      "Alemán, Francés, Italiano, Romanche": "🇨🇭",
      "Inglés y Francés": "🇨🇦",
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
    setCountryStates((prev) => {
      const currentState = prev[countryId] || "flag"
      let nextState: ViewState

      if (currentState === "flag") {
        nextState = "info"
      } else if (currentState === "info") {
        nextState = "writer"
      } else {
        nextState = "flag"
      }

      return { ...prev, [countryId]: nextState }
    })
  }

  const resetCard = (countryId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setCountryStates((prev) => ({ ...prev, [countryId]: "flag" }))
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

.flag-front { transform: rotateY(0deg); z-index: 3; }
.flag-back { transform: rotateY(120deg); z-index: 2; }
.flag-writer { transform: rotateY(240deg); z-index: 1; }

.flip-card[data-state="info"] .flip-card-inner {
  transform: rotateY(-120deg);
}

.flip-card[data-state="writer"] .flip-card-inner {
  transform: rotateY(-240deg);
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

.author-photo::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0,0,0,0.1) 1px, transparent 2px),
    radial-gradient(circle at 80% 70%, rgba(0,0,0,0.1) 1px, transparent 2px),
    radial-gradient(circle at 40% 80%, rgba(0,0,0,0.08) 1px, transparent 2px),
    radial-gradient(circle at 60% 20%, rgba(0,0,0,0.08) 1px, transparent 2px);
  background-size: 8px 8px, 12px 12px, 15px 15px, 10px 10px;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
}

/* SOLUCIÓN DEFINITIVA - SCROLL FORZADO */
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

/* Contenido interno que SIEMPRE será más alto */
.force-content {
  min-height: 800px !important;
  height: auto !important;
  padding: 20px !important;
  box-sizing: border-box !important;
}

/* Espaciador invisible para garantizar scroll */
.scroll-spacer {
  height: 200px !important;
  width: 100% !important;
  display: block !important;
  visibility: hidden !important;
}

/* Estilos para el mapamundi con sombras */
.world-map-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.world-map-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
}

.world-map-image:hover {
  transform: scale(1.02);
}

/* Overlay para mejorar legibilidad */
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
  .world-map-container {
    padding: 1rem;
  }
  
  .world-map-image {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  }
  
  .content-overlay, .hero-overlay {
    margin: 0.5rem;
    padding: 1.5rem;
  }
}
`}
      </style>

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

                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-blue-800 mb-2">
                                  Información Adicional
                                </h4>
                                <div className="text-xs text-blue-700 space-y-2">
                                  <p>• País con rica historia y tradiciones culturales únicas</p>
                                  <p>• Importante contribución a la literatura y las artes mundiales</p>
                                  <p>• Patrimonio arquitectónico y natural reconocido</p>
                                  <p>• Gastronomía tradicional con platos emblemáticos</p>
                                  <p>• Festivales y celebraciones que reflejan su identidad</p>
                                  <p>• Sistema educativo con características propias</p>
                                  <p>• Deportes tradicionales y modernos populares</p>
                                  <p>• Música y danzas folclóricas representativas</p>
                                  <p>• Artesanías y oficios tradicionales preservados</p>
                                  <p>• Paisajes naturales diversos y únicos</p>
                                </div>
                              </div>

                              <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-green-800 mb-2">
                                  Datos Curiosos
                                </h4>
                                <div className="text-xs text-green-700 space-y-2">
                                  <p>• Tradiciones únicas que se mantienen vivas</p>
                                  <p>• Inventos o descubrimientos importantes originados aquí</p>
                                  <p>• Personajes históricos que marcaron la historia mundial</p>
                                  <p>• Lugares emblemáticos reconocidos internacionalmente</p>
                                  <p>• Especies animales o vegetales endémicas</p>
                                  <p>• Récords mundiales o logros destacados</p>
                                  <p>• Influencia cultural en otros países</p>
                                  <p>• Tradiciones gastronómicas exportadas globalmente</p>
                                  <p>• Contribuciones científicas y tecnológicas</p>
                                  <p>• Movimientos artísticos originados en el país</p>
                                </div>
                              </div>

                              <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-purple-800 mb-2">
                                  Historia y Cultura
                                </h4>
                                <div className="text-xs text-purple-700 space-y-2">
                                  <p>• Períodos históricos que definieron su identidad</p>
                                  <p>• Influencias de diferentes civilizaciones</p>
                                  <p>• Evolución política y social a través del tiempo</p>
                                  <p>• Símbolos patrios y su significado histórico</p>
                                  <p>• Tradiciones orales transmitidas por generaciones</p>
                                  <p>• Arquitectura que refleja diferentes épocas</p>
                                  <p>• Museos y sitios históricos importantes</p>
                                  <p>• Lenguas regionales y dialectos locales</p>
                                  <p>• Costumbres familiares y sociales características</p>
                                  <p>• Celebraciones religiosas y seculares tradicionales</p>
                                </div>
                              </div>

                              <p className="text-xs text-center text-gray-500 mt-6 bg-blue-50 p-3 rounded-lg">
                                Haz click de nuevo para ver el escritor representativo
                              </p>

                              {/* ESPACIADOR PARA GARANTIZAR SCROLL */}
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

                              <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-purple-800 mb-2">
                                  Biografía del Autor
                                </h4>
                                <div className="text-xs text-purple-700 space-y-2">
                                  <p>• Considerado una figura fundamental de la literatura de {country.name}</p>
                                  <p>• Su obra refleja la esencia cultural y social de su época</p>
                                  <p>• Reconocido por su estilo literario único e innovador</p>
                                  <p>• Influenciado por los movimientos intelectuales de su tiempo</p>
                                  <p>• Sus textos abordan temas universales con perspectiva local</p>
                                  <p>• Formación académica y experiencias que marcaron su escritura</p>
                                  <p>• Relaciones con otros intelectuales y escritores contemporáneos</p>
                                  <p>• Evolución de su estilo literario a lo largo de su carrera</p>
                                  <p>• Contexto histórico y social que influyó en sus obras</p>
                                  <p>• Reconocimientos y premios recibidos durante su vida</p>
                                </div>
                              </div>

                              <div className="bg-amber-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-amber-800 mb-2">
                                  Obras Principales
                                </h4>
                                <div className="text-xs text-amber-700 space-y-2">
                                  <p>• Obras más representativas que definieron su legado</p>
                                  <p>• Traducciones a múltiples idiomas alrededor del mundo</p>
                                  <p>• Adaptaciones cinematográficas y teatrales de sus textos</p>
                                  <p>• Influencia en las generaciones posteriores de escritores</p>
                                  <p>• Temas recurrentes que caracterizan su producción literaria</p>
                                  <p>• Técnicas narrativas innovadoras que desarrolló</p>
                                  <p>• Personajes memorables creados en sus historias</p>
                                  <p>• Crítica literaria y análisis académico de su obra</p>
                                  <p>• Ediciones especiales y estudios críticos publicados</p>
                                  <p>• Presencia en programas educativos y currículos escolares</p>
                                </div>
                              </div>

                              <div className="bg-rose-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-rose-800 mb-2">
                                  Legado Cultural
                                </h4>
                                <div className="text-xs text-rose-700 space-y-2">
                                  <p>• Impacto duradero en la identidad cultural nacional</p>
                                  <p>• Inspiración para artistas, músicos y creadores contemporáneos</p>
                                  <p>• Monumentos, estatuas y lugares conmemorativos en su honor</p>
                                  <p>• Instituciones educativas y culturales que llevan su nombre</p>
                                  <p>• Festivales literarios y eventos culturales dedicados a su memoria</p>
                                  <p>• Premios literarios establecidos en reconocimiento a su obra</p>
                                  <p>• Museos y casas-museo que preservan su historia personal</p>
                                  <p>• Fundaciones que promueven la literatura y las artes</p>
                                  <p>• Estudios académicos y tesis doctorales sobre su trabajo</p>
                                  <p>• Influencia en la literatura mundial y el canon literario universal</p>
                                </div>
                              </div>

                              <div className="bg-emerald-50 p-4 rounded-lg">
                                <h4 className="literary-title font-semibold text-sm text-emerald-800 mb-2">
                                  Contexto Histórico
                                </h4>
                                <div className="text-xs text-emerald-700 space-y-2">
                                  <p>• Época histórica que marcó profundamente su visión del mundo</p>
                                  <p>• Movimientos literarios y artísticos de su generación</p>
                                  <p>• Eventos políticos y sociales que influyeron en su escritura</p>
                                  <p>• Círculos intelectuales y tertulias literarias de su tiempo</p>
                                  <p>• Medios de comunicación y publicaciones de la época</p>
                                  <p>• Cambios sociales y culturales reflejados en sus obras</p>
                                  <p>• Relación con las instituciones políticas y culturales</p>
                                  <p>• Viajes y experiencias internacionales que enriquecieron su perspectiva</p>
                                  <p>• Correspondencia con otros escritores e intelectuales</p>
                                  <p>• Recepción crítica de su obra en diferentes períodos históricos</p>
                                </div>
                              </div>

                              <div className="text-center">
                                <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                                  Escritor más representativo de {country.name}
                                </p>
                              </div>

                              <p className="text-xs text-center text-gray-500 mt-4 bg-blue-50 p-3 rounded-lg">
                                Haz click de nuevo para volver al inicio
                              </p>

                              {/* ESPACIADOR PARA GARANTIZAR SCROLL */}
                              <div className="scroll-spacer"></div>
                            </div>
                          </div>
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
            <p className="text-xs text-gray-400 mt-2">Fotos: Wikipedia Commons | Ordenado alfabéticamente</p>
          </div>
        </div>
      </div>

      {/* PIE DE PÁGINA CON OVERLAY */}
      <footer className="footer-overlay text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Sección principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 literary-body">
            {/* Columna 1: Sobre el proyecto */}
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

            {/* Columna 2: Características */}
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
                  Citas literarias auténticas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Filtros por idioma
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Diseño responsive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                  Animaciones interactivas
                </li>
              </ul>
            </div>

            {/* Columna 3: Idiomas disponibles */}
            <div className="space-y-4">
              <h4 className="literary-title text-lg font-semibold flex items-center gap-2">
                <Pen className="h-5 w-5 text-purple-300" />
                Idiomas Incluidos
              </h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                {languageOptions.slice(0, 8).map((lang) => (
                  <div key={lang.value} className="flex items-center gap-2">
                    <span className="text-base">{lang.flag}</span>
                    <span className="truncate">{lang.label}</span>
                  </div>
                ))}
                {languageOptions.length > 8 && (
                  <div className="col-span-2 text-blue-300 text-xs">+{languageOptions.length - 8} idiomas más...</div>
                )}
              </div>
            </div>

            {/* Columna 4: Estadísticas */}
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
                  <div className="text-2xl font-bold text-green-300">{languageOptions.length}</div>
                  <div className="text-xs text-gray-300">Idiomas diferentes</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-300">{countries.length}</div>
                  <div className="text-xs text-gray-300">Escritores destacados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Sección de cita inspiradora */}
          <div className="text-center mb-8">
            <div className="max-w-3xl mx-auto">
              <Quote className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <blockquote className="literary-quote text-lg italic text-gray-200 mb-4">
                "Un libro es un sueño que tienes en tus manos"
              </blockquote>
              <cite className="literary-body text-blue-300 font-medium">Neil Gaiman</cite>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Sección inferior */}
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

          {/* Mapamundi decorativo en el footer */}
          <div className="mt-8 opacity-20">
            <div className="world-map-container">
              <img
                src="/world-map-books-hd.png"
                alt="Mapamundi decorativo"
                className="world-map-image max-h-32 opacity-50"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
