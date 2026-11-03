import { TheorySection } from './types';

export const teoriaData: TheorySection[] = [
  {
    id: 'literatura-popular',
    number: '1',
    titleEs: 'La literatura popular',
    titleHy: 'Ժողովրդական գրականություն',
    definition: {
      es: 'La literatura popular es el conjunto de obras literarias que pertenecen a la tradición del pueblo y que, generalmente, se transmiten oralmente de generación en generación.',
      hy: 'Ժողովրդական գրականությունը ժողովրդի ստեղծած և պահպանած գրականությունն է, որը հիմնականում փոխանցվում է բանավոր՝ սերնդեսերունդ։',
    },
    characteristics: [
      { es: 'Es anónima.', hy: 'Հեղինակն անհայտ է։' },
      { es: 'Se transmite oralmente.', hy: 'Փոխանցվում է բանավոր։' },
      { es: 'Pasa de generación en generación.', hy: 'Անցնում է սերնդեսերունդ։' },
      { es: 'Puede sufrir modificaciones.', hy: 'Ժամանակի ընթացքում կարող է փոփոխվել։' },
      { es: 'Suele ser breve.', hy: 'Սովորաբար կարճ է։' },
      { es: 'Utiliza un lenguaje sencillo.', hy: 'Օգտագործում է պարզ լեզու։' },
      { es: 'Puede escribirse en prosa o en verso.', hy: 'Կարող է գրվել արձակ կամ չափածո։' },
      { es: 'A veces va acompañada de música.', hy: 'Երբեմն ուղեկցվում է երաժշտությամբ։' },
    ],
    examples: [
      {
        es: 'Una abuela cuenta una historia a sus nietos. Los nietos crecen y cuentan la misma historia, pero cambian algunos detalles.',
        hy: 'Տատիկը պատմություն է պատմում թոռներին։ Տարիներ անց թոռները պատմում են նույն պատմությունը, սակայն որոշ մանրամասներ փոխում են։',
        noteEs: 'Aquí se ven tres rasgos esenciales: transmisión oral, anonimato y modificaciones.',
        noteHy: 'Այստեղ տեսնում ենք երեք կարևոր հատկանիշ՝ բանավոր փոխանցում (transmisión oral), անհայտ հեղինակ (anonimato) և փոփոխություններ (modificaciones)։',
      },
    ],
    extraContent: [
      {
        titleEs: 'Tipos de literatura popular',
        titleHy: 'Ժողովրդական գրականության տեսակները',
        textEs: 'Los tipos principales son el romance, la leyenda, el mito y el cuento.',
        textHy: 'Հիմնական տեսակներն են՝ ռոմանսը (el romance), լեգենդը (la leyenda), առասպելը (el mito) և պատմվածքը/հեքիաթը (el cuento)։',
      },
      {
        titleEs: 'El romance',
        titleHy: 'Ռոմանս',
        textEs: 'Es una composición poética narrativa formada por una serie indefinida de versos octosílabos. Los versos pares tienen rima asonante y los impares quedan libres. Clave: 8 sílabas + rima asonante en versos pares + versos impares libres.',
        textHy: 'Սա պատմողական բանաստեղծություն է՝ կազմված անսահմանափակ թվով ութվանկ տողերից։ Զույգ տողերում կա ձայնավորային հանգ (rima asonante), իսկ կենտ տողերը չեն հանգավորվում (versos libres)։ Հիշել՝ 8 sílabas + rima asonante en versos pares + versos impares libres:',
      },
      {
        titleEs: 'La leyenda',
        titleHy: 'Լեգենդ, ավանդազրույց',
        textEs: 'Es una narración tradicional que parte de personajes, lugares o acontecimientos reales y añade elementos fantásticos o sobrenaturales. Ejemplo: En un pueblo se cuenta que por las noches aparece un fantasma en un castillo antiguo.',
        textHy: 'Պատմություն է, որը կապված է իրական մարդկանց, վայրերի կամ իրադարձությունների հետ, սակայն պարունակում է երևակայական կամ գերբնական տարրեր։ Օրինակ՝ գյուղում պատմում են, որ գիշերները հին դղյակում ուրվական է հայտնվում։',
      },
      {
        titleEs: 'El mito',
        titleHy: 'Առասպել',
        textEs: 'Es una narración tradicional protagonizada por dioses, héroes o seres sobrenaturales que intenta explicar el origen del mundo, los fenómenos naturales u otros aspectos fundamentales de la existencia. Ejemplo: Un dios provoca los truenos cuando está enfadado.',
        textHy: 'Ավանդական պատմություն է աստվածների, հերոսների կամ գերբնական էակների մասին, որը փորձում է բացատրել աշխարհի, բնության երևույթների կամ կյանքի տարբեր երևույթների ծագումը։ Օրինակ՝ աստված կայծակ է առաջացնում, երբ բարկացած է։',
      },
      {
        titleEs: 'El cuento',
        titleHy: 'Պատմվածք, հեքիաթ',
        textEs: 'Es una narración breve, normalmente en prosa, con pocos personajes y un argumento sencillo. Puede ser popular o culto.',
        textHy: 'Կարճ պատմողական ստեղծագործություն է, հիմնականում արձակ, քիչ գործող անձանցով և պարզ սյուժեով։ Կարող է լինել ժողովրդական կամ հեղինակային։',
      },
      {
        titleEs: 'Detalles del cuaderno: Estribillos y recursos',
        titleHy: 'Տետրի հատուկ մանրամասներ. Կրկներգեր և ուշադրություն գրավող հնարքներ',
        textEs: 'En la literatura popular encontramos también estribillos (versos que se repiten al final de cada estrofa) y llamadas de atención al receptor ("Oíd bien", "Ahora veréis"). A menudo va acompañada de música y ritmo.',
        textHy: 'Ժողովրդական գրականության մեջ հանդիպում են նաև estribillos (կրկներգեր) և llamadas de atención al receptor («Oíd bien», «Ahora veréis»), ինչպես նաև երաժշտական ուղեկցում։',
      },
    ],
    table: {
      headers: ['Tipo de obra / Գրական տեսակ', 'Clave para reconocerlo / Ճանաչելու բանալին'],
      rows: [
        ['Romance (Ռոմանս)', 'Versos octosílabos (8 vank) y rima asonante en los pares'],
        ['Leyenda (Լեգենդ)', 'Realidad + fantasía (Իրականություն + երևակայություն)'],
        ['Mito (Առասպել)', 'Dioses y explicación de orígenes o fenómenos (Աստվածներ և ծագման բացատրություն)'],
        ['Cuento (Պատմվածք / Հեքիաթ)', 'Narración breve, pocos personajes (Կարճ պատմություն, քիչ հերոսներ)'],
      ],
    },
    examTip: {
      es: '¿Por qué una leyenda tradicional suele pertenecer a la literatura popular? Respuesta de examen: Porque generalmente es anónima, se transmite oralmente y puede presentar diferentes versiones.',
      hy: 'Ինչո՞ւ է ավանդական լեգենդը պատկանում ժողովրդական գրականությանը։ Քննության պատասխան՝ Քանի որ այն հիմնականում անհայտ հեղինակ ունի (anónima), փոխանցվում է բանավոր (oralmente) և կարող է ունենալ տարբեր տարբերակներ (diferentes versiones)։',
    },
  },
  {
    id: 'literatura-culta',
    number: '2',
    titleEs: 'La literatura culta',
    titleHy: 'Հեղինակային գրականություն',
    definition: {
      es: 'La literatura culta está formada por obras escritas por autores conocidos que elaboran cuidadosamente su lenguaje y sus textos.',
      hy: 'Հեղինակային գրականությունը ստեղծվում է հայտնի հեղինակի կողմից։ Հեղինակը գիտակցաբար ընտրում է բառերը, կառուցվածքը և արտահայտչական միջոցները։',
    },
    characteristics: [
      { es: 'Tiene un autor conocido.', hy: 'Ունի հայտնի հեղինակ։' },
      { es: 'Se transmite principalmente por escrito.', hy: 'Հիմնականում տարածվում է գրավոր։' },
      { es: 'Su texto es relativamente estable.', hy: 'Տեքստը հիմնականում պահպանվում է անփոփոխ։' },
      { es: 'Utiliza un lenguaje elaborado.', hy: 'Օգտագործում է մշակված լեզու։' },
      { es: 'Puede estar escrita en prosa o en verso.', hy: 'Կարող է լինել արձակ կամ չափածո։' },
    ],
    examples: [
      {
        es: 'Una escritora publica una novela con su nombre. Los lectores conocen su autoría y el texto no cambia cada vez que alguien lo cuenta.',
        hy: 'Գրողը հրապարակում է վեպ իր անունով։ Ընթերցողները գիտեն հեղինակին, և ստեղծագործությունը չի փոխվում ամեն անգամ այն ընթերցելիս։',
      },
    ],
    table: {
      headers: ['Literatura popular (Ժողովրդական)', 'Literatura culta (Հեղինակային)'],
      rows: [
        ['Autor generalmente desconocido (anónima)', 'Autor conocido identificado'],
        ['Transmisión oral tradicional', 'Transmisión principalmente escrita'],
        ['Puede cambiar y tener variantes', 'Texto normalmente fijo y estable'],
        ['Lenguaje sencillo y directo', 'Lenguaje elaborado y cuidado'],
        ['Creación y conservación colectivas', 'Creación individual identificable'],
      ],
    },
    examTip: {
      es: 'Diferencia clave en examen: La literatura popular pertenece al pueblo, es colectiva y anónima; la culta tiene autor individual con firma y texto fijo en soporte escrito.',
      hy: 'Քննության գլխավոր տարբերությունը. Ժողովրդական գրականությունը հավաքական է, անհայտ հեղինակով և բանավոր. իսկ հեղինակայինը՝ անհատ գրողի կողմից ստեղծված և գրավոր ամրագրված։',
    },
  },
  {
    id: 'lenguaje-literario',
    number: '3',
    titleEs: 'El lenguaje literario',
    titleHy: 'Գրական լեզու',
    definition: {
      es: 'El lenguaje literario, también llamado lenguaje poético, es una forma especial de utilizar las palabras con una intención estética y expresiva, para transmitir emociones, ideas o sensaciones.',
      hy: 'Գրական լեզուն բառերի հատուկ կիրառություն է, որի նպատակը ոչ միայն տեղեկություն հաղորդելն է, այլև զգացմունք, պատկեր, տրամադրություն և գեղագիտական ազդեցություն ստեղծելը։',
    },
    table: {
      headers: ['Lenguaje cotidiano (Սովորական խոսք)', 'Lenguaje literario (Գրական պատկերավոր խոսք)'],
      rows: [
        ['El sol aparece.', 'El sol despierta sobre las montañas.'],
        ['Hace mucho frío.', 'El frío muerde mis manos.'],
        ['El niño corre rápido.', 'El niño corre como el viento.'],
        ['Está lloviendo.', 'El cielo llora sobre la ciudad.'],
      ],
    },
    characteristics: [
      {
        es: 'Utiliza figuras literarias, ritmo, rima, musicalidad y un vocabulario expresivo.',
        hy: 'Օգտագործում է գրական հնարքներ, ռիթմ, հանգ, երաժշտականություն և պատկերավոր բառապաշար։',
      },
      {
        es: 'Da importancia tanto al mensaje como a la manera de transmitirlo (función poética).',
        hy: 'Կարևոր է ոչ միայն ասելիքը (իմաստը), այլև այն ներկայացնելու գեղեցիկ ձևը։',
      },
    ],
    extraContent: [
      {
        titleEs: 'Verso y prosa — Չափածո և արձակ',
        titleHy: 'Տարբերությունը չափածոյի և արձակի միջև',
        textEs: 'Verso: Se organiza en versos (líneas) y puede presentar ritmo, métrica y rima. Ejemplo: "La luna mira el camino, / el viento comienza a cantar."\n\nProsa: Se organiza en oraciones y párrafos y no sigue obligatoriamente una métrica ni una rima. Ejemplo: "La luna iluminaba el camino. El viento movía las hojas de los árboles."\n\nImportante: Un texto en prosa también puede contener metáforas, personificaciones y otras figuras literarias.',
        textHy: 'Չափածո (Verso)՝ բաժանվում է բանաստեղծական տողերի, ունի չափ, ռիթմ և հանգ։ Օրինակ՝ «La luna mira el camino, / el viento comienza a cantar»:\n\nԱրձակ (Prosa)՝ կազմվում է նախադասություններից և պարբերություններից, չունի պարտադիր բանաստեղծական չափ կամ հանգ։ Օրինակ՝ «La luna iluminaba el camino. El viento movía las hojas de los árboles»:\n\nՈւշադրություն՝ արձակ տեքստը նույնպես կարող է պարունակել փոխաբերություններ, անձնավորումներ և այլ գրական հնարքներ։',
      },
      {
        titleEs: 'Tipos de rima y verso libre',
        titleHy: 'Հանգի տեսակները և ազատ տողը',
        textEs: '• Rima asonante: Coinciden solamente las vocales a partir de la última vocal acentuada. Ejemplo: casa – rama (vocales a-a).\n• Rima consonante: Coinciden vocales y consonantes a partir de la última vocal acentuada. Ejemplo: canción – corazón (-ón).\n• Verso libre: No está sometido a una medida métrica ni a un esquema de rima fijos.',
        textHy: '• Ձայնավորային հանգ (Rima asonante)՝ համընկնում են միայն ձայնավորները վերջին շեշտված ձայնավորից սկսած (casa - rama -> a-a):\n• Լրիվ հանգ (Rima consonante)՝ համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները վերջին շեշտված վանկից սկսած (canción - corazón -> -ón):\n• Ազատ չափածո տող (Verso libre)՝ չունի ֆիքսված վանկերի քանակ կամ հանգի կառուցվածք։',
      },
    ],
  },
  {
    id: 'figuras-literarias-intro',
    number: '4',
    titleEs: 'Las figuras literarias — 3 niveles',
    titleHy: 'Գրական պատկերավորման միջոցներ — 3 մակարդակներ',
    definition: {
      es: 'Las figuras literarias son recursos expresivos que los escritores utilizan para embellecer el lenguaje, crear efectos sonoros y transmitir emociones o imágenes.',
      hy: 'Գրական պատկերավորման միջոցները հնարքներ են, որոնց միջոցով հեղինակը խոսքը դարձնում է ավելի արտահայտիչ, հնչեղ և պատկերավոր։ Տետրում դրանք բաժանված են երեք մակարդակի։',
    },
    table: {
      headers: ['Nivel (Մակարդակ)', 'Objetivo / Ինչի՞ հետ են խաղում'],
      rows: [
        ['Nivel fónico (Հնչյունային)', 'Jugar con los sonidos — Խաղալ հնչյունների հետ (հնչողականություն)'],
        ['Nivel morfosintáctico (Քերականական և շարահյուսական)', 'Repetir, ordenar o modificar estructuras — Կրկնել, դասավորել կամ փոփոխել բառերի ու նախադասությունների կառուցվածքը'],
        ['Nivel semántico (Իմաստային)', 'Cambiar, relacionar o intensificar significados — Փոխել, կապել կամ ուժեղացնել բառերի իմաստները'],
      ],
    },
  },
  {
    id: 'nivel-fonico',
    number: '5',
    titleEs: 'Nivel fónico — Հնչյունային հնարքներ',
    titleHy: 'Հնչյունային մակարդակի գրական հնարքները',
    definition: {
      es: 'Recursos basados en el sonido, la acústica y el ritmo auditivo de las palabras.',
      hy: 'Հնարքներ, որոնք հիմնված են հնչյունների, բառերի երաժշտականության և լսողական տպավորության վրա։',
    },
    subsections: [
      {
        id: 'aliteracion',
        code: '5.1',
        titleEs: 'Aliteración',
        titleHy: 'Հնչյունների կրկնություն',
        level: 'fónico',
        definition: {
          es: 'Repetición de uno o varios sonidos semejantes en palabras cercanas para producir un efecto sonoro.',
          hy: 'Նույն կամ նման հնչյունների կրկնությունն է իրար մոտ գտնվող բառերում՝ հնչողություն ստեղծելու նպատակով։',
        },
        examples: [
          {
            es: 'Susana susurra suavemente.',
            hy: 'Սուսանան նրբորեն շշնջում է։',
            note: 'Se repite el sonido "s" para imitar el susurro. (Կրկնվում է «s» հնչյունը՝ շշուկի նմանությամբ)։',
          },
          {
            es: 'Suave sonido de sus pasos silenciosos.',
            hy: 'Նրա լուռ քայլերի մեղմ ձայնը։',
            note: 'Aliteración del fonema "s".',
          },
          {
            es: 'Una rana verde saltaba sobre una rama.',
            hy: 'Կանաչ գորտը ցատկում էր ճյուղի վրայով։',
            note: 'Repetición de sonidos /r/ y /a/.',
          },
        ],
        howToRecognize: {
          es: 'Escucha qué sonido se repite constantemente.',
          hy: 'Լսի՛ր՝ որ հնչյունն է անընդհատ կրկնվում բառերում։',
        },
      },
      {
        id: 'onomatopeya',
        code: '5.2',
        titleEs: 'Onomatopeya',
        titleHy: 'Ձայնանմանություն',
        level: 'fónico',
        definition: {
          es: 'Uso de palabras que imitan sonidos reales de la naturaleza, animales o cosas.',
          hy: 'Իրական ձայները (բնության, կենդանիների կամ իրերի) նմանակող բառերի օգտագործում։',
        },
        examples: [
          { es: 'Tic-tac — reloj', hy: 'Տիկ-տակ — ժամացույցի ձայն' },
          { es: 'Miau — gato', hy: 'Միաու — կատվի մլավոց' },
          { es: 'Guau — perro', hy: 'Հաֆ-հաֆ — շան հաչոց' },
          { es: '¡Pum! La puerta se cerró.', hy: 'Դմփոց! Դուռը փակվեց (հարվածի ձայն)' },
          { es: 'Quiquiriquí — gallo', hy: 'Ծուղրուղու — աքաղաղի կանչ' },
        ],
        howToRecognize: {
          es: 'Diferencia: En la aliteración se repite un fonema en palabras normales; en la onomatopeya se escribe directamente una palabra que imita el ruido acústico.',
          hy: 'Տարբերությունը. Aliteración-ի դեպքում կրկնվում է հնչյուն սովորական բառերում, իսկ Onomatopeya-ի դեպքում օգտագործվում է ձայնը պատկերող բառ (tic-tac, pum, miau)։',
        },
      },
      {
        id: 'paronomasia',
        code: '5.3',
        titleEs: 'Paronomasia',
        titleHy: 'Նմանահունչ բառերի կիրառություն (հարանունություն)',
        level: 'fónico',
        definition: {
          es: 'Uso próximo de palabras con sonidos parecidos, pero significados diferentes.',
          hy: 'Նման հնչողությամբ, բայց տարբեր իմաստներով բառերի օգտագործում իրար կողքի։',
        },
        examples: [
          {
            es: 'El hombre es un hombre de nombre.',
            hy: 'Մարդը անվանի մարդ է (hombre / nombre)։',
            note: 'Hombre / nombre — հնչողությամբ նման են, բայց իմաստով տարբեր։',
          },
          {
            es: 'Se calzan de espumas por espuelas.',
            hy: 'Փրփուրներ են հագնում խթանների փոխարեն (espumas / espuelas)։',
            note: 'Juego de semejanza fónica entre palabras distintas.',
          },
          {
            es: 'La casa se llena de masa.',
            hy: 'Տունը լցվում է խմորով (casa / masa)։',
            note: 'Palabras fonéticamente muy parecidas.',
          },
        ],
        howToRecognize: {
          es: 'Busca pares de palabras muy parecidas en pronunciación que cambian solo una letra o sílaba.',
          hy: 'Փնտրի՛ր բառեր, որոնք արտասանությամբ գրեթե նույնն են, բայց տարբերվում են ընդամենը մեկ տառով/վանկով։',
        },
      },
      {
        id: 'epanadiplosis',
        code: '5.4',
        titleEs: 'Epanadiplosis',
        titleHy: 'Սկզբի և վերջի կրկնություն',
        level: 'fónico',
        definition: {
          es: 'Repetición de una misma palabra al principio y al final de un mismo verso o enunciado.',
          hy: 'Նույն բառի կրկնությունն է տողի կամ նախադասության սկզբում և վերջում։',
        },
        examples: [
          {
            es: 'Verde que te quiero verde.',
            hy: 'Կանաչ, ես քեզ ուզում եմ կանաչ (Federico García Lorca)։',
            note: 'Սկզբում՝ Verde, վերջում՝ verde։',
          },
          {
            es: 'Libre quiero vivir, libre. / Libre nací y quiero morir libre.',
            hy: 'Ազատ եմ ուզում ապրել, ազատ։ / Ազատ ծնվեցի և ուզում եմ մեռնել ազատ։',
            note: 'Libre ... libre.',
          },
          {
            es: 'Rojo quiero el vestido, rojo.',
            hy: 'Կարմիր եմ ուզում զգեստը, կարմիր։',
            note: 'Rojo ... rojo.',
          },
        ],
        howToRecognize: {
          es: 'Comprueba si la primera palabra del verso es exactamente la misma que la última.',
          hy: 'Ստուգի՛ր՝ արդյոք նախադասության կամ տողի առաջին և վերջին բառերը նույնն են։',
        },
      },
    ],
  },
  {
    id: 'nivel-morfosintactico',
    number: '6',
    titleEs: 'Nivel morfosintáctico — Շարահյուսական հնարքներ',
    titleHy: 'Քերականական և շարահյուսական մակարդակի հնարքներ',
    definition: {
      es: 'Recursos que modifican la estructura de la oración, el orden habitual o la repetición de palabras y nexos.',
      hy: 'Հնարքներ, որոնք փոփոխում են նախադասության կառուցվածքը, բառերի սովորական կարգը կամ շաղկապների կիրառությունը։',
    },
    subsections: [
      {
        id: 'hiperbaton',
        code: '6.1',
        titleEs: 'Hipérbaton',
        titleHy: 'Բառերի սովորական դասավորության փոփոխություն (շրջասություն)',
        level: 'morfosintáctico',
        definition: {
          es: 'Alteración intencionada del orden habitual o lógico de las palabras en una oración.',
          hy: 'Նախադասության բառերի սովորական և քերականական հերթականության միտումնավոր փոփոխություն։',
        },
        examples: [
          {
            es: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.',
            hy: 'Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու (Bécquer)։',
            note: 'Orden normal: Las oscuras golondrinas volverán a colgar sus nidos en tu balcón.',
          },
          {
            es: 'De la montaña las estrellas contemplaba el pastor.',
            hy: 'Սարից աստղերն էր դիտում հովիվը։',
            note: 'Orden normal: El pastor contemplaba las estrellas de la montaña.',
          },
          {
            es: 'A sus amigos una sorpresa preparó Marta.',
            hy: 'Իր ընկերներին մի անակնկալ պատրաստեց Մարթան։',
            note: 'Orden normal: Marta preparó una sorpresa a sus amigos.',
          },
        ],
        howToRecognize: {
          es: 'Intenta reordenar la frase en la estructura sujeto + verbo + complementos. Si suena desordenada al estilo de Bécquer, es hipérbaton.',
          hy: 'Փորձիր նախադասությունը վերադասավորել սովորական կարգով (ենթակա + ստորոգյալ + լրացումներ)։ Եթե կարգը խախտված է, ուրեմն hipérbaton է։',
        },
      },
      {
        id: 'anafora',
        code: '6.2',
        titleEs: 'Anáfora',
        titleHy: 'Սկզբնային կրկնություն (անաֆորա)',
        level: 'morfosintáctico',
        definition: {
          es: 'Repetición de una o varias palabras al comienzo de varios versos o enunciados consecutivos.',
          hy: 'Նույն բառի կամ բառերի կրկնությունն է մի քանի հաջորդական տողերի կամ արտահայտությունների սկզբում։',
        },
        examples: [
          {
            es: 'Quiero reír,\nquiero cantar,\nquiero soñar.',
            hy: 'Ուզում եմ ծիծաղել,\nուզում եմ երգել,\nուզում եմ երազել։',
            note: 'Se repite "quiero" al principio de cada verso.',
          },
          {
            es: 'Temprano sale el sol, temprano canta el gallo.',
            hy: 'Վաղ է ծագում արևը, վաղ է երգում աքաղաղը։',
            note: 'Se repite "temprano".',
          },
          {
            es: 'Miro el río, miro el puente, miro el campo.',
            hy: 'Նայում եմ գետին, նայում եմ կամրջին, նայում եմ դաշտին։',
            note: 'Se repite "miro".',
          },
        ],
        howToRecognize: {
          es: 'Fíjate en la primera palabra de cada línea o miembro de la frase. Si coincide en varias seguidas, es anáfora.',
          hy: 'Նայիր տողերի կամ անդամների առաջին բառին։ Եթե այն նույնությամբ կրկնվում է մի քանի անգամ, ապա anáfora է։',
        },
      },
      {
        id: 'asindeton',
        code: '6.3',
        titleEs: 'Asíndeton',
        titleHy: 'Շաղկապների բացթողում',
        level: 'morfosintáctico',
        definition: {
          es: 'Eliminación intencionada de conjunciones (como "y", "e", "ni") entre palabras o expresiones, dando rapidez y dinamismo.',
          hy: 'Շաղկապների (ինչպես «y», «ni») միտումնավոր բացթողում բառերի կամ նախադասությունների միջև՝ խոսքին արագություն և դինամիկա հաղորդելու համար։',
        },
        examples: [
          {
            es: 'Llegó, miró, venció.',
            hy: 'Եկավ, նայեց, հաղթեց (Veni, vidi, vici)։',
            note: 'Falta la conjunción "y". (Բացակայում է «y» շաղկապը, դրված են միայն ստորակետներ)։',
          },
          {
            es: 'Canta, ríe, corre, salta.',
            hy: 'Երգում է, ծիծաղում է, վազում է, ցատկում է։',
            note: 'Sin conjunciones entre verbos.',
          },
          {
            es: 'Abrió la ventana, miró fuera, respiró.',
            hy: 'Բացեց պատուհանը, նայեց դուրս, շունչ քաշեց։',
            note: 'Sucesión rápida sin nexos copulativos.',
          },
        ],
        howToRecognize: {
          es: 'Solo hay comas, no hay ninguna "y" ni "ni" donde normalmente iría.',
          hy: 'Միայն ստորակետներ են, բացակայում են շաղկապները այնտեղ, որտեղ սովորաբար պետք է լինեին։',
        },
      },
      {
        id: 'polisindeton',
        code: '6.4',
        titleEs: 'Polisíndeton',
        titleHy: 'Շաղկապների կրկնություն',
        level: 'morfosintáctico',
        definition: {
          es: 'Repetición intencionada de conjunciones (habitualmente "y" o "ni") que no serían estrictamente necesarias, para dar lentitud, solemnidad o insistencia.',
          hy: 'Շաղկապների (հիմնականում «y» կամ «ni») միտումնավոր և հաճախակի կրկնություն՝ խոսքին ծանրություն, հանդիսավորություն կամ շեշտադրում հաղորդելու համար։',
        },
        examples: [
          {
            es: 'Y corre y salta y ríe y canta.',
            hy: 'Ե՛վ վազում է, և՛ ցատկում է, և՛ ծիծաղում է, և՛ երգում է։',
            note: 'Se repite "y" antes de cada verbo.',
          },
          {
            es: 'Ni canta ni baila ni ríe ni habla.',
            hy: 'Ո՛չ երգում է, ո՛չ պարում է, ո՛չ ծիծաղում է, ո՛չ խոսում է։',
            note: 'Se repite "ni" una y otra vez.',
          },
          {
            es: 'Y llora y grita y corre y salta.',
            hy: 'Ե՛վ լաց է լինում, և՛ ճչում է, և՛ վազում է, և՛ ցատկում է։',
            note: 'Polisíndeton clásico.',
          },
        ],
        howToRecognize: {
          es: '¡Muchas conjunciones! "y... y... y..." o "ni... ni... ni...". Es lo contrario del asíndeton.',
          hy: 'Բազմաթիվ շաղկապներ՝ «y... y... y...» կամ «ni... ni... ni...»։ Այն asíndeton-ի ճիշտ հակառակն է։',
        },
      },
      {
        id: 'enumeracion',
        code: '6.5',
        titleEs: 'Enumeración',
        titleHy: 'Թվարկում',
        level: 'morfosintáctico',
        definition: {
          es: 'Presentación sucesiva de varios elementos relacionados entre sí (objetos, cualidades, acciones).',
          hy: 'Մի քանի իրերի, հատկանիշների կամ գործողությունների հաջորդական թվարկում։',
        },
        examples: [
          {
            es: 'En la mochila hay libros, cuadernos, lápices y una regla.',
            hy: 'Պայուսակում կան գրքեր, տետրեր, մատիտներ և քանոն։',
            note: 'Se enumeran objetos escolares.',
          },
          {
            es: 'Los libros, las revistas, los periódicos y las cartas llenaban la mesa.',
            hy: 'Գրքերը, ամսագրերը, թերթերը և նամակները լցրել էին սեղանը։',
            note: 'Lista de elementos de lectura.',
          },
          {
            es: 'El niño comió pan, queso, fruta y chocolate.',
            hy: 'Երեխան կերավ հաց, պանիր, միրգ և շոկոլադ։',
            note: 'Enumeración de alimentos.',
          },
        ],
        howToRecognize: {
          es: 'Es una lista de elementos. ¡Atención! Una enumeración puede combinarse con asíndeton o polisíndeton.',
          hy: 'Սա տարրերի ցուցակ է։ Ուշադրություն՝ enumeración-ը կարող է միաժամանակ լինել asíndeton կամ polisíndeton։',
        },
      },
      {
        id: 'pleonasmo',
        code: '6.6',
        titleEs: 'Pleonasmo',
        titleHy: 'Ավելորդ, բայց արտահայտիչ կրկնություն (պլեոնազմ)',
        level: 'morfosintáctico',
        definition: {
          es: 'Uso de palabras aparentemente innecesarias porque su significado ya está incluido en otras, pero que se usan deliberadamente para reforzar y enfatizar una idea.',
          hy: 'Իմաստով ավելորդ թվացող բառերի օգտագործում, որոնց իմաստն արդեն պարունակվում է մյուս բառերում, սակայն օգտագործվում են գաղափարն ավելի շեշտելու և ընդգծելու նպատակով։',
        },
        examples: [
          {
            es: 'Lo vi con mis propios ojos.',
            hy: 'Ես դա տեսա իմ սեփական աչքերով։',
            note: 'Ver ya implica los ojos, pero refuerza el testimonio.',
          },
          {
            es: 'Lo escuché con mis propios oídos.',
            hy: 'Լսեցի իմ սեփական ականջներով։',
            note: 'Énfasis sensorial directo.',
          },
          {
            es: 'Sube arriba. / Sal fuera.',
            hy: 'Բարձրացի՛ր վերև։ / Դուրս արի դուրս։',
            note: 'Redundancia cotidiana y expresiva.',
          },
        ],
        howToRecognize: {
          es: 'No todo pleonasmo es un error; en literatura es un recurso enfático intencionado.',
          hy: 'Ոչ բոլոր պլեոնազմն է սխալ. գրականության մեջ այն օգտագործվում է որպես արտահայտիչ հնարք։',
        },
      },
    ],
  },
  {
    id: 'nivel-semantico',
    number: '7',
    titleEs: 'Nivel semántico — Իմաստային հնարքներ',
    titleHy: 'Իմաստային մակարդակի գրական հնարքները',
    definition: {
      es: 'Recursos relacionados con el significado de las palabras, comparaciones de mundos reales y figurados, y la intensificación conceptual.',
      hy: 'Հնարքներ, որոնք կապված են բառերի իմաստների, իրական և փոխաբերական աշխարհների կապի ու պատկերավորման հետ։',
    },
    subsections: [
      {
        id: 'metafora',
        code: '7.1',
        titleEs: 'Metáfora',
        titleHy: 'Փոխաբերություն',
        level: 'semántico',
        definition: {
          es: 'Identificación de un elemento real (A) con otro imaginario o figurado (B) porque comparten alguna semejanza, SIN usar nexos comparativos como "como".',
          hy: 'Մի իրական առարկայի կամ երևույթի (A) նույնացումն է մեկ այլ փոխաբերական առարկայի (B) հետ՝ նրանց նմանության հիման վրա, ԱՌԱՆՑ «como» (ինչպես) բառի։',
        },
        examples: [
          {
            es: 'Tus ojos son dos estrellas.',
            hy: 'Քո աչքերը երկու աստղ են։',
            note: 'A = ojos (real), B = estrellas (figurado).',
          },
          {
            es: 'Las perlas de su boca brillaban.',
            hy: 'Նրա բերանի մարգարիտները փայլում էին։',
            note: 'Perlas = dientes (ատամներ).',
          },
          {
            es: 'La vida es un viaje.',
            hy: 'Կյանքը մի ճամփորդություն է։',
            note: 'Identificación directa entre la vida y el viaje.',
          },
        ],
        extraTable: {
          headers: ['Forma de metáfora (Ձև)', 'Ejemplo (Օրինակ)', 'Explicación (Բացատրություն)'],
          rows: [
            ['A es B', 'Tus ojos son estrellas.', 'Իրական (A) և փոխաբերական (B) տարրերը երկուսն էլ նշված են «ser» բայով։'],
            ['B sustituye a A', 'Dos estrellas iluminan tu rostro.', 'Միայն փոխաբերական տարրն է (աստղերը) նշված, իրականը (աչքերը) ենթադրվում է։'],
            ['B de A', 'El oro de tu cabello.', 'Փոխաբերական տարրը (B) կապվում է իրականի (A) հետ «de» նախդիրով (ոսկին = շիկահեր մազեր)։'],
          ],
        },
        howToRecognize: {
          es: 'Si dos cosas se identifican directamente ("A es B", "B de A", o solo B) y NO hay "como", es metáfora.',
          hy: 'Եթե երկու երևույթ նույնացվում են և «como» բառը ՉԿԱ, ուրեմն փոխաբերություն (metáfora) է։',
        },
      },
      {
        id: 'personificacion',
        code: '7.2',
        titleEs: 'Personificación (prosopopeya)',
        titleHy: 'Անձնավորում (լրացուցիչ կարևոր թեմա)',
        level: 'semántico',
        definition: {
          es: 'Consiste en atribuir cualidades, sentimientos o acciones humanas a animales, objetos inanimados, plantas o fenómenos naturales.',
          hy: 'Գրական հնարք է, երբ կենդանիներին, անշունչ առարկաներին, բույսերին կամ բնության երևույթներին վերագրվում են մարդկային հատկանիշներ, զգացմունքներ կամ գործողություններ։',
        },
        examples: [
          { es: 'El sol sonríe.', hy: 'Արևը ժպտում է (Արևը չի կարող ժպտալ, դա մարդկային արարք է)։' },
          { es: 'La luna me habla.', hy: 'Լուսինը խոսում է ինձ հետ։' },
          { es: 'El viento susurra.', hy: 'Քամին շշնջում է։' },
          { es: 'Las flores bailan.', hy: 'Ծաղիկները պարում են։' },
          { es: 'La ciudad duerme.', hy: 'Քաղաքը քնած է։' },
          { es: 'El frío muerde mis manos.', hy: 'Ցուրտը կծում է ձեռքերս։' },
        ],
        howToRecognize: {
          es: 'Pregúntate: ¿Algo que no es humano está realizando una acción humana (reír, hablar, cantar, llorar, bailar)? Si es así, es personificación.',
          hy: 'Ինքդ քեզ հարցրո՛ւ՝ արդյոք ոչ մարդկային մի երևույթ մարդկային գործողությո՞ւն է անում (ժպտալ, խոսել, լաց լինել, պարել, շշնջալ)։ Եթե այո, ուրեմն դա personificación է։',
        },
      },
      {
        id: 'simil',
        code: '7.3',
        titleEs: 'Símil o comparación',
        titleHy: 'Համեմատություն',
        level: 'semántico',
        definition: {
          es: 'Relación explícita de semejanza entre dos elementos mediante nexos comparativos como "como", "parece", "igual que", "semejante a".',
          hy: 'Երկու առարկաների բացահայտ համեմատություն՝ «como» (ինչպես, պես), «parece» (թվում է), «igual que» (ինչպես և), «semejante a» (նման) բառերի օգնությամբ։',
        },
        examples: [
          { es: 'Corre como el viento.', hy: 'Վազում է քամու պես։' },
          { es: 'Es fuerte como un león.', hy: 'Առյուծի պես ուժեղ է։' },
          { es: 'Sus ojos brillan como estrellas.', hy: 'Աչքերը փայլում են աստղերի պես։' },
          { es: 'Tus labios son como rosas.', hy: 'Քո շուրթերը վարդերի պես են։' },
        ],
        howToRecognize: {
          es: 'Regla de oro: Metáfora vs. Comparación: "Tus ojos son estrellas" = Metáfora (sin "como"). "Tus ojos brillan como estrellas" = Comparación (con "como").',
          hy: 'Ոսկե կանոն. Metáfora vs Comparación:\n«Tus ojos son estrellas» -> Metáfora (առանց «como»)\n«Tus ojos brillan como estrellas» -> Comparación (կա «como»)։',
        },
      },
      {
        id: 'hiperbole',
        code: '7.4',
        titleEs: 'Hipérbole',
        titleHy: 'Չափազանցություն (հիպերբոլ)',
        level: 'semántico',
        definition: {
          es: 'Exageración intencionada y desmedida de una realidad para expresar gran intensidad, dolor, alegría o tamaño.',
          hy: 'Որևէ հատկության, քանակի կամ իրավիճակի դիտավորյալ չափազանցում՝ զգացմունքը կամ տպավորությունը անհամեմատ ուժեղացնելու համար։',
        },
        examples: [
          { es: 'Te he llamado mil veces.', hy: 'Քեզ հազար անգամ զանգել եմ։' },
          { es: 'Me muero de hambre.', hy: 'Սովից մեռնում եմ։' },
          { es: 'Tengo una montaña de deberes.', hy: 'Տնային աշխատանքների մի ողջ սար ունեմ։' },
          { es: 'Lloró un océano de lágrimas.', hy: 'Արցունքների մի ամբողջ օվկիանոս թափեց։' },
          { es: 'Tengo tanta hambre que podría comerme un elefante.', hy: 'Այնքան սոված եմ, որ կարող էի մի փիղ ուտել։' },
        ],
        howToRecognize: {
          es: 'Es algo imposible o desproporcionado en la realidad cotidiana (mil veces, océano de lágrimas, morir de hambre).',
          hy: 'Իրականության մեջ բառացիորեն անհնար կամ չափազանցված մեծություն (հազար անգամ, արցունքների օվկիանոս, փիղ ուտել)։',
        },
      },
      {
        id: 'antitesis',
        code: '7.5',
        titleEs: 'Antítesis',
        titleHy: 'Հակադրություն (անտիթեզ)',
        level: 'semántico',
        definition: {
          es: 'Contraposición de dos palabras, sintagmas o ideas con significados opuestos o contrarios en un mismo contexto.',
          hy: 'Հակառակ իմաստներով բառերի, արտահայտությունների կամ գաղափարների հակադրություն նույն նախադասության մեջ։',
        },
        examples: [
          {
            es: 'Es tan corto el amor y tan largo el olvido.',
            hy: 'Այնքան կարճ է սերը, և այնքան երկար՝ մոռացումը (Pablo Neruda)։',
            note: 'Corto (կարճ) vs Largo (երկար)։',
          },
          {
            es: 'Unos ríen, otros lloran.',
            hy: 'Մեկը ծիծաղում է, մյուսը՝ լաց լինում (Reír vs Llorar)։',
            note: 'Acciones opuestas.',
          },
          {
            es: 'De día estoy alegre; de noche, triste.',
            hy: 'Ցերեկը ուրախ եմ, գիշերը՝ տխուր (Día/Noche, Alegre/Triste)։',
            note: 'Doble antítesis.',
          },
          {
            es: 'El verano es fuego y el invierno es hielo.',
            hy: 'Ամառը կրակ է, իսկ ձմեռը՝ սառույց։',
            note: 'Antítesis combinada con metáfora.',
          },
        ],
        howToRecognize: {
          es: 'Busca antónimos directos enfrentados en la misma frase (día/noche, reír/llorar, corto/largo).',
          hy: 'Փնտրի՛ր հականիշ բառեր, որոնք բախվում են նույն նախադասության մեջ (օր/գիշեր, կարճ/երկար, ծիծաղել/լաց լինել)։',
        },
      },
    ],
  },
  {
    id: 'distinguir-figuras',
    number: '8',
    titleEs: 'Cómo distinguir las figuras en el examen',
    titleHy: 'Ինչպես ճանաչել և տարբերակել հնարքները քննության ժամանակ',
    definition: {
      es: 'Guía rápida de reconocimiento para responder con seguridad en la prueba.',
      hy: 'Արագ կողմնորոշման աղյուսակ և պարտադիր հիշելու կանոններ՝ քննության հարցերին անսխալ պատասխանելու համար։',
    },
    table: {
      headers: ['Si ves en la frase... (Եթե տեսնում ես...)', 'Piensa en... (Մտածիր սրա մասին...)'],
      rows: [
        ['Sonidos repetidos en palabras cercanas', 'Aliteración (Հնչյունների կրկնություն)'],
        ['Imitación acústica de un sonido real (pum, tic-tac)', 'Onomatopeya (Ձայնանմանություն)'],
        ['Palabras que suenan parecido pero significan diferente', 'Paronomasia (Հարանունություն)'],
        ['Misma palabra al principio y al final del verso', 'Epanadiplosis (Սկզբի և վերջի կրկնություն)'],
        ['Palabras iniciales repetidas en varios versos seguidos', 'Anáfora (Սկզբնային կրկնություն)'],
        ['Orden gramatical alterado o desordenado', 'Hipérbaton (Շրջասություն)'],
        ['Faltan conjunciones (solo comas sucesivas)', 'Asíndeton (Շաղկապների բացթողում)'],
        ['Sobran conjunciones repetidas (y... y... o ni... ni...)', 'Polisíndeton (Շաղկապների կրկնություն)'],
        ['Una lista sucesiva de elementos relacionados', 'Enumeración (Թվարկում)'],
        ['Palabras redundantes para dar fuerza (lo vi con mis ojos)', 'Pleonasmo (Ավելորդ կրկնություն)'],
        ['Una cosa se identifica con otra sin nexo comparativo', 'Metáfora (Փոխաբերություն)'],
        ['Objetos inanimados o animales con rasgos humanos', 'Personificación (Անձնավորում)'],
        ['Aparece el nexo comparativo "como", "parece", "igual que"', 'Símil o comparación (Համեմատություն)'],
        ['Exageración desmedida o evidente de la realidad', 'Hipérbole (Չափազանցություն)'],
        ['Ideas, palabras o conceptos opuestos y contrarios', 'Antítesis (Հակադրություն)'],
      ],
    },
    extraContent: [
      {
        titleEs: '¡PARTE OBLIGATORIA DE MEMORIA! — Պարտադիր հիշել',
        titleHy: 'Պարտադիր հիշելու տարբերություններ',
        textEs: '1. Anáfora ≠ epanadiplosis (Anáfora repite al inicio de varias líneas; epanadiplosis abre y cierra la misma línea con la misma palabra).\n2. Asíndeton ≠ polisíndeton (Asíndeton quita conjunciones; polisíndeton las repite en exceso).\n3. Metáfora ≠ comparación (Metáfora identifica directamente; comparación usa "como").\n4. Metáfora ≠ personificación (Metáfora compara dos cosas; personificación da vida y rasgos humanos a lo no humano).\n5. Aliteración ≠ onomatopeya (Aliteración repite fonemas en palabras normales; onomatopeya imita un ruido real).\n6. Enumeración puede contener a la vez asíndeton o polisíndeton.',
        textHy: '1. Anáfora ≠ epanadiplosis (Anáfora-ն կրկնում է բառը մի քանի տողերի սկզբում. epanadiplosis-ը նույն բառով սկսում և ավարտում է նույն տողը)։\n2. Asíndeton ≠ polisíndeton (Asíndeton-ը հեռացնում է շաղկապները. polisíndeton-ը կրկնում է դրանք չափազանց շատ)։\n3. Metáfora ≠ comparación (Metáfora-ն նույնացնում է առանց «como». comparación-ը միշտ ունի «como», «parece»)։\n4. Metáfora ≠ personificación (Metáfora-ն երկու երևույթների նմանեցում է. personificación-ը մարդկային հատկանիշներ է տալիս ոչ մարդկայինին)։\n5. Aliteración ≠ onomatopeya (Aliteración-ը հնչյուն է կրկնում սովորական բառերում. onomatopeya-ն իրական աղմուկն է նմանակում)։\n6. Enumeración-ը կարող է միաժամանակ պարունակել asíndeton կամ polisíndeton։',
      },
    ],
  },
];
