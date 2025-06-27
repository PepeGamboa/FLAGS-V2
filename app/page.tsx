"use client"

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
        summary: "Don Quijote de la Mancha es considerada la primera novela moderna y una de las obras más importantes de la literatura universal. Narra las aventuras de Alonso Quixano, un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante bajo el nombre de Don Quijote. Acompañado por su fiel escudero Sancho Panza, emprende aventuras para defender a los desvalidos y luchar contra las injusticias. La obra es una sátira de las novelas de caballerías, pero también una profunda reflexión sobre la realidad y la fantasía, los ideales y la vida práctica. A través del contraste entre el idealista Don Quijote y el pragmático Sancho Panza, Cervantes explora temas universales como la locura y la cordura, la justicia, el amor y la muerte.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Idealismo vs Realismo", "Locura y Cordura", "Justicia", "Amistad", "Sátira Social"]
      }
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
      quote: "El futuro tiene muchos nombres. Para los débiles es lo inalcanzable. Para los temerosos, lo desconocido. Para los valientes, la oportunidad.",
      period: "1802-1885",
      photo: "/victor-hugo-engraving.jpeg",
      masterwork: {
        title: "Los Miserables",
        year: "1862",
        genre: "Novela",
        summary: "Los Miserables es una monumental novela que retrata la Francia del siglo XIX a través de la historia de Jean Valjean, un ex-convicto que busca la redención. La obra sigue las vidas entrelazadas de varios personajes, incluyendo a Fantine, una madre soltera; Cosette, su hija; Marius, un joven revolucionario; y Javert, el implacable inspector de policía. Hugo utiliza estas historias personales para explorar temas de justicia social, pobreza, revolución y redención. La novela culmina durante los levantamientos de París de 1832, donde los personajes enfrentan sus destinos. Es una obra que combina el drama personal con la crítica social, mostrando tanto la miseria humana como la capacidad de transformación y esperanza.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Justicia Social", "Redención", "Revolución", "Pobreza", "Amor y Sacrificio"]
      }
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
      masterwork: {
        title: "La Divina Comedia",
        year: "1308-1320",
        genre: "Poema épico",
        summary: "La Divina Comedia es un viaje alegórico a través del Infierno, el Purgatorio y el Paraíso, guiado primero por el poeta romano Virgilio y luego por Beatriz, el amor idealizado de Dante. La obra es tanto un viaje espiritual personal como una representación de la condición humana y la búsqueda de la salvación. En el Infierno, Dante encuentra a los condenados organizados según sus pecados; en el Purgatorio, a las almas que se purifican; y en el Paraíso, a los bienaventurados en diferentes esferas celestiales. La obra combina teología medieval, filosofía aristotélica, política contemporánea y experiencias personales del autor, creando una síntesis única de lo divino y lo humano que ha influenciado profundamente la literatura occidental.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Viaje Espiritual", "Justicia Divina", "Amor Cortés", "Política Medieval", "Redención"]
      }
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
        summary: "Fausto, de Goethe, narra la historia de un sabio insatisfecho que, a través de un pacto con el diablo Mefistófeles, busca conocimiento y placeres terrenales, vendiendo su alma a cambio de juventud y experiencias ilimitadas. La obra, dividida en dos partes, explora la búsqueda de sentido en la vida, la lucha entre el bien y el mal, y la naturaleza del alma humana, culminando en una compleja reflexión sobre la redención y la trascendencia. El doctor Fausto, un erudito consumido por su sed de conocimiento, se siente frustrado por los límites de la ciencia y la filosofía. A través de sus aventuras, Fausto experimenta el amor con Margarita (Gretchen), una joven inocente que se convierte en víctima de su pasión. En la segunda parte, Fausto continúa su búsqueda de conocimiento y poder, participando en eventos históricos y realizando grandes obras para la humanidad. Finalmente, a pesar de sus pecados y errores, Fausto es redimido y salvado por la gracia divina.",
        image: "/fausto-illustration.png",
        themes: ["Pacto Diabólico", "Búsqueda del Conocimiento", "Amor y Tragedia", "Redención", "Naturaleza Humana"]
      }
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
        summary: "Hamlet es la tragedia más famosa de Shakespeare, que narra la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre tras ser visitado por su fantasma. La obra explora temas profundos como la venganza, la locura, la muerte, la traición y la corrupción moral. Hamlet finge estar loco mientras planea su venganza contra su tío Claudio, quien ha asesinado a su padre y se ha casado con su madre Gertrudis. La obra incluye algunos de los monólogos más famosos de la literatura, incluyendo 'Ser o no ser', donde Hamlet reflexiona sobre la vida y la muerte. La tragedia culmina en una serie de muertes que incluyen a Hamlet, Claudio, Gertrudis y Laertes, dejando solo a Horacio para contar la historia.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Venganza", "Locura", "Muerte", "Traición", "Dilema Moral"]
      }
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
      masterwork: {
        title: "Guerra y Paz",
        year: "1865-1869",
        genre: "Novela",
        summary: "Guerra y Paz es una monumental novela que retrata la sociedad rusa durante las guerras napoleónicas (1805-1820). A través de las vidas de varias familias aristocráticas, principalmente los Bezújov, los Bolkonski y los Rostov, Tolstói explora temas universales como el amor, la guerra, la muerte, la fe y el sentido de la historia. La novela sigue a personajes como Pierre Bezújov, el príncipe Andréi Bolkonski y Natasha Rostova mientras navegan por los cambios sociales y personales durante este período turbulento. Tolstói combina narrativa íntima con reflexiones filosóficas sobre la naturaleza de la historia y el libre albedrío, creando una obra que es tanto una crónica histórica como una profunda meditación sobre la condición humana.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Guerra y Sociedad", "Amor", "Destino vs Libre Albedrío", "Nobleza Rusa", "Filosofía de la Historia"]
      }
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
      quote: "La belleza es algo terrible y espantoso. Terrible porque es indefinible, y no se puede definir porque Dios no puso más que enigmas.",
      period: "1925-1970",
      photo: "/mishima-sketch.png",
      masterwork: {
        title: "El Mar de la Fertilidad",
        year: "1965-1970",
        genre: "Tetralogía",
        summary: "El Mar de la Fertilidad es la obra cumbre de Mishima, una tetralogía que explora temas de reencarnación, belleza, decadencia y la pérdida de los valores tradicionales japoneses en la era moderna. La serie sigue las supuestas reencarnaciones de un joven a través de diferentes períodos de la historia japonesa del siglo XX, observadas por Honda, un juez que envejece. Cada volumen representa una estación diferente y una etapa de la vida japonesa: desde la era Meiji hasta la posguerra. La obra combina elementos del budismo, la filosofía occidental y la estética japonesa tradicional, creando una meditación compleja sobre la naturaleza del tiempo, la identidad y la muerte. Es considerada una de las obras más ambiciosas de la literatura japonesa moderna.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Reencarnación", "Tradición vs Modernidad", "Belleza y Muerte", "Identidad Japonesa", "Ciclos Temporales"]
      }
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
      masterwork: {
        title: "El Alquimista",
        year: "1988",
        genre: "Novela",
        summary: "El Alquimista cuenta la historia de Santiago, un joven pastor andaluz que emprende un viaje desde España hasta las pirámides de Egipto en busca de un tesoro. Durante su travesía, Santiago aprende a escuchar su corazón, a leer las señales del destino y a entender el lenguaje universal que conecta todas las cosas. La novela es una alegoría sobre la búsqueda de los sueños personales y la realización del destino individual. A través de encuentros con diversos personajes, incluyendo un rey misterioso, un comerciante de cristales y un alquimista, Santiago descubre que el verdadero tesoro no es material sino espiritual. La obra combina elementos de filosofía oriental, misticismo y sabiduría popular, convirtiéndose en un fenómeno mundial que ha inspirado a millones de lectores.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda Personal", "Destino", "Sueños", "Espiritualidad", "Autoconocimiento"]
      }
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
        summary: "Ficciones es una colección de cuentos que revolucionó la literatura del siglo XX con su exploración de temas como el infinito, los laberintos, los espejos y la naturaleza de la realidad. Borges crea mundos fantásticos que desafían la lógica convencional: bibliotecas infinitas, laberintos temporales, enciclopedias de mundos imaginarios y personajes que existen en múltiples realidades. Cuentos como 'La Biblioteca de Babel', 'El jardín de senderos que se bifurcan' y 'Pierre Menard, autor del Quijote' han influenciado profundamente la literatura contemporánea. La obra combina erudición, filosofía y fantasía para crear una literatura intelectual única que explora los límites del conocimiento humano y la naturaleza de la ficción misma.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Infinito", "Laberintos", "Realidad y Ficción", "Tiempo", "Conocimiento"]
      }
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
      masterwork: {
        title: "Cien Años de Soledad",
        year: "1967",
        genre: "Novela",
        summary: "Cien Años de Soledad narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. La novela es una obra maestra del realismo mágico, donde lo fantástico y lo cotidiano se entrelazan naturalmente. García Márquez utiliza la historia de los Buendía para reflejar la historia de América Latina, con sus ciclos de violencia, soledad, amor y olvido. La obra incluye elementos mágicos como lluvias de flores, personajes que ascienden al cielo y pestes de insomnio y amnesia. A través de personajes como José Arcadio Buendía, Úrsula Iguarán y Aureliano Babilonia, la novela explora temas universales como el destino, la soledad, el poder y la memoria, creando una mitología única que ha definido la literatura latinoamericana.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Realismo Mágico", "Soledad", "Ciclos Históricos", "Familia", "Mitología Latinoamericana"]
      }
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
      masterwork: {
        title: "Gitanjali",
        year: "1910",
        genre: "Poesía",
        summary: "Gitanjali (Ofrenda Lírica) es una colección de poemas que le valió a Tagore el Premio Nobel de Literatura en 1913, convirtiéndolo en el primer no europeo en recibir este honor. Los poemas son una expresión profunda de la espiritualidad bengalí y la filosofía hindú, combinando devoción religiosa con reflexiones sobre la naturaleza, el amor y la condición humana. Tagore presenta una visión mística del mundo donde lo divino se manifiesta en lo cotidiano, y donde la búsqueda espiritual se expresa a través de imágenes poéticas de gran belleza. La obra refleja la síntesis única de Tagore entre la tradición oriental y el pensamiento moderno, creando una poesía que trasciende las barreras culturales y habla al corazón universal de la humanidad.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Espiritualidad", "Devoción", "Naturaleza", "Amor Divino", "Filosofía Oriental"]
      }
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
      masterwork: {
        title: "Canto General",
        year: "1950",
        genre: "Poesía épica",
        summary: "Canto General es una obra épica que abarca la historia de América Latina desde sus orígenes geológicos hasta el siglo XX. Neruda crea una visión poética monumental del continente americano, celebrando su naturaleza, denunciando las injusticias sociales y políticas, y rindiendo homenaje a sus pueblos y culturas. La obra incluye el famoso poema 'Alturas de Macchu Picchu', donde el poeta reflexiona sobre la civilización incaica y la condición humana. A través de quince secciones, Neruda combina lirismo personal con compromiso político, creando una síntesis única entre poesía y historia. La obra es tanto una celebración de la identidad latinoamericana como una denuncia de la opresión, estableciendo a Neruda como la voz poética más importante del continente.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Historia Latinoamericana", "Naturaleza", "Justicia Social", "Identidad Continental", "Compromiso Político"]
      }
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
      masterwork: {
        title: "Casa de Muñecas",
        year: "1879",
        genre: "Drama",
        summary: "Casa de Muñecas es una obra revolucionaria que desafió las convenciones sociales de la época victoriana, especialmente en relación con el papel de la mujer en la sociedad. La obra cuenta la historia de Nora Helmer, quien aparentemente vive una vida perfecta como esposa y madre, pero que gradualmente descubre que ha sido tratada como una muñeca tanto por su padre como por su esposo Torvald. Cuando un secreto del pasado amenaza con destruir su matrimonio, Nora debe enfrentar la realidad de su situación y tomar una decisión radical. El famoso final, donde Nora abandona a su familia para encontrar su propia identidad, causó un escándalo en su época pero estableció a Ibsen como pionero del teatro moderno y defensor de los derechos de la mujer.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Derechos de la Mujer", "Matrimonio", "Identidad Personal", "Crítica Social", "Emancipación"]
      }
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
      masterwork: {
        title: "El Maravilloso Viaje de Nils Holgersson",
        year: "1906-1907",
        genre: "Literatura infantil",
        summary: "El Maravilloso Viaje de Nils Holgersson cuenta la historia de un niño travieso que es transformado en un duende como castigo por su mal comportamiento. Montado en el ganso doméstico Morten, Nils viaja por toda Suecia con una bandada de gansos salvajes, aprendiendo sobre la geografía, la historia y las tradiciones de su país. Durante su viaje, Nils experimenta aventuras que lo transforman de un niño egoísta en una persona compasiva y responsable. La obra fue originalmente encargada como libro de texto para enseñar geografía sueca a los niños, pero Lagerlöf creó una obra maestra que combina educación con narrativa fantástica. La novela se convirtió en un clásico de la literatura infantil mundial y ayudó a Lagerlöf a convertirse en la primera mujer en ganar el Premio Nobel de Literatura.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Transformación Personal", "Geografía Sueca", "Aventura", "Crecimiento Moral", "Fantasía"]
      }
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
      masterwork: {
        title: "Voss",
        year: "1957",
        genre: "Novela",
        summary: "Voss narra la historia épica del explorador alemán Johann Ulrich Voss, inspirado en la figura histórica de Ludwig Leichhardt, quien lidera una expedición al interior inexplorado de Australia en el siglo XIX. La novela alterna entre el viaje físico de Voss a través del desierto australiano y su conexión espiritual con Laura Trevelyan, una mujer de Sydney con quien desarrolla una relación mística sin apenas conocerse físicamente. White utiliza el paisaje australiano como metáfora de la condición humana, explorando temas de obsesión, espiritualidad y la relación entre el hombre y la naturaleza. La obra es considerada una de las grandes novelas australianas, capturando tanto la vastedad del continente como la complejidad psicológica de sus personajes, y estableciendo a White como el escritor más importante de Australia.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Exploración", "Espiritualidad", "Paisaje Australiano", "Obsesión", "Conexión Mística"]
      }
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
      masterwork: {
        title: "Las Analectas",
        year: "479-221 a.C.",
        genre: "Filosofía",
        summary: "Las Analectas (Lunyu) son una colección de dichos, conversaciones y reflexiones de Confucio compiladas por sus discípulos después de su muerte. Esta obra fundamental del pensamiento chino presenta las enseñanzas éticas y políticas del maestro, enfocándose en conceptos como el ren (benevolencia), li (ritual/cortesía), yi (rectitud) y junzi (el hombre ejemplar). Las Analectas no presentan un sistema filosófico sistemático, sino que ofrecen sabiduría práctica sobre cómo vivir una vida virtuosa y cómo gobernar justamente. Las enseñanzas de Confucio sobre la importancia de la educación, el respeto filial, la armonía social y la responsabilidad moral han influenciado profundamente la cultura china durante más de dos milenios y continúan siendo relevantes en el mundo contemporáneo.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Ética", "Gobierno Justo", "Educación", "Armonía Social", "Virtud Personal"]
      }
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
      masterwork: {
        title: "Diálogos de Platón",
        year: "380-360 a.C.",
        genre: "Filosofía",
        summary: "Aunque Sócrates no escribió ninguna obra, su pensamiento y método filosófico fueron inmortalizados en los Diálogos de Platón, donde aparece como personaje principal. Estos diálogos presentan el método socrático de investigación filosófica a través de preguntas y respuestas, conocido como mayéutica o 'arte de dar a luz' ideas. Sócrates desafía las creencias convencionales y busca definiciones precisas de conceptos como la justicia, la virtud, la belleza y el conocimiento. Su famosa declaración 'solo sé que no sé nada' refleja su humildad intelectual y su creencia de que la sabiduría verdadera comienza con el reconocimiento de la propia ignorancia. Los diálogos socráticos establecieron los fundamentos del pensamiento occidental y el método de investigación racional que sigue siendo central en la filosofía y la educación.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Método Socrático", "Conocimiento", "Virtud", "Justicia", "Sabiduría"]
      }
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
      masterwork: {
        title: "La Metamorfosis",
        year: "1915",
        genre: "Novela corta",
        summary: "La Metamorfosis cuenta la historia de Gregor Samsa, un viajante de comercio que una mañana despierta transformado en un insecto gigantesco. Esta transformación física sirve como metáfora de la alienación moderna y la deshumanización en la sociedad industrial. Kafka explora cómo la familia de Gregor reacciona ante su transformación, revelando las tensiones ocultas en las relaciones familiares y sociales. La obra examina temas como la culpa, el aislamiento, la responsabilidad familiar y la pérdida de identidad. A través de un estilo narrativo preciso y una atmósfera onírica, Kafka crea una parábola sobre la condición humana en el mundo moderno. La Metamorfosis se ha convertido en una de las obras más influyentes del siglo XX, dando origen al término 'kafkiano' para describir situaciones absurdas y pesadillescas.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Alienación", "Transformación", "Familia", "Identidad", "Absurdo"]
      }
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
      masterwork: {
        title: "El Diario de Ana Frank",
        year: "1947",
        genre: "Diario/Autobiografía",
        summary: "El Diario de Ana Frank es el testimonio personal de una adolescente judía que vivió escondida durante la ocupación nazi de los Países Bajos. Escrito entre 1942 y 1944 mientras Ana y su familia se ocultaban en una casa de Ámsterdam, el diario ofrece una perspectiva íntima y conmovedora del Holocausto. Ana describe no solo los horrores de la guerra y la persecución, sino también las experiencias universales de la adolescencia: sus sueños, miedos, conflictos familiares y primeros amores. Su voz optimista y su fe en la bondad humana, a pesar de las circunstancias terribles, han convertido su diario en uno de los documentos más poderosos sobre el Holocausto. La obra trasciende su contexto histórico para convertirse en un testimonio universal sobre la resistencia del espíritu humano ante la adversidad.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Holocausto", "Adolescencia", "Esperanza", "Resistencia", "Humanidad"]
      }
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
      masterwork: {
        title: "Rayuela",
        year: "1963",
        genre: "Novela",
        summary: "Rayuela es una novela experimental que revolucionó la narrativa latinoamericana con su estructura innovadora y su exploración de la condición existencial moderna. La obra puede leerse de múltiples maneras: linealmente o siguiendo un orden alternativo propuesto por el autor. Cuenta la historia de Horacio Oliveira, un intelectual argentino en París que busca desesperadamente un sentido a su existencia a través del amor, la literatura y la filosofía. La novela alterna entre París y Buenos Aires, explorando temas como la búsqueda de la autenticidad, la crítica a la cultura occidental y la experimentación con el lenguaje. Cortázar crea una obra que es tanto una novela como una reflexión sobre el acto de escribir y leer, desafiando las convenciones narrativas tradicionales y estableciendo nuevos paradigmas para la literatura contemporánea.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Experimentación Narrativa", "Existencialismo", "Búsqueda de Sentido", "Amor", "Crítica Cultural"]
      }
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
      masterwork: {
        title: "Versos Sencillos",
        year: "1891",
        genre: "Poesía",
        summary: "Versos Sencillos es la obra poética más conocida de José Martí, escrita durante su exilio en Nueva York. Esta colección de poemas refleja tanto su nostalgia por Cuba como su visión de la justicia social y la libertad. Los versos, escritos en un lenguaje accesible pero profundamente emotivo, abordan temas como el amor a la patria, la solidaridad con los oprimidos, la naturaleza y la muerte. El poema más famoso, 'Yo soy un hombre sincero', se convirtió en la letra de la canción 'Guantanamera', conocida mundialmente. Martí combina simplicidad formal con profundidad filosófica, creando una poesía que es tanto personal como política. La obra refleja su ideal de una literatura americana auténtica, libre de influencias europeas, y su compromiso con la independencia de Cuba y la unidad latinoamericana.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Patriotismo", "Libertad", "Justicia Social", "Identidad Americana", "Exilio"]
      }
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
      masterwork: {
        title: "El Cuervo",
        year: "1845",
        genre: "Poema",
        summary: "El Cuervo es el poema más famoso de Edgar Allan Poe y una de las obras más reconocidas de la literatura estadounidense. El poema narra la visita nocturna de un cuervo parlante a un hombre que lamenta la pérdida de su amada Lenore. A través de un diálogo repetitivo donde el cuervo solo responde 'Nevermore' (Nunca más), Poe crea una atmósfera de creciente desesperación y locura. El poema es notable por su estructura métrica compleja, su uso del estribillo y su exploración de temas como la muerte, la pérdida y la desesperanza. Poe escribió también un ensayo, 'La filosofía de la composición', donde explica detalladamente cómo construyó el poema para lograr el máximo efecto emocional. El Cuervo estableció a Poe como maestro del género gótico y precursor del simbolismo en la literatura americana.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Muerte", "Pérdida", "Locura", "Desesperación", "Simbolismo"]
      }
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
      masterwork: {
        title: "El Retrato de Dorian Gray",
        year: "1890",
        genre: "Novela",
        summary: "El Retrato de Dorian Gray es la única novela de Oscar Wilde y una obra maestra del decadentismo victoriano. La historia sigue a Dorian Gray, un joven de extraordinaria belleza que, influenciado por el hedonista Lord Henry Wotton, desea que su retrato envejezca en lugar de él. Su deseo se cumple mágicamente: mientras Dorian permanece joven y hermoso, su retrato refleja los efectos de sus pecados y excesos. La novela explora temas como la vanidad, la corrupción moral, la búsqueda del placer y la relación entre arte y vida. Wilde utiliza la historia para criticar la hipocresía de la sociedad victoriana y defender el esteticismo, la filosofía del 'arte por el arte'. La obra causó escándalo en su época por su contenido subversivo y sus alusiones homosexuales, pero se ha convertido en un clásico que examina la naturaleza dual del ser humano.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Vanidad", "Corrupción Moral", "Esteticismo", "Dualidad Humana", "Crítica Social"]
      }
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
      masterwork: {
        title: "Doña Bárbara",
        year: "1929",
        genre: "Novela",
        summary: "Doña Bárbara es considerada la novela fundacional de la literatura venezolana moderna y una de las obras más importantes del realismo latinoamericano. La novela narra el conflicto entre la civilización y la barbarie a través de la historia de Santos Luzardo, un abogado educado que regresa a los llanos venezolanos para reclamar sus tierras, y Doña Bárbara, una mujer poderosa y despiadada que domina la región. Gallegos utiliza el paisaje de los llanos como protagonista, creando una épica nacional que refleja la lucha de Venezuela entre el progreso y el atraso. La obra explora temas como el machismo, la violencia rural, la corrupción política y la necesidad de educación y justicia. Doña Bárbara se convirtió en un símbolo de la América Latina salvaje que debe ser civilizada, estableciendo arquetipos que han influenciado profundamente la literatura continental.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Civilización vs Barbarie", "Llanos Venezolanos", "Poder", "Justicia", "Identidad Nacional"]
      }
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
      masterwork: {
        title: "Pedro Páramo",
        year: "1955",
        genre: "Novela",
        summary: "Pedro Páramo es una obra revolucionaria que transformó la narrativa latinoamericana con su estructura fragmentaria y su tratamiento del tiempo y la muerte. La novela cuenta la historia de Juan Preciado, quien viaja a Comala en busca de su padre, Pedro Páramo, solo para descubrir que el pueblo está habitado por muertos que narran sus historias. A través de voces espectrales, Rulfo reconstruye la vida y los crímenes de Pedro Páramo, un cacique que destruyó el pueblo con su ambición y crueldad. La obra utiliza técnicas narrativas innovadoras como el monólogo interior, los saltos temporales y la fusión entre realidad y fantasía, anticipando el realismo mágico. Rulfo crea una atmósfera onírica donde los límites entre vida y muerte se difuminan, ofreciendo una visión poética y devastadora del México rural posrevolucionario.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Muerte", "Caciquismo", "México Rural", "Tiempo Circular", "Realismo Mágico"]
      }
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
      masterwork: {
        title: "Una Historia de Amor y Oscuridad",
        year: "2002",
        genre: "Autobiografía",
        summary: "Una Historia de Amor y Oscuridad es la obra autobiográfica más importante de Amos Oz, que narra su infancia en Jerusalén durante los años de formación del Estado de Israel. La obra combina memoria personal con historia colectiva, explorando la compleja identidad israelí a través de la historia de su familia, especialmente la relación con su madre, quien se suicidó cuando él tenía doce años. Oz retrata vívidamente la Jerusalén de los años 40 y 50, con sus tensiones políticas, sus esperanzas sionistas y sus tragedias personales. La obra es tanto una elegía a su madre como una reflexión sobre el precio emocional de la construcción nacional. Con una prosa poética y melancólica, Oz crea un retrato íntimo de una época turbulenta, explorando temas como la pérdida, la identidad, el conflicto y la búsqueda de pertenencia en una tierra disputada.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Identidad Israelí", "Memoria", "Pérdida Materna", "Sionismo", "Jerusalén"]
      }
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
      masterwork: {
        title: "Mi Nombre es Rojo",
        year: "1998",
        genre: "Novela",
        summary: "Mi Nombre es Rojo es una novela compleja ambientada en el Estambul del siglo XVI que combina misterio, historia del arte y reflexión filosófica. La historia gira en torno al asesinato de un miniaturista en el taller del sultán, donde se está creando un libro secreto que combina estilos artísticos orientales y occidentales. Pamuk utiliza múltiples narradores, incluyendo personajes muertos, colores y objetos, para explorar temas como la identidad cultural, el choque entre tradición y modernidad, y la naturaleza del arte. La novela examina las tensiones entre el mundo islámico y occidental a través del arte de la miniatura, cuestionando conceptos de originalidad, imitación y representación. Con una estructura narrativa innovadora y una rica exploración de la cultura otomana, Pamuk crea una obra que es tanto una novela policíaca como una meditación profunda sobre el arte, la fe y la identidad cultural.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Arte Islámico", "Identidad Cultural", "Tradición vs Modernidad", "Imperio Otomano", "Estética"]
      }
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
      masterwork: {
        title: "El Lobo Estepario",
        year: "1927",
        genre: "Novela",
        summary: "El Lobo Estepario es una novela psicológica que explora la crisis existencial de Harry Haller, un intelectual de mediana edad que se siente dividido entre su naturaleza humana civilizada y sus instintos salvajes (el 'lobo estepario'). Haller contempla el suicidio hasta que conoce a Hermine, una mujer misteriosa que lo introduce en un mundo de experiencias sensuales y espirituales. La novela culmina en el 'Teatro Mágico', una secuencia surrealista donde Haller confronta diferentes aspectos de su personalidad. Hesse utiliza elementos del psicoanálisis, la filosofía oriental y el misticismo para explorar temas como la dualidad humana, la búsqueda de la autenticidad y la integración de los aspectos contradictorios de la personalidad. La obra refleja la crisis espiritual de la Europa de entreguerras y se convirtió en un texto fundamental para la contracultura de los años 60.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Dualidad Humana", "Crisis Existencial", "Autoconocimiento", "Misticismo", "Psicología"]
      }
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
      masterwork: {
        title: "El Cuento de la Criada",
        year: "1985",
        genre: "Distopía",
        summary: "El Cuento de la Criada presenta una sociedad distópica llamada Gilead, donde las mujeres fértiles son esclavizadas como 'criadas' para reproducirse para las élites gobernantes. La novela sigue a Offred, una criada que lucha por mantener su identidad y dignidad en un régimen totalitario teocrático. Atwood crea un mundo aterrador pero plausible donde los derechos de las mujeres han sido completamente eliminados debido a una crisis de fertilidad. La obra explora temas como el control reproductivo, la opresión religiosa, la resistencia y la supervivencia. Atwood utiliza elementos de la historia real, incluyendo referencias a regímenes totalitarios y movimientos fundamentalistas, para crear una advertencia sobre los peligros del extremismo político y religioso. La novela se ha convertido en un símbolo de la lucha por los derechos de las mujeres y ha ganado nueva relevancia en debates contemporáneos sobre autonomía corporal y libertades civiles.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Distopía", "Derechos de la Mujer", "Totalitarismo", "Resistencia", "Control Reproductivo"]
      }
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
      masterwork: {
        title: "El Señor de los Anillos",
        year: "1954-1955",
        genre: "Fantasía épica",
        summary: "El Señor de los Anillos es una obra épica de fantasía que narra la lucha entre el bien y el mal en la Tierra Media. La historia sigue a Frodo Bolsón, un hobbit que debe destruir el Anillo Único para derrotar al Señor Oscuro Sauron. Acompañado por la Comunidad del Anillo, Frodo emprende un viaje peligroso hacia Mordor. Tolkien, utilizando su experiencia como filólogo, creó un mundo completamente desarrollado con idiomas, culturas e historias propias. La obra combina elementos de mitología, religión y experiencias de guerra (Tolkien luchó en la Primera Guerra Mundial) para crear una narrativa sobre el sacrificio, la amistad, la corrupción del poder y la pérdida de la inocencia. El Señor de los Anillos estableció los fundamentos del género de fantasía moderna y ha influenciado innumerables obras posteriores, convirtiéndose en un fenómeno cultural global.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Bien vs Mal", "Heroísmo", "Amistad", "Poder y Corrupción", "Pérdida de la Inocencia"]
      }
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
      masterwork: {
        title: "La Ciudad y los Perros",
        year: "1963",
        genre: "Novela",
        summary: "La Ciudad y los Perros es la primera novela de Vargas Llosa y una obra fundamental del boom latinoamericano. Ambientada en el Colegio Militar Leoncio Prado de Lima, la novela retrata la violencia, corrupción y machismo de la sociedad peruana a través de la experiencia de los cadetes. La historia se centra en el robo de un examen y sus consecuencias, revelando las complejas relaciones de poder, traición y supervivencia en un ambiente militar autoritario. Vargas Llosa utiliza técnicas narrativas innovadoras como múltiples perspectivas temporales y espaciales para crear un retrato multifacético de la realidad peruana. La obra explora temas como la iniciación masculina, la violencia institucional, las diferencias de clase y la corrupción moral. La novela causó controversia en Perú por su crítica al militarismo y fue quemada públicamente en el patio del colegio que inspiró la historia.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Militarismo", "Violencia", "Iniciación", "Corrupción", "Sociedad Peruana"]
      }
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
      masterwork: {
        title: "La Vegetariana",
        year: "2007",
        genre: "Novela",
        summary: "La Vegetariana es una novela perturbadora que explora la opresión de las mujeres en la sociedad coreana contemporánea a través de la historia de Yeong-hye, una ama de casa que decide dejar de comer carne. Esta decisión aparentemente simple desencadena una serie de eventos violentos que revelan la brutalidad del patriarcado y las expectativas sociales. La novela está dividida en tres partes narradas desde diferentes perspectivas: el esposo abusivo, el cuñado obsesionado y la hermana. Han Kang utiliza el vegetarianismo como metáfora de la resistencia femenina y la búsqueda de autonomía corporal. La obra examina temas como la violencia doméstica, la salud mental, la sexualidad reprimida y la rebelión contra las normas sociales. Con una prosa poética pero brutal, Han Kang crea una obra que es tanto una crítica social como una exploración psicológica profunda de la condición femenina.",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Opresión Femenina",\
