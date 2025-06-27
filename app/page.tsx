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
      extract: string
      extractSource: string
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
          "Don Quijote de la Mancha es considerada la primera novela moderna y una de las obras más importantes de la literatura universal. Narra las aventuras de Alonso Quixano, un hidalgo que enloquece leyendo libros de caballerías y decide convertirse en caballero andante bajo el nombre de Don Quijote. Acompañado por su fiel escudero Sancho Panza, emprende aventuras para defender a los desvalidos y luchar contra las injusticias. La obra es una sátira de las novelas de caballerías, pero también una profunda reflexión sobre la realidad y la fantasía, los ideales y la vida práctica. A través del contraste entre el idealista Don Quijote y el pragmático Sancho Panza, Cervantes explora temas universales como la locura y la cordura, la justicia, el amor y la muerte. La novela presenta episodios memorables como la lucha contra los molinos de viento, que Don Quijote confunde con gigantes, simbolizando la lucha eterna entre los ideales y la realidad.",
        extract:
          "\"En esto, descubrieron treinta o cuarenta molinos de viento que hay en aquel campo, y así como don Quijote los vio, dijo a su escudero: —La ventura va guiando nuestras cosas mejor de lo que acertáramos a desear; porque ves allí, amigo Sancho Panza, donde se descubren treinta, o pocos más, desaforados gigantes, con quien pienso hacer batalla y quitarles a todos las vidas, con cuyos despojos comenzaremos a enriquecer; que esta es buena guerra, y es gran servicio de Dios quitar tan mala simiente de sobre la faz de la tierra. —¿Qué gigantes? —dijo Sancho Panza. —Aquellos que allí ves —respondió su amo— de los brazos largos, que los suelen tener algunos de casi dos leguas. —Mire vuestra merced —respondió Sancho— que aquellos que allí se parecen no son gigantes, sino molinos de viento, y lo que en ellos parecen brazos son las aspas, que, volteadas del viento, hacen andar la piedra del molino.\"",
        extractSource: "Capítulo VIII, Primera Parte",
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
          "Fausto, de Goethe, narra la historia de un sabio insatisfecho que, a través de un pacto con el diablo Mefistófeles, busca conocimiento y placeres terrenales, vendiendo su alma a cambio de juventud y experiencias ilimitadas. La obra, dividida en dos partes, explora la búsqueda de sentido en la vida, la lucha entre el bien y el mal, y la naturaleza del alma humana. El doctor Fausto, un erudito consumido por su sed de conocimiento, se siente frustrado por los límites de la ciencia y la filosofía. A través de sus aventuras, Fausto experimenta el amor con Margarita (Gretchen), una joven inocente que se convierte en víctima de su pasión. En la segunda parte, Fausto continúa su búsqueda de conocimiento y poder, participando en eventos históricos y realizando grandes obras para la humanidad. La obra culmina mostrando la posibilidad de redención incluso para aquellos que han caído profundamente. Finalmente, a pesar de sus pecados y errores, Fausto es redimido y salvado por la gracia divina.",
        extract:
          "\"¡Ay! He estudiado a fondo filosofía, jurisprudencia, medicina y también, por desgracia, teología, con ardiente esfuerzo. Y heme aquí, pobre loco, tan sabio como antes. Me llaman maestro, me llaman hasta doctor, y hace ya diez años que traigo de acá para allá, por narices y por barbas, a mis discípulos... Y veo que no podemos saber nada. Esto es lo que me abrasa el corazón. Cierto que soy más hábil que todos esos mentecatos, doctores, maestros, escribanos y clérigos; no me atormentan escrúpulos ni dudas, no temo al infierno ni al diablo... pero también me ha sido arrebatada toda alegría. No me figuro saber algo provechoso, no me figuro poder enseñar algo que mejore a los hombres y los convierta. Tampoco tengo bienes ni dinero, ni honores ni grandezas del mundo.\"",
        extractSource: "Acto I, Escena 1",
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
          "Hamlet es la tragedia más famosa de Shakespeare, que narra la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre tras ser visitado por su fantasma. La obra explora temas profundos como la venganza, la locura, la muerte, la traición y la corrupción moral. Hamlet finge estar loco mientras planea su venganza contra su tío Claudio, quien ha asesinado a su padre y se ha casado con su madre Gertrudis. La obra incluye algunos de los monólogos más famosos de la literatura, incluyendo 'Ser o no ser', donde Hamlet reflexiona sobre la vida y la muerte. La complejidad psicológica del protagonista, sus dudas existenciales y su lucha interna entre la acción y la contemplación han convertido a Hamlet en uno de los personajes más estudiados de la literatura. La tragedia culmina en una serie de muertes que incluyen a Hamlet, Claudio, Gertrudis y Laertes, dejando solo a Horacio para contar la historia.",
        extract:
          "\"Ser o no ser, esa es la cuestión: si es más noble para el alma soportar las flechas y pedradas de la áspera Fortuna o tomar las armas contra este mar de calamidades y, haciéndoles frente, acabar con ellas. Morir... dormir, nada más; y pensar que con un sueño damos fin al pesar del corazón y a los mil naturales conflictos que constituyen la herencia de la carne: es una consumación que debemos desear devotamente. Morir... dormir; dormir... tal vez soñar. Sí, ahí está el obstáculo, porque es forzoso que nos detenga el considerar qué sueños pueden sobrevenir en ese sueño de la muerte, cuando nos hayamos librado del torbellino de la vida mortal.\"",
        extractSource: "Acto III, Escena 1",
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
          "Los Miserables es una monumental novela que retrata la Francia del siglo XIX a través de la historia de Jean Valjean, un ex-convicto que busca la redención. La obra sigue las vidas entrelazadas de varios personajes, incluyendo a Fantine, una madre soltera; Cosette, su hija; Marius, un joven revolucionario; y Javert, el implacable inspector de policía. Hugo utiliza estas historias personales para explorar temas de justicia social, pobreza, revolución y redención. La novela culmina durante los levantamientos de París de 1832, donde los personajes enfrentan sus destinos. Es una obra que combina el drama personal con la crítica social, mostrando tanto la miseria humana como la capacidad de transformación y esperanza. Hugo presenta un panorama épico de la sociedad francesa, desde los salones aristocráticos hasta las alcantarillas de París, creando un fresco social de extraordinaria amplitud.",
        extract:
          "\"Mientras por las leyes y las costumbres exista una condenación social que, en plena civilización, cree artificialmente infiernos sobre la tierra y complique con una fatalidad humana el destino que es divino; mientras los tres problemas del siglo —la degradación del hombre por el proletariado, la decadencia de la mujer por el hambre, la atrofia del niño por la noche— no sean resueltos; mientras en ciertas regiones sea posible la asfixia social; en otras palabras, y desde un punto de vista más amplio aún, mientras haya sobre la tierra ignorancia y miseria, libros de la naturaleza de éste podrán no ser inútiles.\"",
        extractSource: "Prefacio del autor",
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
          "Ficciones es una colección de cuentos que revolucionó la literatura del siglo XX con su exploración de temas como el infinito, los laberintos, los espejos y la naturaleza de la realidad. Borges crea mundos fantásticos que desafían la lógica convencional: bibliotecas infinitas, laberintos temporales, enciclopedias de mundos imaginarios y personajes que existen en múltiples realidades. Cuentos como 'La Biblioteca de Babel', 'El jardín de senderos que se bifurcan' y 'Pierre Menard, autor del Quijote' han influenciado profundamente la literatura contemporánea. La obra combina erudición, filosofía y fantasía para crear una literatura intelectual única que explora los límites del conocimiento humano y la naturaleza de la ficción misma. Borges utiliza la metaficción para cuestionar las fronteras entre realidad y literatura, creando textos que son tanto cuentos como ensayos filosóficos.",
        extract:
          "\"El universo (que otros llaman la Biblioteca) se compone de un número indefinido, y tal vez infinito, de galerías hexagonales, con vastos pozos de ventilación en el medio, cercados por barandas bajísimas. Desde cualquier hexágono se ven los pisos inferiores y superiores: interminablemente. La distribución de las galerías es invariable. Veinte anaqueles, a cinco largos anaqueles por lado, cubren todos los lados menos dos; su altura, que es la de los pisos, excede apenas la de un bibliotecario normal. Una de las caras libres da a un angosto zaguán, que desemboca en otra galería, idéntica a la primera y a todas. A izquierda y a derecha del zaguán hay dos gabinetes minúsculos. Uno permite dormir de pie; otro, satisfacer las necesidades fecales.\"",
        extractSource: "La Biblioteca de Babel",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Infinito", "Laberintos", "Realidad y Ficción", "Tiempo", "Conocimiento"],
      },
    },
  },
  {
    id: "russia",
    name: "Rusia",
    flag: "🇷🇺",
    capital: "Moscú",
    population: "146.2 millones",
    language: "Ruso",
    currency: "Rublo ruso (₽)",
    founded: "1547",
    writer: {
      name: "León Tolstói",
      profession: "Novelista y filósofo",
      quote: "Todos piensan en cambiar el mundo, pero nadie piensa en cambiarse a sí mismo.",
      period: "1828-1910",
      photo: "/tolstoi-sketch.png",
      masterwork: {
        title: "Guerra y Paz",
        year: "1865-1869",
        genre: "Novela épica",
        summary:
          "Guerra y Paz es una monumental novela épica que retrata la sociedad rusa durante las guerras napoleónicas. A través de las vidas de familias aristocráticas como los Rostov, los Bolkonsky y los Bezukhov, Tolstói explora temas universales como el amor, la guerra, la muerte, la fe y el destino. La obra combina magistralmente la historia personal con los grandes eventos históricos, mostrando cómo las vidas individuales se entrelazan con el curso de la historia. Pierre Bezukhov, Natasha Rostova y el príncipe Andrei Bolkonsky son personajes inolvidables que encarnan diferentes aspectos de la experiencia humana. La novela es tanto un retrato íntimo de la vida familiar como una meditación filosófica sobre la naturaleza de la historia y el libre albedrío. Tolstói presenta la guerra no como gloria heroica, sino como caos y sufrimiento humano, mientras celebra la capacidad de resistencia y renovación del espíritu humano.",
        extract:
          "\"Bueno, príncipe, Génova y Lucca no son más que dominios de familia de los Buonaparte. Le advierto que si no me dice que estamos en guerra, si se permite usted defender una vez más todas las infamias, todos los horrores de este Anticristo (en verdad creo que lo es), no le conoceré más. Ya no será usted mi amigo, ya no será usted mi fiel esclavo, como dice usted... Pero veo que le asusto. Siéntese y cuénteme. —Dios mío, ¿qué manera de recibirme! —dijo el príncipe, sin inmutarse por esta acogida. Vestía un frac bordado, medias de seda y zapatos con hebillas, y tenía en el pecho estrellas, y su rostro sereno expresaba una cortesía particular de la alta aristocracia, que sólo se adquiere en la infancia.\"",
        extractSource: "Libro Primero, Capítulo I",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Guerra y Paz", "Destino", "Amor", "Historia", "Filosofía de la vida"],
      },
    },
  },
  {
    id: "japan",
    name: "Japón",
    flag: "🇯🇵",
    capital: "Tokio",
    population: "125.8 millones",
    language: "Japonés",
    currency: "Yen japonés (¥)",
    founded: "660 a.C.",
    writer: {
      name: "Yukio Mishima",
      profession: "Novelista y dramaturgo",
      quote: "La belleza es algo terrible y espantoso.",
      period: "1925-1970",
      photo: "/mishima-sketch.png",
      masterwork: {
        title: "El Mar de la Fertilidad",
        year: "1965-1970",
        genre: "Tetralogía novelística",
        summary:
          "El Mar de la Fertilidad es la obra cumbre de Mishima, una tetralogía que explora temas de reencarnación, belleza, decadencia y la tensión entre tradición y modernidad en el Japón del siglo XX. La saga sigue las supuestas reencarnaciones de un joven a través de cuatro novelas: 'Nieve de primavera', 'Caballos desbocados', 'El templo del alba' y 'La corrupción de un ángel'. Cada volumen está ambientado en una época diferente, desde la era Taisho hasta la posguerra, mostrando la transformación de Japón. Mishima combina elementos del budismo, el shintoísmo y la filosofía occidental para crear una meditación profunda sobre la naturaleza del tiempo, la identidad y la muerte. La obra refleja la obsesión del autor con la belleza efímera y su crítica a la occidentalización de Japón, culminando en una reflexión sobre el vacío existencial de la modernidad.",
        extract:
          "\"Honda contempló el jardín nevado. La nieve había comenzado a caer al amanecer y ahora, a las diez de la mañana, ya cubría completamente el suelo. Los pinos parecían llevar sobre sus ramas pesadas capas de algodón blanco. El silencio era absoluto. Honda pensó en la belleza de la nieve, en su pureza, en su capacidad para transformar el mundo en algo completamente diferente. Pero también pensó en su naturaleza efímera, en cómo se derretiría con el primer rayo de sol primaveral. Era como la vida humana, como la belleza, como todo lo que amamos: destinado a desaparecer. Sin embargo, en esa misma fugacidad residía su valor más profundo. La nieve no era hermosa a pesar de su temporalidad, sino precisamente por ella.\"",
        extractSource: "Nieve de primavera, Capítulo 1",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Reencarnación", "Tradición vs Modernidad", "Belleza", "Muerte", "Identidad japonesa"],
      },
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
      profession: "Novelista y periodista",
      quote: "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
      period: "1927-2014",
      photo: "/garcia-marquez-portrait.png",
      masterwork: {
        title: "Cien años de soledad",
        year: "1967",
        genre: "Realismo mágico",
        summary:
          "Cien años de soledad es la obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. García Márquez teje una narrativa donde lo fantástico y lo real se entrelazan naturalmente, creando un universo donde llueve flores, los personajes ascienden al cielo y los muertos conviven con los vivos. La novela es una alegoría de la historia latinoamericana, explorando temas como la soledad, el destino cíclico, el poder, la violencia y el amor. Cada generación de los Buendía repite patrones familiares, sugiriendo que la historia se repite inexorablemente. La obra combina elementos míticos con crítica social, presentando una visión poética y trágica de América Latina. El estilo narrativo de García Márquez, que mezcla lo cotidiano con lo extraordinario, revolucionó la literatura mundial y estableció el realismo mágico como un género literario reconocido.",
        extract:
          "\"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía habría de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos desarrapados plantaba su carpa cerca de la aldea, y con un grande alboroto de pitos y timbales daban a conocer los nuevos inventos.\"",
        extractSource: "Capítulo 1",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Realismo Mágico", "Soledad", "Destino Cíclico", "Historia Latinoamericana", "Familia"],
      },
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
      profession: "Escritor y abogado",
      quote: "Un libro debe ser el hacha que rompa el mar helado que llevamos dentro.",
      period: "1883-1924",
      photo: "/kafka-sketch.png",
      masterwork: {
        title: "La Metamorfosis",
        year: "1915",
        genre: "Novela corta",
        summary:
          "La Metamorfosis es una de las obras más influyentes de la literatura moderna, que narra la transformación de Gregor Samsa en un insecto gigantesco. Esta transformación física sirve como metáfora de la alienación del individuo en la sociedad moderna. Kafka explora temas como la incomunicación familiar, la deshumanización del trabajo, la culpa y la responsabilidad. La obra presenta un mundo absurdo donde lo imposible se acepta como normal, anticipando el existencialismo y el teatro del absurdo. A través de la experiencia de Gregor, Kafka examina cómo la sociedad trata a aquellos que son diferentes o improductivos. La familia de Gregor, inicialmente dependiente de él económicamente, gradualmente lo rechaza y lo trata como una carga. La novela es una crítica mordaz de la sociedad burguesa y una exploración profunda de la condición humana en la era industrial.",
        extract:
          "\"Al despertar Gregor Samsa una mañana, tras un sueño intranquilo, se encontró en su cama convertido en un monstruoso insecto. Estaba echado sobre el duro caparazón de su espalda, y, al levantar un poco la cabeza, vio la figura convexa de su vientre oscuro, surcado por curvadas callosidades, cuya prominencia apenas si podía aguantar la colcha, que estaba visiblemente a punto de escurrirse hasta el suelo. Sus muchas patas, penosamente delgadas en comparación con el grosor ordinario de sus piernas, le vibraban desamparadas ante los ojos. '¿Qué me ha ocurrido?', pensó. No era un sueño. Su habitación, una habitación humana corriente, aunque muy reducida, permanecía tranquila entre las cuatro paredes harto conocidas.\"",
        extractSource: "Capítulo I",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Alienación", "Metamorfosis", "Familia", "Absurdo", "Condición humana"],
      },
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
    founded: "1810",
    writer: {
      name: "Pablo Neruda",
      profession: "Poeta y diplomático",
      quote: "Podrán cortar todas las flores, pero no podrán detener la primavera.",
      period: "1904-1973",
      photo: "/neruda-sketch.png",
      masterwork: {
        title: "Veinte poemas de amor y una canción desesperada",
        year: "1924",
        genre: "Poesía",
        summary:
          "Esta colección poética, escrita cuando Neruda tenía apenas 19 años, se convirtió en una de las obras más leídas de la poesía en español. Los poemas exploran el amor juvenil con una intensidad y sensualidad que revolucionó la poesía amorosa en lengua española. Neruda combina elementos del modernismo con un lenguaje más directo y emocional, creando versos que van desde la exaltación del amor hasta la melancolía de la pérdida. La obra refleja la influencia del paisaje chileno, especialmente del sur del país, donde Neruda pasó su juventud. Los poemas alternan entre la celebración del cuerpo femenino y la naturaleza, y la exploración de la soledad y el desamor. La 'canción desesperada' que cierra el libro es considerada una de las elegías amorosas más hermosas de la literatura hispanoamericana. La obra estableció a Neruda como una voz poética única y marcó el inicio de una carrera que lo llevaría al Premio Nobel de Literatura.",
        extract:
          "\"Cuerpo de mujer, blancas colinas, muslos blancos, te pareces al mundo en tu actitud de entrega. Mi cuerpo de labriego salvaje te socava y hace saltar el hijo del fondo de la tierra. Fui solo como un túnel. De mí huían los pájaros y en mí la noche entraba su invasión poderosa. Para sobrevivirme te forjé como un arma, como una flecha en mi arco, como una piedra en mi honda. Pero cae la hora de la venganza, y te amo. Cuerpo de piel, de musgo, de leche ávida y firme. Ah los vasos del pecho! Ah los ojos de ausencia! Ah las rosas del pubis! Ah tu voz lenta y triste! Cuerpo de mujer mía, persistiré en tu gracia.\"",
        extractSource: "Poema I",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Amor juvenil", "Naturaleza", "Sensualidad", "Melancolía", "Paisaje chileno"],
      },
    },
  },
  {
    id: "ireland",
    name: "Irlanda",
    flag: "🇮🇪",
    capital: "Dublín",
    population: "5.0 millones",
    language: "Inglés",
    currency: "Euro (€)",
    founded: "1922",
    writer: {
      name: "Oscar Wilde",
      profession: "Escritor y dramaturgo",
      quote: "Podemos perdonar a un hombre por hacer algo útil mientras no lo admire.",
      period: "1854-1900",
      photo: "/oscar-wilde-sketch.png",
      masterwork: {
        title: "El retrato de Dorian Gray",
        year: "1890",
        genre: "Novela gótica",
        summary:
          "El retrato de Dorian Gray es la única novela de Oscar Wilde y una obra maestra del decadentismo victoriano. La historia narra cómo Dorian Gray, un joven de extraordinaria belleza, hace un pacto para que su retrato envejezca en su lugar mientras él permanece eternamente joven. Influenciado por el hedonista Lord Henry Wotton, Dorian se sumerge en una vida de placeres y excesos, mientras su alma se corrompe y su retrato refleja la degradación moral que su rostro no muestra. Wilde utiliza esta premisa fantástica para explorar temas como la vanidad, la corrupción moral, el arte por el arte, y la hipocresía de la sociedad victoriana. La novela es tanto una crítica social como una reflexión sobre la naturaleza del arte y la belleza. El personaje de Dorian encarna los peligros del narcisismo y la búsqueda obsesiva de la juventud eterna, mientras que el retrato funciona como símbolo de la conciencia moral.",
        extract:
          "\"El estudio se llenó del rico olor de las rosas, y cuando la suave brisa de verano agitó, entre las hojas del jardín, la puerta abierta, trajo consigo el pesado aroma de las lilas o la más delicada fragancia del espino rosa. Lord Henry Wotton apenas podía distinguir el brillo de las flores doradas de la retama y las malvas de color malva, pero el pesado aroma de las rosas parecía flotar a su alrededor, y sus párpados se sentían cargados con el sueño. Cuando el viento agitó algunos de los árboles, él pudo captar el destello de las flores rosadas de los almendros o el temblor de las hojas plateadas de un tilo. Parecía escuchar el latido de la sangre de Dorian Gray y preguntarse qué seguiría.\"",
        extractSource: "Capítulo 2",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Vanidad", "Corrupción moral", "Arte y belleza", "Decadentismo", "Hipocresía social"],
      },
    },
  },
  {
    id: "peru",
    name: "Perú",
    flag: "🇵🇪",
    capital: "Lima",
    population: "33.4 millones",
    language: "Español",
    currency: "Sol peruano (S/)",
    founded: "1821",
    writer: {
      name: "Mario Vargas Llosa",
      profession: "Novelista y ensayista",
      quote: "La literatura es una representación falaz de la vida, pero nos ayuda a entenderla mejor.",
      period: "1936-presente",
      photo: "/vargas-llosa-portrait.png",
      masterwork: {
        title: "La ciudad y los perros",
        year: "1963",
        genre: "Novela",
        summary:
          "La ciudad y los perros es la primera novela de Vargas Llosa y una de las obras fundacionales del boom latinoamericano. Ambientada en el Colegio Militar Leoncio Prado de Lima, la novela retrata la violencia, la corrupción y los códigos de honor en una institución que funciona como microcosmos de la sociedad peruana. A través de técnicas narrativas innovadoras como el monólogo interior y los saltos temporales, Vargas Llosa presenta la historia de un grupo de cadetes y cómo un robo y un asesinato revelan las tensiones sociales, raciales y de clase que dividen al país. Los personajes principales - el Jaguar, Alberto, Ricardo Arana y el Boa - representan diferentes estratos sociales y formas de enfrentar la adversidad. La novela es una crítica feroz del militarismo y del machismo, así como una exploración de cómo las instituciones pueden corromper a los individuos. El estilo narrativo complejo y la estructura fragmentada de la obra influyeron profundamente en la narrativa latinoamericana posterior.",
        extract:
          "\"Cuatro —dijo el Jaguar. Los dados se inmovilizaron: dos y dos. Alberto sintió que lo invadía una alegría feroz. —Mala suerte —murmuró el Jaguar, alcanzándole los dados—. Te toca. Alberto los hizo rodar: cuatro y tres. —Siete —gritó—. Gané. —Espera —dijo el Jaguar—. Todavía no termina la partida. Alberto recogió los dados. Los agitó largamente antes de arrojarlos. Fueron a chocar contra el muro: seis y seis. —Doce —dijo Alberto—. Gané otra vez. —Sí —dijo el Jaguar—. Ganaste. Su voz era tranquila, pero Alberto advirtió que tenía los puños cerrados. —¿Jugamos otra? —preguntó Alberto. —No. Ya es tarde. Tengo que hacer algo.\"",
        extractSource: "Capítulo 3",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Violencia institucional", "Clases sociales", "Machismo", "Corrupción", "Adolescencia"],
      },
    },
  },
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    capital: "Nueva Delhi",
    population: "1.4 mil millones",
    language: "Hindi",
    currency: "Rupia india (₹)",
    founded: "1947",
    writer: {
      name: "Rabindranath Tagore",
      profession: "Poeta, filósofo y educador",
      quote: "No llores porque ya se terminó, sonríe porque sucedió.",
      period: "1861-1941",
      photo: "/tagore-sketch.png",
      masterwork: {
        title: "Gitanjali",
        year: "1910",
        genre: "Poesía espiritual",
        summary:
          "Gitanjali (Ofrenda lírica) es una colección de poemas espirituales que le valió a Tagore el Premio Nobel de Literatura en 1913, convirtiéndolo en el primer no europeo en recibir este honor. Los poemas, originalmente escritos en bengalí y luego traducidos al inglés por el propio autor, expresan una profunda devoción espiritual y una búsqueda mística de lo divino. Tagore combina elementos de la tradición hindú con una sensibilidad moderna, creando versos que trascienden las barreras culturales y religiosas. Los poemas abordan temas como la relación entre el alma individual y el cosmos, la naturaleza de Dios, la muerte, el amor y la búsqueda de la verdad. El estilo de Tagore es simple pero profundo, utilizando imágenes de la naturaleza y la vida cotidiana para expresar verdades espirituales universales. La obra refleja la filosofía del autor sobre la unidad de todas las religiones y su visión de un mundo sin fronteras culturales o nacionales.",
        extract:
          "\"Tú me has hecho infinito, tal es tu placer. Este frágil vaso tuyo lo vacías una y otra vez, y lo llenas siempre de vida fresca. Esta pequeña flauta de caña la has llevado por colinas y valles, y has soplado a través de ella melodías eternamente nuevas. En el toque inmortal de tus manos mi pequeño corazón pierde sus límites en alegría y da nacimiento a expresiones inefables. Tus dones infinitos vienen a mí sólo en estas muy pequeñas manos mías. Pasan las edades, y aún viertes, y aún hay lugar para llenar. Cuando quieres que cante, mi corazón llora: 'Ay, maestro, no sé cantar.' Tú nunca me preguntas por mis méritos, sino que me llenas de música.\"",
        extractSource: "Poema 1",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Espiritualidad", "Misticismo", "Unidad divina", "Naturaleza", "Universalismo"],
      },
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
      quote: "El espíritu más fuerte y más libre es el que nunca se conforma.",
      period: "1828-1906",
      photo: "/ibsen-photo.png",
      masterwork: {
        title: "Casa de muñecas",
        year: "1879",
        genre: "Drama",
        summary:
          "Casa de muñecas es una obra revolucionaria que desafió las convenciones sociales de la época victoriana y se convirtió en un manifiesto feminista avant la lettre. La obra narra la historia de Nora Helmer, una mujer que aparentemente vive una vida perfecta como esposa y madre, pero que gradualmente descubre que ha sido tratada como una muñeca tanto por su padre como por su esposo Torvald. Cuando un secreto del pasado amenaza con destruir su matrimonio, Nora debe enfrentar la realidad de su situación y tomar una decisión que escandalizó a las audiencias de la época: abandonar a su familia para encontrar su propia identidad. Ibsen utiliza el realismo psicológico para explorar temas como la emancipación femenina, la hipocresía de la moral burguesa, el matrimonio como institución opresiva y la búsqueda de la autenticidad personal. La obra termina con el famoso portazo de Nora, un sonido que simbolizó el despertar de la conciencia femenina y que resonó en teatros de todo el mundo.",
        extract:
          "\"NORA: Escúchame, Torvald. Cuando una mujer abandona la casa de su marido, como yo hago ahora, he oído decir que, según la ley, él queda libre de toda obligación hacia ella. En todo caso, yo te libero de toda obligación. No debes sentirte ligado a mí de ningún modo, como yo no me sentiré ligada a ti. Debe haber completa libertad por ambas partes. Mira, aquí tienes tu anillo. Dame el mío. HELMER: ¡También eso! NORA: También eso. HELMER: Aquí lo tienes. NORA: Bien. Ahora todo ha terminado. Pongo las llaves aquí. Las criadas saben todo lo que se refiere a la casa, mejor que yo. Mañana, después de que me haya ido, Kristine vendrá a recoger las cosas que traje de casa de mi padre. Quiero que me las envíen.\"",
        extractSource: "Acto III",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Emancipación femenina", "Matrimonio", "Identidad", "Hipocresía social", "Autenticidad"],
      },
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
      quote: "Hay algo en el trabajo que nos ennoblece y nos hace mejores.",
      period: "1858-1940",
      photo: "/lagerlof-sketch.png",
      masterwork: {
        title: "El maravilloso viaje de Nils Holgersson",
        year: "1906-1907",
        genre: "Literatura infantil/Fantasía",
        summary:
          "El maravilloso viaje de Nils Holgersson es una obra única que combina la literatura infantil con la geografía, la historia y el folclore sueco. La historia narra las aventuras de Nils, un niño travieso que es transformado en un duende por un gnomo como castigo por su mal comportamiento. Reducido a un tamaño diminuto, Nils viaja por toda Suecia montado en el ganso doméstico Morten, quien se ha unido a una bandada de gansos salvajes. Durante su viaje, Nils aprende sobre la geografía, la historia, las tradiciones y la naturaleza de su país, mientras gradualmente desarrolla empatía, responsabilidad y respeto por los demás seres vivos. Lagerlöf, quien fue la primera mujer en ganar el Premio Nobel de Literatura, creó esta obra como un libro de texto para enseñar geografía sueca a los niños, pero logró mucho más: una obra maestra que combina educación con entretenimiento, realismo con fantasía, y que transmite valores universales sobre el crecimiento personal y el respeto por la naturaleza.",
        extract:
          "\"Era un domingo por la mañana a principios de primavera, y Nils Holgersson estaba sentado en el borde de la mesa de la cocina, balanceando las piernas. Sus padres habían ido a la iglesia, y él se había quedado en casa porque no quería ir. 'Ahora tendré paz para leer', pensó, y tomó el libro de sermones. Pero no había leído ni una página cuando se sintió terriblemente somnoliento. El libro se le resbaló de las manos, su cabeza se inclinó hacia atrás y se quedó dormido. No sabía cuánto tiempo había dormido, pero se despertó al oír un ligero ruido detrás de él. En el alféizar de la ventana había un pequeño espejo, y en él vio reflejado que el baúl de su madre estaba abierto. Su madre había sacado sus mejores vestidos y los había extendido sobre las sillas para airearlos antes de guardarlos.\"",
        extractSource: "Capítulo 1",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Crecimiento personal", "Naturaleza", "Geografía", "Folclore", "Responsabilidad"],
      },
    },
  },
  {
    id: "israel",
    name: "Israel",
    flag: "🇮🇱",
    capital: "Jerusalén",
    population: "9.5 millones",
    language: "Hebreo",
    currency: "Nuevo shéquel (₪)",
    founded: "1948",
    writer: {
      name: "Amos Oz",
      profession: "Novelista y ensayista",
      quote: "La literatura puede enseñarnos a entender el dolor de otras personas.",
      period: "1939-2018",
      photo: "/amos-oz-photo.png",
      masterwork: {
        title: "Una historia de amor y oscuridad",
        year: "2002",
        genre: "Autobiografía novelada",
        summary:
          "Una historia de amor y oscuridad es una obra autobiográfica que narra la infancia y juventud de Amos Oz en el Jerusalén de los años 40 y 50, durante los primeros años del Estado de Israel. La obra combina memoria personal con historia colectiva, explorando la compleja relación entre el individuo y la nación en formación. Oz retrata con sensibilidad y honestidad la figura de su madre, Fania, una mujer culta y melancólica que se suicidó cuando él tenía 12 años, y la de su padre, un erudito que trabajaba como bibliotecario. A través de episodios familiares y sociales, el autor examina temas como la inmigración, la identidad judía, el sionismo, la pérdida de la inocencia y la construcción de una nueva sociedad. La prosa de Oz es lírica y reflexiva, combinando la intimidad de la memoria personal con la amplitud de la experiencia histórica. La obra es tanto un retrato de una familia como un fresco de una época crucial en la historia de Israel y del pueblo judío.",
        extract:
          "\"Mi madre tenía muchos libros. Libros en hebreo, en yiddish, en ruso, en alemán y en polaco. Algunos los había traído de Europa, otros los había comprado aquí, en Jerusalén. Los libros estaban por todas partes: en estantes, en pilas sobre las mesas, debajo de las camas, en cajas de cartón. Mi madre leía todo el tiempo. Leía mientras cocinaba, mientras planchaba, mientras esperaba el autobús. Leía en la cama antes de dormir y a veces se quedaba dormida con el libro abierto sobre el pecho. Yo pensaba que los libros eran como personas para ella, que tenía conversaciones silenciosas con ellos. A veces la veía sonreír mientras leía, o fruncir el ceño, o suspirar profundamente. Era como si los personajes de los libros fueran sus amigos más íntimos, más reales para ella que las personas de carne y hueso que la rodeaban.\"",
        extractSource: "Capítulo 5",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Memoria", "Identidad judía", "Sionismo", "Familia", "Historia de Israel"],
      },
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
      profession: "Diarista",
      quote: "A pesar de todo, creo que la gente es realmente buena de corazón.",
      period: "1929-1945",
      photo: "/anne-frank-sketch.png",
      masterwork: {
        title: "El Diario de Ana Frank",
        year: "1947",
        genre: "Diario/Autobiografía",
        summary:
          "El Diario de Ana Frank es uno de los testimonios más conmovedores y universales sobre el Holocausto y la experiencia humana durante la Segunda Guerra Mundial. Escrito por una adolescente judía mientras se escondía con su familia en Ámsterdam durante la ocupación nazi, el diario abarca desde junio de 1942 hasta agosto de 1944. Ana Frank documenta no solo los horrores de la guerra y la persecución, sino también las experiencias típicas de la adolescencia: sus sueños, miedos, conflictos familiares, despertar sexual y reflexiones sobre la naturaleza humana. A través de sus cartas dirigidas a 'Kitty', Ana muestra una madurez extraordinaria y una capacidad notable para mantener la esperanza y la fe en la humanidad a pesar de las circunstancias terribles. El diario se ha convertido en un símbolo universal de la resistencia del espíritu humano frente a la opresión y ha educado a millones de personas sobre los horrores del Holocausto. La voz de Ana, interrumpida trágicamente cuando fue deportada a Bergen-Belsen donde murió, sigue resonando como un llamado a la tolerancia y los derechos humanos.",
        extract:
          "\"A pesar de todo, sigo creyendo que la gente es realmente buena de corazón. Simplemente no puedo construir mis esperanzas sobre una base de confusión, miseria y muerte. Veo el mundo transformándose gradualmente en un desierto, oigo el rugido que se acerca y que nos destruirá a nosotros también, puedo sentir el sufrimiento de millones de personas, y sin embargo, cuando miro hacia el cielo, pienso que todo cambiará para mejor, que esta crueldad también terminará, que la paz y la tranquilidad volverán de nuevo. Mientras tanto, debo mantener mis ideales en alto, porque quizás en los tiempos que vendrán, aún sea posible llevarlos a cabo. Tuya, Ana.\"",
        extractSource: "15 de julio de 1944",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Holocausto", "Adolescencia", "Esperanza", "Derechos humanos", "Resistencia"],
      },
    },
  },
  {
    id: "south_korea",
    name: "Corea del Sur",
    flag: "🇰🇷",
    capital: "Seúl",
    population: "51.8 millones",
    language: "Coreano",
    currency: "Won surcoreano (₩)",
    founded: "1948",
    writer: {
      name: "Han Kang",
      profession: "Novelista",
      quote: "La escritura es una forma de resistencia contra el olvido.",
      period: "1970-presente",
      photo: "/han-kang-portrait.png",
      masterwork: {
        title: "La vegetariana",
        year: "2007",
        genre: "Novela",
        summary:
          "La vegetariana es una novela perturbadora y poética que explora la opresión femenina en la sociedad patriarcal coreana a través de la historia de Yeong-hye, una mujer que decide dejar de comer carne. Esta decisión aparentemente simple desencadena una serie de eventos violentos que revelan la brutalidad subyacente en las relaciones familiares y sociales. La novela está dividida en tres partes, cada una narrada desde una perspectiva diferente: el esposo abusivo, el cuñado obsesionado y la hermana. Han Kang utiliza un estilo onírico y simbólico para explorar temas como la autonomía corporal, la violencia doméstica, la enfermedad mental y la resistencia femenina. La transformación de Yeong-hye de mujer sumisa a ser que rechaza las normas sociales es tanto liberadora como trágica. La obra, que le valió a Han Kang el Premio Man Booker Internacional, es una crítica feroz del machismo y una meditación sobre los límites entre la cordura y la locura, la civilización y la naturaleza.",
        extract:
          "\"Antes de que mi esposa se volviera vegetariana, nunca pensé que fuera particularmente notable en ningún sentido. Nunca me molestó, nunca me causó problemas. Si algo me había atraído de ella, era su carácter silencioso y sumiso, y el hecho de que comía bien, sin hacer aspavientos. Para un hombre como yo, que no tenía tiempo para las complicaciones románticas, era la esposa perfecta. Pero entonces, un día, se negó a cocinar carne. Y no solo eso: se negó a comerla también. Dijo que había tenido un sueño. Un sueño sangriento que la había cambiado para siempre. Yo no entendía. ¿Cómo podía un simple sueño cambiar tanto a una persona? Pero pronto descubriría que mi esposa había estado cambiando durante mucho tiempo, en silencio, en secreto, de maneras que yo nunca había notado.\"",
        extractSource: "Parte I: La vegetariana",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Opresión femenina", "Patriarcado", "Autonomía corporal", "Violencia doméstica", "Resistencia"],
      },
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
      profession: "Novelista",
      quote: "El verdadero arte surge de la tensión entre tradición y modernidad.",
      period: "1952-presente",
      photo: "/orhan-pamuk-photo.png",
      masterwork: {
        title: "Mi nombre es Rojo",
        year: "1998",
        genre: "Novela histórica",
        summary:
          "Mi nombre es Rojo es una novela compleja ambientada en el Estambul del siglo XVI que combina misterio, historia del arte y reflexión filosófica. La historia gira en torno al asesinato de un miniaturista que trabajaba en un libro secreto encargado por el sultán, un proyecto que mezcla el arte islámico tradicional con técnicas occidentales. Pamuk utiliza múltiples narradores, incluyendo personajes humanos, colores, objetos e incluso la muerte misma, para explorar el choque entre Oriente y Occidente, tradición y modernidad, arte religioso y secular. La novela examina cómo el arte refleja y moldea la identidad cultural, y cómo los cambios artísticos pueden amenazar las estructuras sociales establecidas. A través de la investigación del crimen, Pamuk presenta un retrato vívido del Imperio Otomano en un momento de transición, explorando temas como la fe, el amor, la creatividad y el poder. La obra es tanto una novela policíaca como una meditación profunda sobre la naturaleza del arte y la cultura.",
        extract:
          "\"Soy un color. Soy rojo. Puedes verme en la alfombra sobre la que caminas, en la rosa que hueles, en las mejillas de la mujer que amas. Estoy en la sangre que corre por tus venas y en el fuego que calienta tu hogar. Soy el color de la pasión y de la guerra, del amor y de la muerte. Los miniaturistas me conocen bien; me han usado durante siglos para dar vida a sus obras. Pero ahora hay quienes dicen que debo cambiar, que debo parecerme más a los colores que usan los pintores francos. Dicen que debo tener sombras y profundidad, que debo imitar la realidad en lugar de expresar la verdad divina. Pero yo soy rojo, y mi naturaleza es ser puro, intenso, eterno. No puedo cambiar sin dejar de ser yo mismo.\"",
        extractSource: "Capítulo 'Soy rojo'",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Arte islámico", "Oriente vs Occidente", "Tradición", "Imperio Otomano", "Identidad cultural"],
      },
    },
  },
  {
    id: "brazil",
    name: "Brasil",
    flag: "🇧🇷",
    capital: "Brasilia",
    population: "215.3 millones",
    language: "Portugués",
    currency: "Real brasileño (R$)",
    founded: "1822",
    writer: {
      name: "Paulo Coelho",
      profession: "Novelista",
      quote: "Cuando quieres algo, todo el universo conspira para ayudarte a conseguirlo.",
      period: "1947-presente",
      photo: "/coelho-sketch.png",
      masterwork: {
        title: "El Alquimista",
        year: "1988",
        genre: "Novela filosófica",
        summary:
          "El Alquimista es una fábula moderna sobre la búsqueda de los sueños y el descubrimiento del propósito de vida. La historia sigue a Santiago, un joven pastor andaluz que emprende un viaje desde España hasta las pirámides de Egipto en busca de un tesoro, guiado por sueños recurrentes. Durante su travesía, Santiago encuentra diversos personajes que le enseñan lecciones sobre la vida, el amor y la realización personal: un rey misterioso, un comerciante de cristales, un alquimista y Fátima, una mujer del desierto de quien se enamora. Coelho utiliza elementos del sufismo, la alquimia y la filosofía universal para crear una narrativa que trasciende las barreras culturales y religiosas. La novela explora conceptos como la 'Leyenda Personal' (el propósito único de cada individuo), las señales del universo, y la idea de que el verdadero tesoro se encuentra en el viaje mismo, no en el destino. Con un estilo simple pero profundo, la obra se ha convertido en un fenómeno mundial, traducida a más de 80 idiomas y vendiendo millones de copias.",
        extract:
          "\"Cuando quieres realmente alguna cosa, todo el Universo conspira para ayudarte a conseguirla —dijo el viejo rey—. Eso es lo que se llama el principio favorable, la suerte del principiante. Porque la vida quiere que vivas tu Leyenda Personal. El muchacho no sabía lo que era una Leyenda Personal. —Es aquello que siempre deseaste hacer. Todas las personas, al comienzo de la juventud, saben cuál es su Leyenda Personal. En esa época de la vida, todo es claro, todo es posible, y no tienen miedo de soñar y de desear todo aquello que les gustaría ver hecho en sus vidas. No obstante, a medida que el tiempo va pasando, una misteriosa fuerza trata de demostrar que es imposible realizar la Leyenda Personal.\"",
        extractSource: "Capítulo 2",
        image: "/placeholder.svg?height=400&width=600",
        themes: ["Búsqueda personal", "Destino", "Sueños", "Espiritualidad", "Autoconocimiento"],
      },
    },
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    capital: "Pekín",
    population: "1.4 mil millones",
    language: "Chino mandarín",
    currency: "Yuan chino (¥)",
    founded: "1949",
    writer: {
      name: "Confucio",
      profession: "Filósofo y educador",
      quote: "El hombre que mueve montañas comienza cargando pequeñas piedras.",
      period: "551-479 a.C.",
      photo: "/confucio-sketch.png",
      masterwork: {
        title: "Analectas",
        year: "sig\
