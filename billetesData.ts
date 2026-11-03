export interface BilleteItem {
  id: number;
  titleEs: string;
  titleHy: string;
  themeEs: string;
  themeHy: string;
  duration: string;
  textEs: string;
  textHy: string;
  questions: {
    num: number;
    qEs: string;
    qHy: string;
    modelAnswerEs: string;
    modelAnswerHy: string;
  }[];
}

export interface FragmentoAnalisis {
  id: number;
  textEs: string;
  textHy: string;
  options: string[];
  correctFigure: string;
  explanationEs: string;
  explanationHy: string;
}

export interface PreguntaDesarrollo {
  id: number;
  questionEs: string;
  questionHy: string;
  modelAnswerEs: string;
  modelAnswerHy: string;
}

export const billetesData: BilleteItem[] = [
  {
    id: 1,
    titleEs: 'Billete 1: Literatura popular y transmisión oral',
    titleHy: 'Տոմս 1. Ժողովրդական գրականություն և բանավոր փոխանցում',
    themeEs: 'Literatura popular',
    themeHy: 'Ժողովրդական գրականություն',
    duration: '10–12 min',
    textEs: `En un pequeño pueblo, los abuelos contaban cada invierno una historia sobre una joven que había salvado a sus vecinos de una gran tormenta. Nadie sabía quién había inventado aquella narración. Cada familia la contaba de una manera diferente: algunas añadían personajes y otras cambiaban el final. Con el paso de los años, un profesor decidió escribirla para que las nuevas generaciones pudieran conocerla.`,
    textHy: `Մի փոքրիկ գյուղում տատիկ-պապիկները ամեն ձմեռ մի պատմություն էին պատմում մի երիտասարդ աղջկա մասին, ով իր հարևաններին փրկել էր մեծ փոթորկից։ Ոչ ոք չգիտեր, թե ով էր հորինել այդ պատմությունը։ Յուրաքանչյուր ընտանիք այն պատմում էր յուրովի. ոմանք ավելացնում էին նոր կերպարներ, իսկ մյուսները փոխում էին վերջաբանը։ Տարիներ անց մի ուսուցիչ որոշեց գրի առնել այն, որպեսզի նոր սերունդները կարողանային ճանաչել այն։`,
    questions: [
      {
        num: 1,
        qEs: 'Explica qué tipo de literatura representa el texto. Justifica tu respuesta utilizando al menos tres características de la literatura popular.',
        qHy: 'Բացատրի՛ր, թե գրականության ո՞ր տեսակն է ներկայացնում տեքստը։ Հիմնավորի՛ր պատասխանդ՝ նշելով ժողովրդական գրականության առնվազն երեք հատկանիշ։',
        modelAnswerEs: 'Se trata de literatura popular porque cumple tres rasgos fundamentales: es anónima («nadie sabía quién la había inventado»), se transmite de forma oral de generación en generación («los abuelos contaban cada invierno») y presenta diferentes versiones o modificaciones («algunas añadían personajes y otras cambiaban el final»).',
        modelAnswerHy: 'Սա ժողովրդական գրականություն է (literatura popular), քանի որ ունի երեք հիմնական հատկանիշ. անհայտ հեղինակ (anónima), սերնդեսերունդ բանավոր փոխանցում (transmisión oral) և տարբերակների ու փոփոխությունների առկայություն (modificaciones)։',
      },
      {
        num: 2,
        qEs: 'Analiza cómo se transmite la historia y explica por qué han aparecido distintas versiones a lo largo del tiempo.',
        qHy: 'Վերլուծի՛ր, թե ինչպես է փոխանցվում պատմությունը և բացատրի՛ր, թե ինչու են ժամանակի ընթացքում առաջացել տարբեր տարբերակներ։',
        modelAnswerEs: 'La historia se transmite por vía oral, de boca en boca. Al no existir un texto escrito fijo, cada narrador olvida algunos detalles o añade elementos según su imaginación, lo que origina múltiples variantes de un mismo relato.',
        modelAnswerHy: 'Պատմությունը փոխանցվում է բանավոր՝ բերանացի։ Գրավոր ֆիքսված տեքստ չլինելու պատճառով յուրաքանչյուր պատմող որոշ մանրամասներ մոռանում է կամ ավելացնում իր երևակայությամբ, ինչի հետևանքով առաջանում են տարբերակներ։',
      },
      {
        num: 3,
        qEs: 'Explica qué significa que una obra sea anónima y por qué esta característica es frecuente en la literatura popular.',
        qHy: 'Բացատրի՛ր, թե ինչ է նշանակում, որ ստեղծագործությունը անհայտ հեղինակ ունի (anónima) և ինչու է այդ հատկանիշը հաճախ հանդիպում ժողովրդական գրականության մեջ։',
        modelAnswerEs: 'Que una obra sea anónima significa que se desconoce su autor original individual. Es frecuente en la literatura popular porque la obra pertenece a la colectividad del pueblo, que la asume y conserva como patrimonio común.',
        modelAnswerHy: 'Անհայտ հեղինակ ունենալ (anónima) նշանակում է, որ ստեղծագործության կոնկրետ հեղինակը հայտնի չէ։ Դա բնորոշ է ժողովրդական գրականությանը, քանի որ այն պատկանում է ողջ ժողովրդին և պահպանվում որպես հավաքական ժառանգություն։',
      },
      {
        num: 4,
        qEs: '¿Qué cambia cuando el profesor escribe la historia? Explica si deja de ser popular por el hecho de quedar recogida por escrito.',
        qHy: 'Ի՞նչ է փոխվում, երբ ուսուցիչը գրի է առնում պատմությունը։ Բացատրի՛ր՝ արդյոք այն դադարո՞ւմ է ժողովրդական լինելուց գրավոր ամրագրվելու պատճառով։',
        modelAnswerEs: 'Cuando el profesor la fija por escrito, el texto queda estabilizado para evitar que desaparezca. Sin embargo, no deja de ser de origen popular, pues su espíritu, argumento y nacimiento proceden de la tradición oral del pueblo.',
        modelAnswerHy: 'Երբ ուսուցիչը գրի է առնում, տեքստը դառնում է կայուն և պահպանվում է մոռացումից։ Սակայն այն չի դադարում ժողովրդական լինելուց, քանի որ դրա ծագումն ու բովանդակությունը ժողովրդական ավանդույթից են։',
      },
      {
        num: 5,
        qEs: 'Redacta un pequeño párrafo explicando las principales diferencias entre la literatura popular y la culta.',
        qHy: 'Շարադրի՛ր փոքրիկ պարբերություն՝ բացատրելով ժողովրդական և հեղինակային գրականության գլխավոր տարբերությունները։',
        modelAnswerEs: 'La literatura popular es anónima, se transmite por tradición oral, su texto varía y utiliza un lenguaje sencillo. Por el contrario, la literatura culta tiene un autor conocido identificado, se transmite principalmente por escrito, su texto es fijo y emplea un lenguaje cuidadosamente elaborado.',
        modelAnswerHy: 'Ժողովրդական գրականությունը անանուն է, փոխանցվում է բանավոր, ունի տարբերակներ և պարզ լեզու։ Իսկ հեղինակային գրականությունն ունի հայտնի հեղինակ, տարածվում է գրավոր, ունի հաստատուն տեքստ և մշակված գեղարվեստական լեզու։',
      },
    ],
  },
  {
    id: 2,
    titleEs: 'Billete 2: El romance tradicional',
    titleHy: 'Տոմս 2. Ավանդական ռոմանս',
    themeEs: 'El romance y la métrica',
    themeHy: 'Ռոմանսը և տաղաչափությունը',
    duration: '10–12 min',
    textEs: `En la noche caminaba
el caballero leal,
la luna sobre las torres
no paraba de brillar.
Buscaba por los caminos
a su fiel amigo Juan.`,
    textHy: `Գիշերը քայլում էր
հավատարիմ ասպետը,
լուսինը աշտարակների վրա
չէր դադարում փայլելուց։
Փնտրում էր ճանապարհներին
իր հավատարիմ ընկեր Խուանին։`,
    questions: [
      {
        num: 1,
        qEs: '¿Qué tipo de composición poética es este texto y a qué género pertenece?',
        qHy: 'Բանաստեղծական ի՞նչ տեսակ է այս տեքստը և ո՞ր ժանրին է պատկանում։',
        modelAnswerEs: 'Es un fragmento de romance, una composición poética narrativa que pertenece a la literatura popular tradicional.',
        modelAnswerHy: 'Սա ռոմանսի (romance) հատված է՝ պատմողական չափածո ստեղծագործություն, որը պատկանում է ժողովրդական ավանդական գրականությանը։',
      },
      {
        num: 2,
        qEs: 'Analiza el número de sílabas de los versos. ¿Cómo se llaman los versos de ocho sílabas?',
        qHy: 'Վերլուծի՛ր տողերի վանկերի քանակը։ Ինչպե՞ս են կոչվում ութվանկ տողերը։',
        modelAnswerEs: 'Los versos tienen ocho sílabas métricas («En-la-no-che-ca-mi-na-ba»). Los versos de ocho sílabas se llaman versos octosílabos (de arte menor).',
        modelAnswerHy: 'Տողերն ունեն 8 վանկ (En-la-no-che-ca-mi-na-ba)։ Ութվանկ տողերը կոչվում են versos octosílabos (օկտոսիլաբո)։',
      },
      {
        num: 3,
        qEs: 'Explica el esquema de rima propio del romance. ¿Qué versos riman y de qué tipo es la rima?',
        qHy: 'Բացատրի՛ր ռոմանսի հանգի կառուցվածքը։ Ո՞ր տողերն են հանգավորվում և ի՞նչ տեսակի է հանգը։',
        modelAnswerEs: 'En los romances riman solo los versos pares en rima asonante (leal / brillar / Juan: riman en -a), mientras que los versos impares quedan sueltos o libres.',
        modelAnswerHy: 'Ռոմանսում հանգավորվում են միայն զույգ տողերը (leal / brillar / Juan -> ձայնավորային հանգ «a»), իսկ կենտ տողերը մնում են ազատ (libres)։',
      },
      {
        num: 4,
        qEs: 'Identifica una personificación en el poema y explica por qué lo es.',
        qHy: 'Գտի՛ր անձնավորում (personificación) բանաստեղծության մեջ և բացատրի՛ր պատճառը։',
        modelAnswerEs: '«La luna sobre las torres no paraba de brillar» o la luna como testigo vigilante que acompaña la caminata, realizando el papel de acompañante activo.',
        modelAnswerHy: 'Լուսնին վերագրված է ուղեկցողի և ականատեսի դեր («la luna sobre las torres...»), որը ակտիվ մասնակցում է գիշերային տեսարանին։',
      },
      {
        num: 5,
        qEs: 'Explica por qué los romances solían memorizarse fácilmente por el pueblo.',
        qHy: 'Բացատրի՛ր, թե ինչու էին ռոմանսները շատ հեշտությամբ մտապահվում ժողովրդի կողմից։',
        modelAnswerEs: 'Porque su métrica octosílaba es muy musical y natural en español, la rima asonante ayuda a recordar los finales y a menudo iban acompañados de melodía y estribillos.',
        modelAnswerHy: 'Քանի որ ութվանկ չափը (octosílabos) շատ երաժշտական է և բնական իսպաներենի համար, հանգն օգնում է հիշողությանը, և հաճախ երգվում էր երաժշտության ու կրկներգերի ուղեկցությամբ։',
      },
    ],
  },
  {
    id: 3,
    titleEs: 'Billete 3: Leyenda y Mito frente a frente',
    titleHy: 'Տոմս 3. Լեգենդը և առասպելը դեմ առ դեմ',
    themeEs: 'Leyenda vs. Mito',
    themeHy: 'Լեգենդն ընդդեմ առասպելի',
    duration: '10–12 min',
    textEs: `Texto 1: En las cumbres del volcán vivía el dios Vulcano, quien con su martillo forjaba rayos y provocaba temblores en la tierra para advertir a los mortales sobre su furia.
Texto 2: En la vieja torre del monasterio de San Pedro, dicen que cada noche de San Juan se oyen cadenas arrastrarse, en recuerdo del monje que desapareció misteriosamente hace tres siglos.`,
    textHy: `Տեքստ 1. Հրաբխի գագաթներին ապրում էր Վուլկան աստվածը, ով իր մուրճով կայծակներ էր կռում և երկրաշարժեր առաջացնում երկրի վրա՝ մահկանացուներին իր զայրույթի մասին զգուշացնելու համար։
Տեքստ 2. Սուրբ Պետրոսի վանքի հին աշտարակում ասում են, որ Սուրբ Հովհաննեսի ամեն գիշեր շղթաների քարշ տալու ձայներ են լսվում՝ ի հիշատակ երեք դար առաջ առեղծվածային կերպով անհետացած վանականի։`,
    questions: [
      {
        num: 1,
        qEs: 'Clasifica cada texto en leyenda o mito y justifica tu respuesta.',
        qHy: 'Դասակարգի՛ր յուրաքանչյուր տեքստը որպես լեգենդ կամ առասպել և հիմնավորի՛ր։',
        modelAnswerEs: 'El Texto 1 es un mito porque está protagonizado por un dios (Vulcano) y explica fenómenos de la naturaleza (rayos y temblores). El Texto 2 es una leyenda porque se sitúa en un lugar real (monasterio de San Pedro) y narra un suceso misterioso con elementos fantásticos.',
        modelAnswerHy: 'Տեքստ 1-ը առասպել է (mito), որովհետև գլխավոր հերոսն աստված է (Վուլկանը) և բացատրում է բնության երևույթները։ Տեքստ 2-ը լեգենդ է (leyenda), քանի որ կապված է իրական վայրի հետ և պատմում է առեղծվածային պատմություն։',
      },
      {
        num: 2,
        qEs: '¿Qué finalidad principal tiene un mito frente a una leyenda?',
        qHy: 'Ի՞նչ հիմնական նպատակ ունի առասպելը՝ ի տարբերություն լեգենդի։',
        modelAnswerEs: 'El mito tiene la finalidad de dar una explicación sagrada al origen del mundo, los dioses y la naturaleza. La leyenda busca entretener, advertir o conmemorar un suceso extraordinario ligado a un lugar concreto.',
        modelAnswerHy: 'Առասպելը նպատակ ունի բացատրել աշխարհի և բնության երևույթների ծագումը աստվածների միջոցով։ Լեգենդը նպատակ ունի պատմել որևէ վայրի կամ իրադարձության առեղծվածային պատմությունը։',
      },
      {
        num: 3,
        qEs: '¿Qué elementos reales y fantásticos encuentras en el Texto 2?',
        qHy: 'Ի՞նչ իրական և ի՞նչ երևակայական տարրեր ես գտնում 2-րդ տեքստում։',
        modelAnswerEs: 'Elementos reales: el monasterio de San Pedro, la torre y la noche de San Juan. Elementos fantásticos: el ruido sobrenatural de cadenas arrastradas por el espíritu del monje desaparecido.',
        modelAnswerHy: 'Իրական տարրեր՝ Սուրբ Պետրոսի վանքը, աշտարակը և տոնական գիշերը։ Երևակայական տարրեր՝ անհետացած վանականի ոգու շղթաների գերբնական ձայները։',
      },
      {
        num: 4,
        qEs: '¿Pertenecen ambos relatos a la literatura popular? Justifica.',
        qHy: 'Արդյո՞ք երկու պատմություններն էլ պատկանում են ժողովրդական գրականությանը։ Հիմնավորի՛ր։',
        modelAnswerEs: 'Sí, ambos pertenecen a la literatura popular tradicional porque nacieron en la cultura colectiva del pueblo, son anónimos y se transmitieron oralmente.',
        modelAnswerHy: 'Այո, երկուսն էլ պատկանում են ժողովրդական գրականությանը, քանի որ ստեղծվել են ժողովրդի կողմից, անանուն են և փոխանցվել են բանավոր։',
      },
      {
        num: 5,
        qEs: 'Inventa un breve ejemplo de dos líneas para un mito.',
        qHy: 'Հորինի՛ր առասպելի կարճ օրինակ՝ երկու տողով։',
        modelAnswerEs: '«El dios del viento sopló con tristeza sobre las olas del mar, y de su aliento nacieron las primeras tempestades que enfriaron la tierra».',
        modelAnswerHy: '«Քամու աստվածը տխրությամբ փչեց ծովի ալիքների վրա, և նրա շնչից ծնվեցին առաջին փոթորիկները, որոնք սառեցրին երկիրը»։',
      },
    ],
  },
  {
    id: 4,
    titleEs: 'Billete 4: El cuento popular y el cuento culto',
    titleHy: 'Տոմս 4. Ժողովրդական հեքիաթը և հեղինակային պատմվածքը',
    themeEs: 'El cuento y sus clases',
    themeHy: 'Պատմվածքի / հեքիաթի տեսակները',
    duration: '10–12 min',
    textEs: `Había una vez un sastre que engañó a un gigante con un trozo de queso y una piedra. El gigante creyó que el hombre era más fuerte que él y huyó asustado hacia la montaña.`,
    textHy: `Լինում է, չի լինում մի դերձակ, ով խաբում է մի հսկայի պանրի կտորով և քարով։ Հսկան կարծում է, թե մարդն իրենից ուժեղ է, և վախեցած փախչում է դեպի սարը։`,
    questions: [
      {
        num: 1,
        qEs: '¿Qué tipo de narración es este fragmento y cuáles son sus rasgos principales?',
        qHy: 'Ի՞նչ պատմողական տեսակ է այս հատվածը և որո՞նք են նրա գլխավոր հատկանիշները։',
        modelAnswerEs: 'Es un cuento popular tradicional. Sus rasgos son la brevedad, la sencillez del argumento, el número reducido de personajes (el sastre y el gigante) y la fórmula tradicional de inicio («Había una vez»).',
        modelAnswerHy: 'Սա ժողովրդական հեքիաթ/պատմվածք է (cuento popular)։ Հատկանիշներն են՝ կարճ ծավալը, պարզ սյուժեն, քիչ կերպարները և ավանդական սկիզբը («Había una vez»)։',
      },
      {
        num: 2,
        qEs: '¿En qué se diferencia un cuento popular de un cuento de autor (culto)?',
        qHy: 'Ինչո՞վ է ժողովրդական հեքիաթը տարբերվում հեղինակային պատմվածքից (cuento culto)։',
        modelAnswerEs: 'El cuento popular es anónimo, se transmite oralmente y tiene muchas variantes; el cuento culto tiene un autor conocido firmado, se publica por escrito y su texto no cambia.',
        modelAnswerHy: 'Ժողովրդական հեքիաթը անանուն է, փոխանցվում է բանավոր և ունի տարբերակներ. հեղինակայինը ունի հայտնի հեղինակ, հրատարակվում է գրավոր և տեքստը հաստատուն է։',
      },
      {
        num: 3,
        qEs: '¿Está escrito en prosa o en verso? Justifica tu respuesta.',
        qHy: 'Արձա՞կ է գրված, թե՞ չափածո։ Հիմնավորի՛ր։',
        modelAnswerEs: 'Está escrito en prosa, porque se organiza en oraciones continuas y párrafos, sin medida métrica de sílabas ni rima obligatoria.',
        modelAnswerHy: 'Գրված է արձակ (en prosa), որովհետև կազմված է շարունակական նախադասություններից և չունի տողերի վանկային հաշվարկ կամ հանգ։',
      },
      {
        num: 4,
        qEs: 'Explica el papel del ingenio en este relato tradicional.',
        qHy: 'Բացատրի՛ր հնարամտության դերը այս ավանդական պատմության մեջ։',
        modelAnswerEs: 'En los cuentos populares el protagonista humilde y débil (el sastre) vence al poderoso y temible (el gigante) gracias a su astucia y engaño.',
        modelAnswerHy: 'Ժողովրդական հեքիաթներում թույլ, բայց խելացի հերոսը (դերձակը) հաղթում է հսկային իր հնարամտության ու խելքի շնորհիվ։',
      },
      {
        num: 5,
        qEs: 'Escribe una oración que transforme este texto en lenguaje literario poético.',
        qHy: 'Գրի՛ր մեկ նախադասություն, որն այս տեքստը կվերածի գեղարվեստական պատկերավոր լեզվի։',
        modelAnswerEs: '«El miedo cabalgaba en el corazón del gigante como un potro salvaje mientras huía de las montañas sombrías».',
        modelAnswerHy: '«Վախը հեծնել էր հսկայի սիրտը վայրի նժույգի պես, մինչ նա փախչում էր մռայլ լեռներով»։',
      },
    ],
  },
  {
    id: 5,
    titleEs: 'Billete 5: Literatura culta y lenguaje elaborado',
    titleHy: 'Տոմս 5. Հեղինակային գրականություն և մշակված լեզու',
    themeEs: 'La literatura culta',
    themeHy: 'Հեղինակային գրականություն',
    duration: '10–12 min',
    textEs: `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.
(Miguel de Cervantes, Don Quijote de la Mancha)`,
    textHy: `Լա Մանչայի մի վայրում, որի անունը չեմ ուզում հիշել, ոչ շատ վաղուց ապրում էր մի իդալգո՝ նիզակակալին դրված նիզակով, հին վահանով, նիհար ձիով և արագավազ որսաշնով։
(Միգել դե Սերվանտես, «Դոն Կիխոտ»)` ,
    questions: [
      {
        num: 1,
        qEs: '¿Por qué este fragmento es un ejemplo indiscutible de literatura culta?',
        qHy: 'Ինչո՞ւ է այս հատվածը հեղինակային գրականության անվիճելի օրինակ։',
        modelAnswerEs: 'Porque tiene un autor célebre identificado (Miguel de Cervantes), fue publicado por escrito en un libro fijado y utiliza un lenguaje sumamente elaborado.',
        modelAnswerHy: 'Որովհետև ունի ճանաչված հեղինակ (Միգել դե Սերվանտես), հրատարակված է գրքով և օգտագործում է մշակված ու հարուստ գեղարվեստական լեզու։',
      },
      {
        num: 2,
        qEs: 'Identifica la figura literaria presente en la enumeración de objetos del hidalgo.',
        qHy: 'Գտի՛ր գրական հնարքը իդալգոյի իրերի թվարկման մեջ։',
        modelAnswerEs: 'Aparece una enumeración («lanza en astillero, adarga antigua, rocín flaco y galgo corredor»), que describe detalladamente el estilo de vida del personaje.',
        modelAnswerHy: 'Առկա է թվարկում (enumeración), որը մանրամասն ներկայացնում է հերոսի կենցաղային իրերը։',
      },
      {
        num: 3,
        qEs: '¿Puede un texto de literatura culta transmitirse también por vía oral?',
        qHy: 'Կարո՞ղ է հեղինակային գրականության տեքստը նույնպես փոխանցվել բանավոր ճանապարհով։',
        modelAnswerEs: 'Sí, puede ser leído o recitado en voz alta, pero su origen y fijación original permanecen por escrito en una edición autorizada.',
        modelAnswerHy: 'Այո, այն կարող է բարձրաձայն ընթերցվել կամ արտասանվել, սակայն նրա ծագումն ու հիմքը գրավոր տեքստն է։',
      },
      {
        num: 4,
        qEs: 'Explica qué significa que el texto sea «estable» en la literatura culta.',
        qHy: 'Բացատրի՛ր, թե ինչ է նշանակում, որ հեղինակային գրականության տեքստը «կայուն» (estable) է։',
        modelAnswerEs: 'Significa que las palabras, oraciones y capítulos se mantienen invariables cada vez que un lector abre el libro, al contrario que en la literatura oral.',
        modelAnswerHy: 'Նշանակում է, որ բառերն ու նախադասությունները մնում են անփոփոխ ամեն անգամ գիրքը կարդալիս, ի տարբերություն բանավոր փոխանցվող պատմությունների։',
      },
      {
        num: 5,
        qEs: 'Compara el lenguaje de este fragmento con el lenguaje de una conversación cotidiana.',
        qHy: 'Համեմատի՛ր այս հատվածի լեզուն առօրյա խոսակցական լեզվի հետ։',
        modelAnswerEs: 'El fragmento utiliza un ritmo cuidado, vocabulario selecto y construcciones elegantes, mientras que el lenguaje cotidiano busca solo la comunicación rápida y práctica.',
        modelAnswerHy: 'Այս հատվածը օգտագործում է մշակված ռիթմ, ընտրված բառապաշար և գեղեցիկ կառուցվածք, մինչդեռ առօրյա լեզուն ձգտում է միայն արագ հաղորդակցման։',
      },
    ],
  },
  {
    id: 6,
    titleEs: 'Billete 6: Lenguaje cotidiano frente a lenguaje literario',
    titleHy: 'Տոմս 6. Առօրյա լեզուն ընդդեմ գրական լեզվի',
    themeEs: 'El lenguaje literario',
    themeHy: 'Գրական լեզու',
    duration: '10–12 min',
    textEs: `Expresión A: «Llegó el otoño y se cayeron las hojas de los árboles porque hacía viento».
Expresión B: «El otoño vistió de oro el sendero, mientras el viento arrancaba lágrimas de los viejos robles».`,
    textHy: `Արտահայտություն A. «Եկավ աշունը և ծառերի տերևները թափվեցին, որովհետև քամի էր անում»։
Արտահայտություն B. «Աշունը ոսկով հագցրեց արահետը, մինչ քամին արցունքներ էր պոկում ծեր կաղնիներից»։`,
    questions: [
      {
        num: 1,
        qEs: 'Identifica cuál de las dos expresiones utiliza lenguaje literario y explica por qué.',
        qHy: 'Որոշի՛ր, թե երկու արտահայտություններից ո՞րն է օգտագործում գրական լեզու և բացատրի՛ր։',
        modelAnswerEs: 'La Expresión B utiliza lenguaje literario porque persigue una intención estética, crea imágenes sensoriales emotivas y utiliza figuras como la personificación y la metáfora.',
        modelAnswerHy: 'B արտահայտությունն է գրական լեզու, քանի որ ունի գեղագիտական նպատակ, ստեղծում է զգացմունքային պատկերներ և օգտագործում է անձնավորում ու փոխաբերություն։',
      },
      {
        num: 2,
        qEs: 'Localiza dos figuras literarias en la Expresión B y explícalas.',
        qHy: 'Գտի՛ր երկու գրական հնարք B արտահայտության մեջ և բացատրի՛ր։',
        modelAnswerEs: '1) Metáfora: «vistió de oro» (las hojas amarillas son oro). 2) Personificación: «el otoño vistió» o «el viento arrancaba lágrimas de los robles» (llorar y vestir son actos humanos).',
        modelAnswerHy: '1) Փոխաբերություն՝ «vistió de oro» (դեղին տերևները ոսկի են)։ 2) Անձնավորում՝ «կաղնիներից արցունքներ պոկել» (լաց լինելը մարդկային հատկանիշ է)։',
      },
      {
        num: 3,
        qEs: '¿Qué información objetiva transmiten ambas frases?',
        qHy: 'Ի՞նչ օբյեկտիվ տեղեկություն են փոխանցում երկու նախադասություններն էլ։',
        modelAnswerEs: 'Ambas transmiten exactamente el mismo dato objetivo: que en otoño el viento hace caer las hojas secas de los árboles.',
        modelAnswerHy: 'Երկուսն էլ փոխանցում են նույն փաստացի տեղեկությունը՝ որ աշնանը քամու պատճառով ծառերի չոր տերևները թափվում են։',
      },
      {
        num: 4,
        qEs: 'Transforma una frase cotidiana: «Hace mucho calor» en una frase literaria.',
        qHy: 'Վերածի՛ր առօրյա «Hace mucho calor» նախադասությունը գրական պատկերավոր նախադասության։',
        modelAnswerEs: '«El sol arrojaba lanzas de fuego sobre la tierra sedienta».',
        modelAnswerHy: '«Արևը կրակե նիզակներ էր նետում ծարավ հողի վրա»։',
      },
      {
        num: 5,
        qEs: '¿Por qué la literatura se preocupa tanto por el CÓMO se dice el mensaje?',
        qHy: 'Ինչո՞ւ է գրականությունն այդքան մեծ ուշադրություն դարձնում այն բանին, թե ԻՆՉՊԵՍ է ասվում միտքը։',
        modelAnswerEs: 'Porque en la literatura prima la función poética: las palabras no solo transmiten datos, sino belleza, emoción, ritmo y sorpresa para conmover al lector.',
        modelAnswerHy: 'Քանի որ գրականության մեջ գործում է պոետիկ գործառույթը. բառերը ոչ միայն փաստեր են հաղորդում, այլև գեղեցկություն, հույզեր և խորը տպավորություն։',
      },
    ],
  },
  {
    id: 7,
    titleEs: 'Billete 7: Verso, prosa, rima y métrica',
    titleHy: 'Տոմս 7. Չափածո, արձակ, հանգ և տաղաչափություն',
    themeEs: 'Verso y Prosa',
    themeHy: 'Չափածո և արձակ',
    duration: '10–12 min',
    textEs: `Texto A:
Canta el pájaro en la rama,
brilla el agua en el manantial.
La mañana se derrama
sobre el verde olivar.

Texto B:
El pájaro cantaba tranquilamente sobre la rama. A pocos pasos, el agua del manantial brillaba bajo la luz suave de la mañana que cubría los campos.`,
    textHy: `Տեքստ A.
Երգում է թռչունը ճյուղին,
փայլում է ջուրը աղբյուրում:
Առավոտը տարածվում է
կանաչ ձիթենու այգու վրա:

Տեքստ B.
Թռչունը հանգիստ երգում էր ճյուղին: Մի քանի քայլ հեռու աղբյուրի ջուրը փայլում էր առավոտյան մեղմ լույսի տակ, որը ծածկել էր դաշտերը:`,
    questions: [
      {
        num: 1,
        qEs: 'Indica cuál es texto en verso y cuál en prosa y describe las diferencias visuales y estructurales.',
        qHy: 'Նշի՛ր, թե որն է չափածո և որը արձակ, և նկարագրի՛ր տեսողական ու կառուցվածքային տարբերությունները։',
        modelAnswerEs: 'El Texto A está en verso (líneas cortas independientes con ritmo y rima). El Texto B está en prosa (oraciones seguidas organizadas en un párrafo continuo).',
        modelAnswerHy: 'Տեքստ A-ն չափածո է (կարճ բանաստեղծական տողեր՝ ռիթմով և հանգով)։ Տեքստ B-ն արձակ է (շարունակական նախադասություններով պարբերություն)։',
      },
      {
        num: 2,
        qEs: 'Analiza la rima del Texto A: ¿es consonante o asonante? Justifica.',
        qHy: 'Վերլուծի՛ր A տեքստի հանգը. լրի՞վ է (consonante), թե՞ ձայնավորային (asonante)։ Հիմնավորի՛ր։',
        modelAnswerEs: 'En rama / derrama hay rima consonante (-ama: coinciden vocales y consonantes). En manantial / olivar hay rima asonante en la última vocal acentuada (-a-).',
        modelAnswerHy: '«rama / derrama» տողերում լրիվ հանգ է (rima consonante -ama), իսկ «manantial / olivar» տողերում համընկնում է վերջին շեշտված ձայնավորը (-a-)։',
      },
      {
        num: 3,
        qEs: '¿Qué es el verso libre?',
        qHy: 'Ի՞նչ է ազատ տողը (verso libre)։',
        modelAnswerEs: 'Es aquel verso que no se ajusta a una medida fija de sílabas ni sigue un esquema de rima determinado.',
        modelAnswerHy: 'Դա այն բանաստեղծական տողն է, որը չունի վանկերի ֆիքսված քանակ և չի ենթարկվում հանգի պարտադիր կանոնին։',
      },
      {
        num: 4,
        qEs: '¿Puede un texto en prosa contener figuras literarias?',
        qHy: 'Կարո՞ղ է արձակ տեքստը պարունակել գրական պատկերավորման միջոցներ։',
        modelAnswerEs: 'Sí, totalmente. La prosa literaria utiliza metáforas, personificaciones, comparaciones y todas las figuras retóricas posibles.',
        modelAnswerHy: 'Այո, միանշանակ։ Գեղարվեստական արձակը օգտագործում է փոխաբերություններ, անձնավորումներ և այլ գրական հնարքներ։',
      },
      {
        num: 5,
        qEs: 'Mide las sílabas del primer verso del Texto A: «Can-ta el pá-ja-ro en la ra-ma».',
        qHy: 'Հաշվի՛ր A տեքստի առաջին տողի վանկերը. «Can-ta el pá-ja-ro en la ra-ma»։',
        modelAnswerEs: 'Tiene 8 sílabas métricas mediante sinalefas: Can-ta_el (1-2) pá-ja-ro_en (3-4-5) la (6) ra-ma (7-8). Es un verso octosílabo.',
        modelAnswerHy: 'Ունի 8 վանկ (սինալեֆայի կիրառմամբ՝ «Can-ta_el pá-ja-ro_en la ra-ma»)։ Սա octosílabo տող է։',
      },
    ],
  },
  {
    id: 8,
    titleEs: 'Billete 8: Figuras del nivel fónico',
    titleHy: 'Տոմս 8. Հնչյունային մակարդակի հնարքներ',
    themeEs: 'Nivel fónico',
    themeHy: 'Հնչյունային մակարդակ',
    duration: '10–12 min',
    textEs: `1. En el silencio solo se escuchaba un susurro de abejas que sonaba.
2. ¡Pum! Un golpe seco retumbó en la pared.
3. El erizo se eriza de risa.
4. Verde que te quiero verde.`,
    textHy: `1. Լռության մեջ միայն լսվում էր մեղուների շշուկը, որ հնչում էր:
2. Դմփո՛ց։ Չոր հարվածը դղրդաց պատի վրա։
3. Ոզնին փշաքաղվում է ծիծաղից (erizo / eriza / risa)։
4. Կանաչ, ես քեզ ուզում եմ կանաչ։`,
    questions: [
      {
        num: 1,
        qEs: 'Identifica la figura literaria de cada una de las cuatro oraciones.',
        qHy: 'Որոշի՛ր չորս նախադասություններից յուրաքանչյուրի գրական հնարքը։',
        modelAnswerEs: '1) Aliteración (repetición de /s/). 2) Onomatopeya («¡Pum!»). 3) Paronomasia («erizo / eriza / risa»). 4) Epanadiplosis («Verde... verde»).',
        modelAnswerHy: '1) Ալիտերացիա (s հնչյունի կրկնություն)։ 2) Ձայնանմանություն («Pum»)։ 3) Հարանունություն («erizo / eriza / risa»)։ 4) Էպանադիպլոսիս («Verde... verde»)։',
      },
      {
        num: 2,
        qEs: '¿Por qué todas estas figuras pertenecen al nivel fónico?',
        qHy: 'Ինչո՞ւ են այս բոլոր հնարքները պատկանում հնչյունային մակարդակին (nivel fónico)։',
        modelAnswerEs: 'Porque juegan con los sonidos de las palabras, la acústica, el ritmo fonético y la imitación auditiva.',
        modelAnswerHy: 'Քանի որ դրանք հիմնված են հնչյունների, բառերի ձայնային նմանության, լսողական տպավորության և ռիթմի վրա։',
      },
      {
        num: 3,
        qEs: 'Explica la diferencia entre aliteración y onomatopeya.',
        qHy: 'Բացատրի՛ր տարբերությունը ալիտերացիայի և ձայնանմանության միջև։',
        modelAnswerEs: 'La aliteración repite un fonema en palabras normales para evocar una sensación; la onomatopeya crea o utiliza directamente una palabra que imita un ruido real de la naturaleza o las cosas.',
        modelAnswerHy: 'Ալիտերացիան կրկնում է հնչյուն սովորական բառերում, իսկ օնոմատոպեան ուղղակիորեն բառով նմանակում է իրական ձայնը (tic-tac, pum)։',
      },
      {
        num: 4,
        qEs: '¿En qué se distingue la epanadiplosis de la anáfora?',
        qHy: 'Ինչո՞վ է էպանադիպլոսիսը տարբերվում անաֆորայից։',
        modelAnswerEs: 'La epanadiplosis repite la misma palabra al principio y al final de un mismo verso; la anáfora repite palabras al principio de varios versos consecutivos.',
        modelAnswerHy: 'Էպանադիպլոսիսը նույն բառը կրկնում է նույն տողի սկզբում և վերջում, իսկ անաֆորան բառը կրկնում է հաջորդական տողերի սկզբում։',
      },
      {
        num: 5,
        qEs: 'Crea un ejemplo propio de paronomasia.',
        qHy: 'Ստեղծի՛ր հարանունության (paronomasia) քո սեփական օրինակը։',
        modelAnswerEs: '«Con dados ganan condados» o «Milagro en el lagar».',
        modelAnswerHy: '«Con dados ganan condados» (զառերով կոմսություններ են շահում)։',
      },
    ],
  },
  {
    id: 9,
    titleEs: 'Billete 9: Figuras del nivel morfosintáctico',
    titleHy: 'Տոմս 9. Շարահյուսական մակարդակի հնարքներ',
    themeEs: 'Nivel morfosintáctico',
    themeHy: 'Շարահյուսական մակարդակ',
    duration: '10–12 min',
    textEs: `Oración 1: Del salón en el ángulo oscuro veíase el arpa.
Oración 2: Vivo sin ti, vivo sin luz, vivo sin paz.
Oración 3: Llegué, vi, vencí.
Oración 4: Y canta y baila y sueña y sonríe.`,
    textHy: `1. Սրահի մութ անկյունում տեսանելի էր տավիղը:
2. Ապրում եմ առանց քեզ, ապրում եմ առանց լույսի, ապրում եմ առանց խաղաղության:
3. Եկա, տեսա, հաղթեցի:
4. Ե՛վ երգում է, և՛ պարում է, և՛ երազում է, և՛ ժպտում է:`,
    questions: [
      {
        num: 1,
        qEs: 'Nombra la figura de cada una de las 4 oraciones.',
        qHy: 'Նշի՛ր 4 նախադասություններից յուրաքանչյուրի գրական հնարքը։',
        modelAnswerEs: '1) Hipérbaton. 2) Anáfora. 3) Asíndeton. 4) Polisíndeton.',
        modelAnswerHy: '1) Hipérbaton (շրջասություն)։ 2) Anáfora (անաֆորա)։ 3) Asíndeton (ասինդետոն)։ 4) Polisíndeton (պոլիսինդետոն)։',
      },
      {
        num: 2,
        qEs: 'Reordena la oración 1 para eliminar el hipérbaton.',
        qHy: 'Վերադասավորի՛ր 1-ին նախադասությունը՝ հիպերբատոնը վերացնելու համար։',
        modelAnswerEs: '«El arpa se veía en el ángulo oscuro del salón».',
        modelAnswerHy: '«El arpa se veía en el ángulo oscuro del salón» (Տավիղը երևում էր սրահի մութ անկյունում)։',
      },
      {
        num: 3,
        qEs: 'Explica el efecto de ritmo que consiguen el asíndeton y el polisíndeton.',
        qHy: 'Բացատրի՛ր, թե ռիթմի ինչպիսի տպավորություն են ստեղծում asíndeton-ը և polisíndeton-ը։',
        modelAnswerEs: 'El asíndeton produce rapidez, dinamismo y agilidad. El polisíndeton crea lentitud, pesadez, solemnidad y gran insistencia.',
        modelAnswerHy: 'Asíndeton-ը ստեղծում է արագություն, դինամիկա և թեթևություն։ Իսկ Polisíndeton-ը ստեղծում է դանդաղություն, ծանրություն և շեշտվածություն։',
      },
      {
        num: 4,
        qEs: '¿Qué es un pleonasmo? Pon un ejemplo del cuaderno.',
        qHy: 'Ի՞նչ է պլեոնազմը (pleonasmo)։ Բե՛ր տետրի օրինակը։',
        modelAnswerEs: 'Es el uso de palabras redundantes cuyo significado ya está implícito, con el fin de reforzar la idea. Ejemplo: «Lo vi con mis propios ojos» o «Sal fuera».',
        modelAnswerHy: 'Իմաստով ավելորդ բառերի գործածությունն է՝ միտքն ընդգծելու նպատակով։ Օրինակ՝ «Lo vi con mis propios ojos» (տեսա իմ սեփական աչքերով)։',
      },
      {
        num: 5,
        qEs: '¿Por qué estas figuras pertenecen al nivel morfosintáctico?',
        qHy: 'Ինչո՞ւ են այս հնարքները պատկանում շարահյուսական մակարդակին։',
        modelAnswerEs: 'Porque afectan al orden de las palabras en la oración, a la presencia o ausencia de nexos gramaticales y a la repetición estructural.',
        modelAnswerHy: 'Որովհետև դրանք վերաբերում են նախադասության մեջ բառերի կարգին, շաղկապների առկայությանը կամ բացակայությանը և կառուցվածքային կրկնությանը։',
      },
    ],
  },
  {
    id: 10,
    titleEs: 'Billete 10: La metáfora y sus tres formas',
    titleHy: 'Տոմս 10. Փոխաբերությունը և նրա երեք ձևերը',
    themeEs: 'La metáfora',
    themeHy: 'Փոխաբերություն',
    duration: '10–12 min',
    textEs: `Forma 1: Tus ojos son luceros.
Forma 2: Dos luceros iluminan tu rostro.
Forma 3: El oro de tu pelo brillaba al sol.`,
    textHy: `Ձև 1. Քո աչքերը լուսատուներ են:
Ձև 2. Երկու լուսատու լուսավորում են քո դեմքը:
Ձև 3. Քո մազերի ոսկին փայլում էր արևի տակ:`,
    questions: [
      {
        num: 1,
        qEs: 'Define qué es una metáfora e identifica los elementos real (A) y figurado (B) en la Forma 1.',
        qHy: 'Սահմանի՛ր, թե ինչ է փոխաբերությունը, և 1-ին ձևում գտի՛ր իրական (A) և փոխաբերական (B) տարրերը։',
        modelAnswerEs: 'La metáfora es la identificación de un elemento real con otro imaginario basada en su semejanza. En «Tus ojos son luceros»: Término real (A) = ojos; Término figurado (B) = luceros.',
        modelAnswerHy: 'Փոխաբերությունը իրական և պատկերավոր տարրերի նույնացումն է նմանության հիման վրա։ «Tus ojos son luceros». Իրական տարր (A) = աչքեր, Պատկերավոր տարր (B) = լուսատուներ։',
      },
      {
        num: 2,
        qEs: 'Explica la estructura de las tres formas de metáfora recogidas en el cuaderno.',
        qHy: 'Բացատրի՛ր տետրում նշված փոխաբերության երեք ձևերի կառուցվածքը։',
        modelAnswerEs: '1) «A es B»: aparecen ambos unidos por el verbo ser. 2) «B sustituye a A»: solo aparece el término figurado B y el real se sobreentiende. 3) «B de A»: el término figurado se une al real mediante la preposición «de».',
        modelAnswerHy: '1) «A es B»՝ երկուսն էլ նշված են «ser» բայով։ 2) «B sustituye a A»՝ նշված է միայն պատկերավոր B-ն։ 3) «B de A»՝ պատկերավոր տարրը կապվում է իրականի հետ «de» նախդիրով։',
      },
      {
        num: 3,
        qEs: 'Analiza la Forma 3: ¿cuál es el término real y cuál el imaginario?',
        qHy: 'Վերլուծի՛ր 3-րդ ձևը. ո՞րն է իրական և ո՞րը պատկերավոր տարրը։',
        modelAnswerEs: 'En «El oro de tu pelo»: Término real (A) = pelo rubio; Término figurado (B) = oro.',
        modelAnswerHy: '«El oro de tu pelo» արտահայտության մեջ իրական տարրը մազերն են (A), իսկ պատկերավորը՝ ոսկին (B)։',
      },
      {
        num: 4,
        qEs: '¿Por qué la metáfora NO debe confundirse con la comparación?',
        qHy: 'Ինչո՞ւ փոխաբերությունը ՉՊԵՏՔ Է շփոթել համեմատության հետ։',
        modelAnswerEs: 'Porque la comparación utiliza un nexo explícito («como», «parece», «igual que»), mientras que la metáfora afirma directamente la identidad entre ambos términos sin nexos comparativos.',
        modelAnswerHy: 'Քանի որ համեմատությունն օգտագործում է «como» (ինչպես) բառը, իսկ փոխաբերությունը ուղղակիորեն նույնացնում է առանց այդ բառի։',
      },
      {
        num: 5,
        qEs: 'Crea una metáfora de tipo «B de A» con la palabra "nieve" y "canas".',
        qHy: 'Ստեղծի՛ր «B de A» տիպի փոխաբերություն «nieve» (ձյուն) և «canas» (ալեհեր մազեր) բառերով։',
        modelAnswerEs: '«La nieve de sus sienes delataba el paso de los años».',
        modelAnswerHy: '«La nieve de sus sienes» (նրա քունքերի ձյունը)։',
      },
    ],
  },
  {
    id: 11,
    titleEs: 'Billete 11: Personificación y comparación',
    titleHy: 'Տոմս 11. Անձնավորում և համեմատություն',
    themeEs: 'Personificación vs. Símil',
    themeHy: 'Անձնավորումն ընդդեմ համեմատության',
    duration: '10–12 min',
    textEs: `Texto 1: Las olas bailaban alegremente y el viento aplaudía en la playa.
Texto 2: El nadador se movía entre las olas rápido como un delfín salvaje.`,
    textHy: `Տեքստ 1. Ալիքները ուրախ պարում էին, իսկ քամին ծափահարում էր լողափին:
Տեքստ 2. Լողորդը շարժվում էր ալիքների մեջ արագ՝ վայրի դելֆինի պես:`,
    questions: [
      {
        num: 1,
        qEs: 'Identifica la figura literaria principal de cada texto.',
        qHy: 'Որոշի՛ր յուրաքանչյուր տեքստի գլխավոր գրական հնարքը։',
        modelAnswerEs: 'Texto 1: Personificación (las olas bailan y el viento aplaude). Texto 2: Comparación o símil (rápido como un delfín).',
        modelAnswerHy: 'Տեքստ 1՝ Անձնավորում (ալիքները պարում են, քամին՝ ծափ տալիս)։ Տեքստ 2՝ Համեմատություն (արագ՝ դելֆինի պես)։',
      },
      {
        num: 2,
        qEs: '¿Qué pregunta clave te debes hacer en el examen para reconocer una personificación?',
        qHy: 'Քննությանը ի՞նչ առանցքային հարց պետք է տաս ինքդ քեզ՝ անձնավորումը ճանաչելու համար։',
        modelAnswerEs: 'Preguntarse: «¿Un ser no humano (objeto, animal, planta o elemento natural) está realizando una acción o cualidad exclusivamente humana?».',
        modelAnswerHy: 'Հարցնել. «Արդյո՞ք ոչ մարդկային մի երևույթ մարդկային գործողություն կամ զգացմունք է ցուցաբերում»։',
      },
      {
        num: 3,
        qEs: '¿Qué nexos introducen habitualmente una comparación?',
        qHy: 'Ի՞նչ շաղկապներով/բառերով է սովորաբար կազմվում համեմատությունը։',
        modelAnswerEs: 'Mediante palabras comparativas como «como», «parece», «igual que», «semejante a», «tal como».',
        modelAnswerHy: 'Համեմատական բառերով՝ «como», «parece», «igual que», «semejante a»։',
      },
      {
        num: 4,
        qEs: 'Transforma la comparación del Texto 2 en una metáfora.',
        qHy: 'Վերածի՛ր Տեքստ 2-ի համեմատությունը փոխաբերության։',
        modelAnswerEs: '«El nadador era un delfín hendiendo las aguas del mar».',
        modelAnswerHy: '«Լողորդը մի դելֆին էր ծովի ջրերը ճեղքող» (առանց «como» բառի)։',
      },
      {
        num: 5,
        qEs: 'Escribe dos ejemplos breves de personificación con la palabra "ciudad".',
        qHy: 'Գրի՛ր անձնավորման երկու կարճ օրինակ «ciudad» (քաղաք) բառով։',
        modelAnswerEs: '1) «La ciudad duerme bajo la noche». 2) «La ciudad llora con la lluvia».',
        modelAnswerHy: '1) «La ciudad duerme» (քաղաքը քնած է)։ 2) «La ciudad llora» (քաղաքը լալիս է)։',
      },
    ],
  },
  {
    id: 12,
    titleEs: 'Billete 12: Hipérbole y antítesis',
    titleHy: 'Տոմս 12. Չափազանցություն և հակադրություն',
    themeEs: 'Hipérbole y Antítesis',
    themeHy: 'Չափազանցություն (հիպերբոլ) և հակադրություն',
    duration: '10–12 min',
    textEs: `1. Me muero de hambre si no como en un segundo.
2. Es tan corto el amor y tan largo el olvido.
3. Lloró un río de lágrimas amargas.
4. De día sonrío con luz, de noche lloro en sombras.`,
    textHy: `1. Սովից կմեռնեմ, եթե մի վայրկյանում չուտեմ:
2. Այնքան կարճ է սերը, և այնքան երկար՝ մոռացումը:
3. Դառը արցունքների մի գետ լացեց:
4. Ցերեկը ժպտում եմ լույսով, գիշերը լալիս եմ ստվերներում:`,
    questions: [
      {
        num: 1,
        qEs: 'Clasifica cada una de las cuatro oraciones en hipérbole o antítesis.',
        qHy: 'Դասակարգի՛ր չորս նախադասություններից յուրաքանչյուրը որպես հիպերբոլ կամ հակադրություն։',
        modelAnswerEs: '1) Hipérbole. 2) Antítesis (corto vs. largo). 3) Hipérbole. 4) Antítesis (día vs. noche, sonrío vs. lloro, luz vs. sombras).',
        modelAnswerHy: '1) Հիպերբոլ։ 2) Հակադրություն (կարճ / երկար)։ 3) Հիպերբոլ։ 4) Հակադրություն (ցերեկ/գիշեր, ժպտալ/լալ)։',
      },
      {
        num: 2,
        qEs: 'Define qué es una hipérbole y explica por qué la oración 1 lo es.',
        qHy: 'Սահմանի՛ր, թե ինչ է հիպերբոլը, և բացատրի՛ր, թե ինչու է 1-ին նախադասությունը հիպերբոլ։',
        modelAnswerEs: 'La hipérbole es una exageración intencionada de la realidad. En la oración 1, nadie muere biológicamente por esperar un segundo para comer.',
        modelAnswerHy: 'Հիպերբոլը իրականության միտումնավոր չափազանցումն է։ 1-ին նախադասության մեջ մարդը չի կարող կենսաբանորեն մեռնել մեկ վայրկյան սպասելուց։',
      },
      {
        num: 3,
        qEs: '¿En qué consiste la antítesis y qué palabras opuestas contiene la oración 2?',
        qHy: 'Ինչո՞ւմ է կայանում հակադրությունը (antítesis) և ի՞նչ հակառակ բառեր կան 2-րդ նախադասության մեջ։',
        modelAnswerEs: 'Consiste en contraponer dos ideas o palabras de significado contrario. En la oración 2 se enfrentan «corto» frente a «largo».',
        modelAnswerHy: 'Կայանում է հակառակ իմաստներ ունեցող բառերի բախման մեջ։ 2-րդ նախադասության մեջ հակադրվում են «corto» (կարճ) և «largo» (երկար) բառերը։',
      },
      {
        num: 4,
        qEs: '¿Por qué ambas figuras pertenecen al nivel semántico?',
        qHy: 'Ինչո՞ւ են երկու հնարքներն էլ պատկանում իմաստային մակարդակին (nivel semántico)։',
        modelAnswerEs: 'Porque trabajan directamente con el significado de las palabras, intensificándolo (hipérbole) o confrontando significados contrarios (antítesis).',
        modelAnswerHy: 'Քանի որ դրանք աշխատում են բառերի իմաստների հետ՝ ուժեղացնելով այն (հիպերբոլ) կամ հակադրելով հակառակ իմաստները (հակադրություն)։',
      },
      {
        num: 5,
        qEs: 'Inventa un ejemplo de antítesis utilizando "fuego" y "hielo".',
        qHy: 'Հորինի՛ր հակադրության օրինակ «fuego» (կրակ) և «hielo» (սառույց) բառերով։',
        modelAnswerEs: '«Tus palabras eran fuego ardiente, pero tu mirada era puro hielo».',
        modelAnswerHy: '«Քո խոսքերը այրող կրակ էին, բայց հայացքդ՝ մաքուր սառույց»։',
      },
    ],
  },
  {
    id: 13,
    titleEs: 'Billete 13: Parejas difíciles que no debes confundir',
    titleHy: 'Տոմս 13. Շփոթեցնող զույգեր, որոնք չի կարելի խառնել',
    themeEs: 'Distinción de recursos afines',
    themeHy: 'Նման հնարքների տարբերակում',
    duration: '10–12 min',
    textEs: `Pareja A:
- Quiero cantar, quiero reír, quiero soñar.
- Verde que te quiero verde.

Pareja B:
- Llegó, comió, durmió.
- Y llegó y comió y durmió.`,
    textHy: `Զույգ A.
- Quiero cantar, quiero reír, quiero soñar.
- Verde que te quiero verde.

Զույգ B.
- Llegó, comió, durmió.
- Y llegó y comió y durmió.`,
    questions: [
      {
        num: 1,
        qEs: 'Identifica las dos figuras de la Pareja A y explica en qué se diferencian.',
        qHy: 'Որոշի՛ր A զույգի երկու հնարքները և բացատրի՛ր դրանց տարբերությունը։',
        modelAnswerEs: 'La primera es Anáfora (repite «quiero» al principio de cada miembro). La segunda es Epanadiplosis (abre y cierra el mismo verso con la misma palabra «verde»).',
        modelAnswerHy: 'Առաջինը Anáfora է («quiero» բառը տողերի սկզբում)։ Երկրորդը Epanadiplosis է (սկսվում և ավարտվում է նույն «verde» բառով)։',
      },
      {
        num: 2,
        qEs: 'Identifica las dos figuras de la Pareja B y describe su diferencia formal.',
        qHy: 'Որոշի՛ր B զույգի երկու հնարքները և նկարագրի՛ր դրանց ձևական տարբերությունը։',
        modelAnswerEs: 'La primera es Asíndeton (suprime todas las conjunciones). La segunda es Polisíndeton (repite intencionadamente la conjunción «y»).',
        modelAnswerHy: 'Առաջինը Asíndeton է (հեռացնում է շաղկապները)։ Երկրորդը Polisíndeton է (կրկնում է «y» շաղկապը)։',
      },
      {
        num: 3,
        qEs: '¿Por qué la enumeración puede coincidir a veces con el asíndeton?',
        qHy: 'Ինչո՞ւ թվարկումը (enumeración) կարող է երբեմն համընկնել asíndeton-ի հետ։',
        modelAnswerEs: 'Porque si una lista sucesiva de elementos se escribe separada únicamente por comas sin ninguna conjunción copulativa, es al mismo tiempo enumeración y asíndeton.',
        modelAnswerHy: 'Քանի որ եթե տարրերի հաջորդական ցուցակը գրված է միայն ստորակետներով՝ առանց շաղկապների, այն միաժամանակ և՛ թվարկում է, և՛ asíndeton։',
      },
      {
        num: 4,
        qEs: 'Distingue: «Tus manos son de seda» frente a «Tus manos son como la seda».',
        qHy: 'Տարբերի՛ր. «Tus manos son de seda» և «Tus manos son como la seda»։',
        modelAnswerEs: '«Tus manos son de seda» es una Metáfora (identificación directa). «Tus manos son como la seda» es una Comparación (utiliza el nexo «como»).',
        modelAnswerHy: '«Tus manos son de seda»՝ Փոխաբերություն է (առանց como)։ «Tus manos son como la seda»՝ Համեմատություն է (կա como)։',
      },
      {
        num: 5,
        qEs: '¿Qué diferencia hay entre aliteración y paronomasia?',
        qHy: 'Ի՞նչ տարբերություն կա ալիտերացիայի և հարանունության (paronomasia) միջև։',
        modelAnswerEs: 'La aliteración repite sonidos o fonemas aislados (como /s/ o /r/); la paronomasia utiliza palabras enteras distintas que se parecen mucho en su sonido pero tienen significados dispares.',
        modelAnswerHy: 'Ալիտերացիան կրկնում է առանձին հնչյուններ (/s/), իսկ հարանունությունը գործածում է ամբողջական բառեր, որոնք հնչողությամբ գրեթե նույնն են, բայց իմաստով՝ տարբեր (hombre/nombre)։',
      },
    ],
  },
  {
    id: 14,
    titleEs: 'Billete 14: Gran síntesis literaria para el examen',
    titleHy: 'Տոմս 14. Քննության մեծ ընդհանրացում',
    themeEs: 'Síntesis global de 1.º ESO',
    themeHy: '1.º ESO-ի համապարփակ ամփոփում',
    duration: '10–12 min',
    textEs: `El viento de la noche aullaba como un lobo hambriento. Marta escuchó los pasos lentos, temerosos, sigilosos de su hermano. De repente, ¡pum!, la ventana chocó contra el marco. Su corazón latía con la fuerza de cien tambores.`,
    textHy: `Գիշերվա քամին ոռնում էր սոված գայլի պես: Մարթան լսեց եղբոր դանդաղ, վախեցած, գաղտագողի քայլերը: Հանկարծ, դմփո՛ց, պատուհանը հարվածեց շրջանակին: Նրա սիրտը բաբախում էր հարյուր թմբուկի ուժով:`,
    questions: [
      {
        num: 1,
        qEs: 'Localiza una personificación y una comparación en el texto.',
        qHy: 'Գտի՛ր անձնավորում և համեմատություն տեքստում։',
        modelAnswerEs: 'Personificación: «El viento aullaba» (aullar como acción viva). Comparación: «aullaba como un lobo hambriento» (utiliza el nexo «como»).',
        modelAnswerHy: 'Անձնավորում՝ «El viento aullaba» (քամին ոռնում էր)։ Համեմատություն՝ «como un lobo hambriento» (սոված գայլի պես)։',
      },
      {
        num: 2,
        qEs: 'Identifica la onomatopeya y clasifica a qué nivel pertenece.',
        qHy: 'Գտի՛ր ձայնանմանությունը (onomatopeya) և նշի՛ր, թե որ մակարդակին է պատկանում։',
        modelAnswerEs: 'La onomatopeya es «¡pum!». Pertenece al nivel fónico porque imita un sonido real.',
        modelAnswerHy: 'Ձայնանմանությունն է «¡pum!»-ը։ Պատկանում է հնչյունային մակարդակին (nivel fónico)։',
      },
      {
        num: 3,
        qEs: 'Localiza una enumeración con asíndeton en la descripción de los pasos.',
        qHy: 'Գտի՛ր թվարկում ասինդետոնով (asíndeton) քայլերի նկարագրության մեջ։',
        modelAnswerEs: '«pasos lentos, temerosos, sigilosos»: enumeración de adjetivos separados solo por comas sin la conjunción «y».',
        modelAnswerHy: '«lentos, temerosos, sigilosos». ածականների թվարկում է՝ առանց «y» շաղկապի, միայն ստորակետներով։',
      },
      {
        num: 4,
        qEs: 'Identifica la hipérbole del final del texto.',
        qHy: 'Գտի՛ր հիպերբոլը տեքստի վերջում։',
        modelAnswerEs: '«Su corazón latía con la fuerza de cien tambores»: exageración evidente del latido cardíaco.',
        modelAnswerHy: '«Su corazón latía con la fuerza de cien tambores» (սիրտը բաբախում էր հարյուր թմբուկի ուժով)։ Չափազանցություն է։',
      },
      {
        num: 5,
        qEs: '¿Qué ambiente emocional consigue crear el autor combinando estos recursos?',
        qHy: 'Ի՞նչ զգացմունքային մթնոլորտ է ստեղծում հեղինակը այս բոլոր հնարքների համադրությամբ։',
        modelAnswerEs: 'Crea un ambiente de tensión, misterio, miedo nocturno y gran intensidad dramática.',
        modelAnswerHy: 'Ստեղծում է լարվածության, առեղծվածի, գիշերային վախի և դրամատիկական հուզմունքի մթնոլորտ։',
      },
    ],
  },
];

export const fragmentosAnalisisData: FragmentoAnalisis[] = [
  {
    id: 1,
    textEs: 'Por tus ojos corre un río de tristeza.',
    textHy: 'Քո աչքերով հոսում է տխրության մի գետ։',
    options: ['Metáfora', 'Personificación', 'Comparación', 'Hipérbaton'],
    correctFigure: 'Metáfora',
    explanationEs: 'Metáfora: Se identifica el llanto o las lágrimas con un «río de tristeza» sin utilizar «como».',
    explanationHy: 'Փոխաբերություն (Metáfora). արցունքները նույնացվում են տխրության գետի հետ առանց «como» բառի։',
  },
  {
    id: 2,
    textEs: 'El reloj hacía tic, tac durante toda la noche.',
    textHy: 'Ժամացույցը ողջ գիշեր տիկ-տակ էր անում։',
    options: ['Onomatopeya', 'Aliteración', 'Paronomasia', 'Antítesis'],
    correctFigure: 'Onomatopeya',
    explanationEs: 'Onomatopeya: «Tic, tac» reproduce e imita directamente el sonido acústico del reloj.',
    explanationHy: 'Ձայնանմանություն (Onomatopeya). «tic, tac»-ը վերարտադրում է ժամացույցի իրական ձայնը։',
  },
  {
    id: 3,
    textEs: 'Temblaban las hojas, temblaban los árboles, temblaba la tierra.',
    textHy: 'Դողում էին տերևները, դողում էին ծառերը, դողում էր երկիրը։',
    options: ['Anáfora', 'Epanadiplosis', 'Asíndeton', 'Hipérbole'],
    correctFigure: 'Anáfora',
    explanationEs: 'Anáfora: Repetición de la palabra «temblaban/temblaba» al comienzo de tres miembros consecutivos.',
    explanationHy: 'Անաֆորա (Anáfora). «temblaban» բառի կրկնությունն է երեք հաջորդական անդամների սկզբում։',
  },
  {
    id: 4,
    textEs: 'La luna, el sol, las estrellas, las nubes.',
    textHy: 'Լուսինը, արևը, աստղերը, ամպերը։',
    options: ['Enumeración y asíndeton', 'Polisíndeton', 'Metáfora', 'Pleonasmo'],
    correctFigure: 'Enumeración y asíndeton',
    explanationEs: 'Enumeración y asíndeton: Lista de elementos celestes separados únicamente por comas sin la conjunción «y».',
    explanationHy: 'Թվարկում և ասինդետոն. երկնային մարմինների ցուցակ՝ առանց շաղկապների, միայն ստորակետներով։',
  },
  {
    id: 5,
    textEs: 'Y corre y salta y ríe y canta.',
    textHy: 'Ե՛վ վազում է, և՛ ցատկում է, և՛ ծիծաղում է, և՛ երգում է։',
    options: ['Polisíndeton', 'Asíndeton', 'Anáfora', 'Epanadiplosis'],
    correctFigure: 'Polisíndeton',
    explanationEs: 'Polisíndeton: Repetición insistente de la conjunción «y» antes de cada verbo.',
    explanationHy: 'Պոլիսինդետոն (Polisíndeton). «y» շաղկապի շարունակական և միտումնավոր կրկնություն։',
  },
  {
    id: 6,
    textEs: 'Caminó, miró, escuchó, esperó.',
    textHy: 'Քայլեց, նայեց, լսեց, սպասեց։',
    options: ['Asíndeton', 'Polisíndeton', 'Hipérbole', 'Paronomasia'],
    correctFigure: 'Asíndeton',
    explanationEs: 'Asíndeton: Supresión voluntaria de conjunciones para dar rapidez a la serie de verbos.',
    explanationHy: 'Ասինդետոն (Asíndeton). շաղկապների բացթողում՝ գործողություններին արագություն հաղորդելու համար։',
  },
  {
    id: 7,
    textEs: 'Dulce era la voz de aquella niña.',
    textHy: 'Քաղցր էր այդ աղջկա ձայնը։',
    options: ['Hipérbaton', 'Antítesis', 'Onomatopeya', 'Pleonasmo'],
    correctFigure: 'Hipérbaton',
    explanationEs: 'Hipérbaton: Alteración del orden sintáctico normal («La voz de aquella niña era dulce»).',
    explanationHy: 'Հիպերբատոն (Hipérbaton). բառերի սովորական կարգի խախտում (սովորական՝ «La voz de aquella niña era dulce»)։',
  },
  {
    id: 8,
    textEs: 'Lo escuché con mis propios oídos.',
    textHy: 'Լսեցի իմ սեփական ականջներով։',
    options: ['Pleonasmo', 'Metáfora', 'Comparación', 'Aliteración'],
    correctFigure: 'Pleonasmo',
    explanationEs: 'Pleonasmo: Redundancia intencionada para dar fuerza testimonial y enfática a la afirmación.',
    explanationHy: 'Պլեոնազմ (Pleonasmo). ավելորդ բառերի գործածություն՝ ասելիքն ավելի շեշտելու և ընդգծելու համար։',
  },
  {
    id: 9,
    textEs: 'Pasa el río entre las rosas, rozando ramas.',
    textHy: 'Անցնում է գետը վարդերի միջով՝ շոշափելով ճյուղերը։',
    options: ['Aliteración', 'Onomatopeya', 'Asíndeton', 'Metáfora'],
    correctFigure: 'Aliteración',
    explanationEs: 'Aliteración: Repetición notoria del fonema /r/ («río, rosas, rozando, ramas») para evocar el roce y fluir del agua.',
    explanationHy: 'Ալիտերացիա (Aliteración). «r» հնչյունի ընդգծված կրկնություն (río, rosas, rozando, ramas)։',
  },
  {
    id: 10,
    textEs: 'La vida es un viaje sin mapa.',
    textHy: 'Կյանքը մի ճամփորդություն է առանց քարտեզի։',
    options: ['Metáfora', 'Comparación', 'Personificación', 'Hipérbole'],
    correctFigure: 'Metáfora',
    explanationEs: 'Metáfora: Estructura «A es B», identificando la vida con un viaje directamente sin usar «como».',
    explanationHy: 'Փոխաբերություն (Metáfora). «A es B» կառուցվածք՝ կյանքը նույնացվում է ճամփորդության հետ առանց «como»-ի։',
  },
  {
    id: 11,
    textEs: 'Sueño con la luz. Sueño con la paz. Sueño con la vida.',
    textHy: 'Երազում եմ լույսի մասին: Երազում եմ խաղաղության մասին: Երազում եմ կյանքի մասին:',
    options: ['Anáfora', 'Epanadiplosis', 'Polisíndeton', 'Antítesis'],
    correctFigure: 'Anáfora',
    explanationEs: 'Anáfora: Reiteración de las palabras iniciales «Sueño con...» al comienzo de tres oraciones consecutivas.',
    explanationHy: 'Անաֆորա (Anáfora). «Sueño con...» բառերի կրկնությունն է երեք նախադասությունների սկզբում։',
  },
  {
    id: 12,
    textEs: 'Luna, acompáñame esta noche, luna.',
    textHy: 'Լուսի՛ն, ուղեկցի՛ր ինձ այս գիշեր, լուսի՛ն։',
    options: ['Epanadiplosis', 'Anáfora', 'Metáfora', 'Paronomasia'],
    correctFigure: 'Epanadiplosis',
    explanationEs: 'Epanadiplosis: Empieza y termina el mismo verso o enunciado con la misma palabra («Luna... luna»).',
    explanationHy: 'Էպանադիպլոսիս (Epanadiplosis). նույն «luna» բառը տողի սկզբում և վերջում։',
  },
  {
    id: 13,
    textEs: 'Entre la casa y la caza hay una letra.',
    textHy: 'Տան և որսի միջև մեկ տառ է (casa / caza)։',
    options: ['Paronomasia', 'Aliteración', 'Pleonasmo', 'Hipérbole'],
    correctFigure: 'Paronomasia',
    explanationEs: 'Paronomasia: Juego de palabras fónicamente muy semejantes («casa / caza») con significados distintos.',
    explanationHy: 'Հարանունություն (Paronomasia). նմանահունչ բառերի խաղ՝ «casa / caza» (տուն / որս)։',
  },
  {
    id: 14,
    textEs: 'Tus labios, dos rosas rojas.',
    textHy: 'Քո շուրթերը՝ երկու կարմիր վարդ։',
    options: ['Metáfora', 'Comparación', 'Personificación', 'Antítesis'],
    correctFigure: 'Metáfora',
    explanationEs: 'Metáfora: Se identifican los labios con dos rosas sin utilizar ningún nexo comparativo.',
    explanationHy: 'Փոխաբերություն (Metáfora). շուրթերը նույնացվում են երկու վարդի հետ առանց «como» բառի։',
  },
  {
    id: 15,
    textEs: 'Había mesas, sillas, bancos, cuadros y lámparas.',
    textHy: 'Կային սեղաններ, աթոռներ, նստարաններ, նկարներ և լամպեր։',
    options: ['Enumeración', 'Asíndeton puro', 'Polisíndeton', 'Aliteración'],
    correctFigure: 'Enumeración',
    explanationEs: 'Enumeración: Acumulación ordenada de elementos de la misma clase (muebles y objetos de una sala).',
    explanationHy: 'Թվարկում (Enumeración). միևնույն դասի առարկաների հաջորդական շարք։',
  },
  {
    id: 16,
    textEs: '¡Crash! El cristal se rompió.',
    textHy: 'Կրա՛խ։ Ապակին կոտրվեց։',
    options: ['Onomatopeya', 'Aliteración', 'Paronomasia', 'Hipérbaton'],
    correctFigure: 'Onomatopeya',
    explanationEs: 'Onomatopeya: «¡Crash!» imita el sonido real de la rotura violenta del cristal.',
    explanationHy: 'Ձայնանմանություն (Onomatopeya). «¡Crash!»-ը վերարտադրում է ապակու կոտրվելու իրական ձայնը։',
  },
];

export const preguntasDesarrolloData: PreguntaDesarrollo[] = [
  {
    id: 1,
    questionEs: '¿Cuáles son las características principales de la literatura popular y por qué se considera una manifestación cultural del pueblo?',
    questionHy: 'Որո՞նք են ժողովրդական գրականության գլխավոր հատկանիշները և ինչո՞ւ է այն համարվում ժողովրդի մշակութային դրսևորում։',
    modelAnswerEs: `La literatura popular se caracteriza principalmente por ser anónima, transmitirse de forma oral de generación en generación y presentar múltiples variantes o modificaciones a lo largo del tiempo. Además, suele caracterizarse por la brevedad, el uso de un lenguaje sencillo y accesible, y a menudo va acompañada de ritmo, música o estribillos.

Se considera una manifestación cultural del pueblo porque no pertenece a un autor individual concreto, sino a la memoria colectiva de la comunidad. Refleja las creencias, miedos, valores y tradiciones de la sociedad que la conserva y la recrea en cada narración.`,
    modelAnswerHy: `Ժողովրդական գրականությունը բնորոշվում է նրանով, որ անանուն է (anónima), փոխանցվում է բանավոր սերնդեսերունդ և ժամանակի ընթացքում կրում է փոփոխություններ ու տարբերակներ։ Այն սովորաբար կարճ է, ունի պարզ լեզու և հաճախ ուղեկցվում է երաժշտությամբ ու կրկներգերով։

Այն համարվում է ժողովրդի մշակութային դրսևորում, քանի որ չի պատկանում մեկ անհատի, այլ հանրության հավաքական հիշողությանը՝ արտացոլելով հասարակության հավատալիքները, արժեքներն ու ավանդույթները։`,
  },
  {
    id: 2,
    questionEs: 'Explica con detalle las diferencias entre la literatura popular y la literatura culta y señala alguna semejanza.',
    questionHy: 'Մանրամասն բացատրի՛ր տարբերությունները ժողովրդական և հեղինակային գրականության միջև և նշի՛ր որևէ նմանություն։',
    modelAnswerEs: `Las diferencias principales radican en la autoría, la transmisión y el texto:
1) Autoría: La popular es anónima y colectiva; la culta tiene un autor conocido identificado.
2) Transmisión: La popular se transmite oralmente de boca en boca; la culta lo hace principalmente por escrito mediante libros.
3) Estabilidad: El texto popular sufre variaciones constantes; el culto permanece fijo y estable.
4) Lenguaje: La popular usa un lenguaje directo y sencillo; la culta un lenguaje elaborado y cuidado.

Como semejanza, ambas son formas de arte literario que pueden escribirse en prosa o en verso y utilizan recursos expresivos para conmover al receptor.`,
    modelAnswerHy: `Հիմնական տարբերությունները վերաբերում են հեղինակին, փոխանցմանը և տեքստին.
1) Հեղինակ. Ժողովրդականը անանուն է, հեղինակայինը՝ հայտնի գրողի անունով։
2) Փոխանցում. Ժողովրդականը բանավոր է, հեղինակայինը՝ գրավոր։
3) Տեքստ. Ժողովրդականը փոփոխվում է, հեղինակայինը՝ հաստատուն է։
4) Լեզու. Ժողովրդականը պարզ է, հեղինակայինը՝ մշակված։

Նմանություն՝ երկուսն էլ գրական արվեստ են, կարող են լինել արձակ կամ չափածո և օգտագործում են գեղարվեստական հնարքներ։`,
  },
  {
    id: 3,
    questionEs: '¿Qué es el lenguaje literario y qué lo diferencia del lenguaje cotidiano? Incluye ejemplos.',
    questionHy: 'Ի՞նչ է գրական լեզուն և ինչո՞վ է տարբերվում առօրյա լեզվից։ Բե՛ր օրինակներ։',
    modelAnswerEs: `El lenguaje literario es una forma especial y estética de utilizar las palabras para transmitir emociones, sensaciones e imágenes bellas, dando importancia tanto al mensaje como a la forma de expresarlo (función poética).

Se diferencia del lenguaje cotidiano en que este último busca una comunicación rápida, práctica y objetiva de datos («Está lloviendo mucho»), mientras que el literario embellece la realidad mediante figuras retóricas («El cielo llora lágrimas de plata sobre los tejados»).`,
    modelAnswerHy: `Գրական լեզուն բառերի հատուկ, գեղագիտական կիրառությունն է՝ զգացմունքներ և գեղեցիկ պատկերներ ստեղծելու համար, որտեղ կարևոր է ոչ միայն ասելիքը, այլև այն ասելու ձևը։

Առօրյա լեզվից տարբերվում է նրանով, որ առօրյա խոսքը նպատակ ունի արագ և ուղղակի տեղեկություն տալ («Սաստիկ անձրև է գալիս»), իսկ գրական լեզուն պատկերավորում է իրականությունը («Երկինքը արծաթե արցունքներ է թափում տանիքներին»)։`,
  },
  {
    id: 4,
    questionEs: 'Explica las diferencias entre el verso y la prosa. Describe cómo se reconocen en un texto.',
    questionHy: 'Բացատրի՛ր տարբերությունները չափածոյի և արձակի միջև։ Նկարագրի՛ր, թե ինչպես են ճանաչվում տեքստում։',
    modelAnswerEs: `El verso se organiza en líneas independientes y sucesivas que presentan un ritmo marcado, una métrica determinada (número de sílabas) y a menudo rima. Visualmente no ocupa todo el ancho de la página y se agrupa en estrofas.

La prosa, en cambio, se escribe a renglón seguido ocupando todo el ancho de la página, organizada en oraciones y párrafos. No está sometida obligatoriamente a una medida métrica ni a rima, aunque también puede contener figuras literarias.`,
    modelAnswerHy: `Չափածոն (verso) կազմակերպված է առանձին կարճ տողերով, որոնք ունեն հստակ ռիթմ, վանկերի չափ (métrica) և հաճախ հանգ։ Տեսողականորեն այն չի զբաղեցնում էջի ողջ լայնությունը և բաժանվում է տների։

Արձակը (prosa) գրվում է ամբողջական տողերով, էջի ողջ լայնությամբ՝ կազմված նախադասություններից և պարբերություններից՝ առանց պարտադիր չափի կամ հանգի։`,
  },
  {
    id: 5,
    questionEs: '¿Qué es un romance y cuáles son sus características métricas?',
    questionHy: 'Ի՞նչ է ռոմանսը և որո՞նք են նրա տաղաչափական հատկանիշները։',
    modelAnswerEs: `El romance es una composición poética narrativa característica de la literatura tradicional española. Nació de los cantares de gesta medievales y se cantaba o recitaba acompañado de música.

Sus características métricas son tres:
1) Está formado por una serie indefinida de versos octosílabos (8 sílabas métricas, arte menor).
2) Los versos pares presentan rima asonante.
3) Los versos impares quedan libres o sueltos (sin rima).`,
    modelAnswerHy: `Ռոմանսը իսպանական ավանդական գրականության պատմողական բանաստեղծական տեսակ է, որը ծնվել է միջնադարյան հերոսավեպերից և արտասանվել կամ երգվել է երաժշտության ներքո։

Նրա տաղաչափական 3 հատկանիշներն են.
1) Կազմված է անսահմանափակ թվով ութվանկ (8 sílabas - octosílabos) տողերից։
2) Զույգ տողերն ունեն ձայնավորային հանգ (rima asonante)։
3) Կենտ տողերը մնում են ազատ (libres)՝ առանց հանգի։`,
  },
  {
    id: 6,
    questionEs: 'Explica las diferencias entre un cuento, una leyenda y un mito. Pon ejemplos inventados.',
    questionHy: 'Բացատրի՛ր տարբերությունները պատմվածքի, լեգենդի և առասպելի միջև։ Բե՛ր հորինված օրինակներ։',
    modelAnswerEs: `1) Mito: Narración protagonizada por dioses o seres sobrenaturales que explica el origen del mundo o fenómenos naturales. Ejemplo: «El dios Sol lloró y sus lágrimas crearon los océanos».
2) Leyenda: Narración tradicional basada en un lugar o personaje real a la que se añaden elementos fantásticos o milagrosos. Ejemplo: «En la cueva del castillo vive el fantasma de un caballero que protege el tesoro».
3) Cuento: Narración breve de ficción con pocos personajes y argumento sencillo. Ejemplo: «Un ratón ingenioso engañó al gato fingiendo ser un trozo de pan».`,
    modelAnswerHy: `1) Առասպել (Mito)՝ աստվածների մասին պատմություն, որը բացատրում է աշխարհի ու բնության ծագումը։ Օրինակ՝ Արևի աստվածը լաց եղավ, և նրա արցունքներից առաջացան օվկիանոսները։
2) Լեգենդ (Leyenda)՝ իրական վայրի կամ անձի վրա հիմնված պատմություն՝ գերբնական տարրերով։ Օրինակ՝ Դղյակի քարանձավում ապրում է ասպետի ուրվականը, որը պաշտպանում է գանձը։
3) Պատմվածք/հեքիաթ (Cuento)՝ կարճ հորինվածք քիչ հերոսներով և պարզ սյուժեով։ Օրինակ՝ Խելացի մուկը խաբեց կատվին՝ ձևանալով հացի փշուր։`,
  },
  {
    id: 7,
    questionEs: '¿Qué son las figuras literarias y cómo se pueden clasificar? Explica diferentes ejemplos.',
    questionHy: 'Ի՞նչ են գրական հնարքները և ինչպե՞ս են դասակարգվում։ Բացատրի՛ր օրինակներով։',
    modelAnswerEs: `Las figuras literarias son recursos expresivos que los escritores utilizan para embellecer el lenguaje, intensificar el mensaje y provocar emociones o efectos sonoros.

Se clasifican en tres niveles:
1) Nivel fónico: Juegan con los sonidos (Aliteración: «Susana susurra suavemente»; Onomatopeya: «Tic-tac»).
2) Nivel morfosintáctico: Modifican el orden o la repetición de palabras (Anáfora: «Quiero cantar, quiero reír»; Asíndeton: «Llegó, vio, venció»; Hipérbaton: «Del salón el arpa se veía»).
3) Nivel semántico: Modifican los significados (Metáfora: «Tus ojos son estrellas»; Personificación: «El sol sonríe»; Hipérbole: «Me muero de risa»).`,
    modelAnswerHy: `Գրական հնարքները արտահայտչական միջոցներ են, որոնցով հեղինակը խոսքը դարձնում է գեղեցիկ, պատկերավոր և հնչեղ։

Դասակարգվում են 3 մակարդակի.
1) Հնչյունային (fónico)՝ խաղում են ձայների հետ (ալիտերացիա, օնոմատոպեա, պարոնոմասիա)։
2) Շարահյուսական (morfosintáctico)՝ փոփոխում են բառերի կարգն ու կառուցվածքը (անաֆորա, հիպերբատոն, ասինդետոն, պոլիսինդետոն)։
3) Իմաստային (semántico)՝ փոփոխում են իմաստները (փոխաբերություն, անձնավորում, համեմատություն, չափազանցություն, հակադրություն)։`,
  },
  {
    id: 8,
    questionEs: '¿Qué es una metáfora y cómo se identifican sus dos términos? Explica sus estructuras.',
    questionHy: 'Ի՞նչ է փոխաբերությունը և ինչպե՞ս են ճանաչվում նրա երկու տարրերը։ Բացատրի՛ր նրա կառուցվածքները։',
    modelAnswerEs: `La metáfora consiste en identificar un término real (A) con un término figurado o imaginario (B) por la relación de semejanza que existe entre ambos, sin emplear nexos comparativos como «como».

Sus tres estructuras habituales son:
1) «A es B»: Ambos términos aparecen unidos por el verbo ser («Tus ojos son dos luceros»).
2) «B sustituye a A»: Solo aparece el término figurado B y el real A se deduce por el contexto («Dos luceros iluminaban su rostro», donde luceros sustituye a ojos).
3) «B de A»: El término figurado se enlaza con el real mediante la preposición «de» («El oro de tu pelo», donde oro es B y pelo es A).`,
    modelAnswerHy: `Փոխաբերությունը իրական (A) և պատկերավոր (B) տարրերի նույնացումն է նրանց նմանության հիման վրա՝ առանց «como» (ինչպես) բառի։

Երեք հիմնական կառուցվածքները.
1) «A es B»՝ երկու տարրերն էլ առկա են («Tus ojos son luceros»)։
2) «B sustituye a A»՝ նշված է միայն պատկերավոր B տարրը («Dos luceros iluminan su rostro»)։
3) «B de A»՝ պատկերավոր տարրը միանում է իրականին «de» նախդիրով («El oro de tu pelo»)։`,
  },
  {
    id: 9,
    questionEs: '¿Qué diferencia existe entre anáfora, epanadiplosis y polisíndeton?',
    questionHy: 'Ի՞նչ տարբերություն կա anáfora-ի, epanadiplosis-ի և polisíndeton-ի միջև։',
    modelAnswerEs: `Aunque las tres son figuras de repetición del nivel morfosintáctico o fónico, su mecanismo es distinto:
- Anáfora: Repite una o varias palabras al comienzo de varios versos o enunciados seguidos («Quiero paz, / quiero luz, / quiero vida»).
- Epanadiplosis: Repite la misma palabra al principio y al final del mismo verso o cláusula («Verde que te quiero verde»).
- Polisíndeton: No repite palabras léxicas cualquiera, sino específicamente conjunciones gramaticales (como «y» o «ni») de forma continuada («Y llora y grita y salta»).`,
    modelAnswerHy: `Թեև երեքն էլ կրկնության հնարքներ են, դրանց գործառույթը տարբեր է.
- Anáfora՝ կրկնում է նույն բառը մի քանի հաջորդական տողերի ՍԿԶԲՈՒՄ («Quiero... / Quiero...»)։
- Epanadiplosis՝ նույն բառով ՍԿՍՈՒՄ և ԱՎԱՐՏՈՒՄ է նույն տողը («Verde... verde»)։
- Polisíndeton՝ կրկնում է հատկապես քերականական ՇԱՂԿԱՊՆԵՐԸ («Y corre y salta y canta»)։`,
  },
  {
    id: 10,
    questionEs: '¿En qué se diferencian la aliteración, la onomatopeya y la paronomasia?',
    questionHy: 'Ինչո՞վ են տարբերվում ալիտերացիան, ձայնանմանությունը և հարանունությունը (paronomasia)։',
    modelAnswerEs: `Las tres pertenecen al nivel fónico pero operan con sonidos de manera diferente:
1) Aliteración: Es la repetición voluntaria de un mismo sonido consonántico o vocálico en palabras cercanas para evocar una sensación («Susana susurra suavemente», repite la /s/).
2) Onomatopeya: Es una palabra que imita directamente un ruido real de animales, cosas o naturaleza («¡Pum!», «Tic-tac», «Miau»).
3) Paronomasia: Es el empleo cercano de palabras completas con pronunciación muy parecida pero con significados totalmente distintos («El hombre es un hombre de nombre», hombre / nombre).`,
    modelAnswerHy: `Երեքն էլ հնչյունային մակարդակից են, բայց գործում են տարբեր կերպ.
1) Aliteración՝ նույն հնչյունի կրկնությունն է բառերում («s» հնչյունը շշուկի համար)։
2) Onomatopeya՝ իրական ձայնը նմանակող բառ է («pum», «tic-tac»)։
3) Paronomasia՝ արտասանությամբ գրեթե նույնական, բայց իմաստով տարբեր բառերի հարակից գործածությունն է («hombre / nombre»)։`,
  },
];
