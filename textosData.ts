import { TextAnalysisItem } from './types';

export const textosData: TextAnalysisItem[] = [
  {
    id: 'ejercicio-9-romance',
    titleEs: 'EJERCICIO 9. Lee y responde — Romance',
    titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Կարդա՛ և պատասխանի՛ր — Ռոմանս',
    type: 'Poema (Romance didáctico)',
    contentEs: `El viento canta muy lento,
la noche cubre la tierra.
Las nubes cruzan los montes
y sueñan con la tormenta.`,
    contentHy: `Քամին երգում է շատ դանդաղ,
գիշերը ծածկում է երկիրը:
Ամպերն անցնում են սարերի վրայով
և երազում փոթորկի մասին:`,
    noteEs: 'Texto original creado para practicar las características del romance.',
    noteHy: 'Ուսուցողական բնօրինակ հատված՝ ռոմանսի հատկանիշները վերլուծելու համար։',
    questions: [
      {
        id: 1,
        qEs: '¿Está escrito en prosa o en verso?',
        qHy: 'Արձա՞կ է գրված, թե՞ չափածո։',
        modelAnswerEs: 'En verso.',
        modelAnswerHy: 'Չափածո (տողերով)։',
      },
      {
        id: 2,
        qEs: '¿Cuántos versos tiene?',
        qHy: 'Քանի՞ տող ունի։',
        modelAnswerEs: 'Cuatro versos.',
        modelAnswerHy: 'Չորս տող։',
      },
      {
        id: 3,
        qEs: '¿Cuántas sílabas métricas tiene el primer verso?',
        qHy: 'Քանի՞ վանկ ունի առաջին տողը։',
        modelAnswerEs: 'Ocho sílabas métricas (El-vien-to-can-ta-muy-len-to).',
        modelAnswerHy: 'Ութ վանկ (օկտոսիլաբո)։',
      },
      {
        id: 4,
        qEs: '¿Cuántas sílabas métricas tiene el segundo verso?',
        qHy: 'Քանի՞ վանկ ունի երկրորդ տողը։',
        modelAnswerEs: 'Ocho sílabas métricas (la-no-che-cu-bre-la-tier-ra).',
        modelAnswerHy: 'Ութ վանկ։',
      },
      {
        id: 5,
        qEs: '¿Qué versos presentan rima asonante?',
        qHy: 'Ո՞ր տողերն ունեն ձայնավորային հանգ։',
        modelAnswerEs: 'Los versos segundo y cuarto (versos pares: tierra / tormenta).',
        modelAnswerHy: 'Երկրորդ և չորրորդ տողերը (զույգ տողերը)։',
      },
      {
        id: 6,
        qEs: '¿Qué vocales se repiten en la rima?',
        qHy: 'Ո՞ր ձայնավորներն են կրկնվում հանգում։',
        modelAnswerEs: 'Las vocales e-a (ti-e-rra / tor-men-ta).',
        modelAnswerHy: '«e - a» ձայնավորները (tierra / tormenta)։',
      },
      {
        id: 7,
        qEs: '¿Qué nombre reciben los versos de ocho sílabas?',
        qHy: 'Ի՞նչ անվանում ունեն ութվանկ տողերը։',
        modelAnswerEs: 'Versos octosílabos (de arte menor).',
        modelAnswerHy: 'Octosílabos (ութվանկ տողեր)։',
      },
      {
        id: 8,
        qEs: '¿Qué características de un romance puedes observar?',
        qHy: 'Ռոմանսի ի՞նչ հատկանիշներ կարող ես նկատել։',
        modelAnswerEs: 'Versos octosílabos, rima asonante en los versos pares y versos impares que quedan libres.',
        modelAnswerHy: 'Ութվանկ տողեր, ձայնավորային հանգ զույգ տողերում և ազատ կենտ տողեր։',
      },
      {
        id: 9,
        qEs: 'Identifica una personificación.',
        qHy: 'Գտի՛ր անձնավորում։',
        modelAnswerEs: '«El viento canta» o «Las nubes sueñan».',
        modelAnswerHy: '«El viento canta» (քամին երգում է) կամ «Las nubes sueñan» (ամպերը երազում են)։',
      },
      {
        id: 10,
        qEs: 'Explica por qué esa expresión es una personificación.',
        qHy: 'Բացատրի՛ր, թե ինչու է այդ արտահայտությունը անձնավորում։',
        modelAnswerEs: 'Porque el viento y las nubes realizan acciones humanas como cantar y soñar.',
        modelAnswerHy: 'Քանի որ քամուն և ամպերին վերագրված են մարդկային գործողություններ (երգել, երազել)։',
      },
      {
        id: 11,
        qEs: '¿Qué elementos de la naturaleza aparecen?',
        qHy: 'Բնության ի՞նչ տարրեր են հանդիպում տեքստում։',
        modelAnswerEs: 'El viento, la noche, la tierra, las nubes, los montes y la tormenta.',
        modelAnswerHy: 'Քամին, գիշերը, երկիրը, ամպերը, սարերը և փոթորիկը։',
      },
      {
        id: 12,
        qEs: '¿Qué sensación o ambiente transmite el texto?',
        qHy: 'Ի՞նչ զգացողություն կամ մթնոլորտ է փոխանցում տեքստը։',
        modelAnswerEs: 'Un ambiente nocturno, misterioso, tranquilo y con expectación ante la tormenta.',
        modelAnswerHy: 'Գիշերային, խորհրդավոր, հանդարտ, բայց փոթորկի սպասումով լի մթնոլորտ։',
      },
    ],
  },
  {
    id: 'ejercicio-10-leyenda',
    titleEs: 'EJERCICIO 10. Lee y responde — Leyenda',
    titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Կարդա՛ և պատասխանի՛ր — Լեգենդ',
    type: 'Prosa (Leyenda: La luz de la torre)',
    contentEs: `En un pequeño pueblo, los habitantes contaban una historia sobre una torre muy antigua.
Decían que, cuando llegaba la medianoche, una luz azul aparecía en la ventana más alta. Nadie vivía allí desde hacía muchos años.
Una noche, una niña se acercó a la torre y escuchó una voz que decía:
—No tengas miedo. La luz protege a los viajeros perdidos.
Al día siguiente, la niña contó lo sucedido, pero nadie pudo explicar de dónde venía aquella voz.`,
    contentHy: `Մի փոքրիկ գյուղում բնակիչները պատմություն էին պատմում մի շատ հին աշտարակի մասին։
Նրանք ասում էին, որ երբ գալիս էր կեսգիշերը, ամենաբարձր պատուհանում մի կապույտ լույս էր հայտնվում։ Շատ տարիներ այնտեղ ոչ ոք չէր ապրում։
Մի գիշեր մի աղջիկ մոտեցավ աշտարակին և լսեց մի ձայն, որն ասում էր.
— Մի՛ վախեցիր։ Լույսը պաշտպանում է մոլորված ճամփորդներին։
Հաջորդ օրը աղջիկը պատմեց պատահածը, բայց ոչ ոք չկարողացավ բացատրել, թե որտեղից էր գալիս այդ ձայնը։`,
    noteEs: 'Texto original de práctica.',
    noteHy: 'Ուսումնական բնօրինակ տեքստ։',
    questions: [
      {
        id: 1,
        qEs: '¿Qué tipo de narración es?',
        qHy: 'Պատմվածքի ի՞նչ տեսակ է։',
        modelAnswerEs: 'Una leyenda.',
        modelAnswerHy: 'Լեգենդ (ավանդազրույց)։',
      },
      {
        id: 2,
        qEs: '¿Qué elementos podrían ser reales?',
        qHy: 'Ի՞նչ տարրեր կարող են իրական լինել։',
        modelAnswerEs: 'El pueblo, la torre antigua y los habitantes.',
        modelAnswerHy: 'Գյուղը, հին աշտարակը և բնակիչները։',
      },
      {
        id: 3,
        qEs: '¿Qué elementos son fantásticos?',
        qHy: 'Ի՞նչ տարրեր են երևակայական/գերբնական։',
        modelAnswerEs: 'La luz azul misteriosa y la voz que surge de una torre deshabitada.',
        modelAnswerHy: 'Առեղծվածային կապույտ լույսը և դատարկ աշտարակից եկող անբացատրելի ձայնը։',
      },
      {
        id: 4,
        qEs: '¿Está escrito en prosa o en verso?',
        qHy: 'Արձա՞կ է գրված, թե՞ չափածո։',
        modelAnswerEs: 'En prosa.',
        modelAnswerHy: 'Արձակ։',
      },
      {
        id: 5,
        qEs: '¿Dónde sucede la historia?',
        qHy: 'Որտե՞ղ է տեղի ունենում պատմությունը։',
        modelAnswerEs: 'En un pequeño pueblo, junto a una torre muy antigua.',
        modelAnswerHy: 'Մի փոքրիկ գյուղում՝ հին աշտարակի մոտ։',
      },
      {
        id: 6,
        qEs: '¿Quién es el personaje principal?',
        qHy: 'Ո՞վ է գլխավոր հերոսը։',
        modelAnswerEs: 'Una niña.',
        modelAnswerHy: 'Մի փոքրիկ աղջիկ։',
      },
      {
        id: 7,
        qEs: '¿Por qué puede considerarse una leyenda?',
        qHy: 'Ինչո՞ւ այն կարող է համարվել լեգենդ։',
        modelAnswerEs: 'Porque parte de un lugar concreto real (la torre del pueblo) y añade sucesos sobrenaturales tradicionales.',
        modelAnswerHy: 'Քանի որ հիմնված է կոնկրետ վայրի վրա (գյուղի հին աշտարակը) և ունի գերբնական/առեղծվածային դրվագներ։',
      },
      {
        id: 8,
        qEs: '¿Cuál es la diferencia entre esta leyenda y un mito?',
        qHy: 'Ո՞րն է այս լեգենդի և առասպելի տարբերությունը։',
        modelAnswerEs: 'El mito está protagonizado por dioses para explicar el origen del cosmos, mientras que la leyenda se centra en un lugar real y misterios locales.',
        modelAnswerHy: 'Առասպելը պատմում է աստվածների մասին և բացատրում աշխարհի ծագումը, իսկ լեգենդը կապված է իրական վայրի և տեղական առեղծվածի հետ։',
      },
      {
        id: 9,
        qEs: '¿Cuántos personajes humanos individuales intervienen directamente en la acción narrada?',
        qHy: 'Քանի՞ անհատ մարդկային կերպար է անմիջականորեն մասնակցում գործողությանը։',
        modelAnswerEs: 'Un personaje humano individual (la niña).',
        modelAnswerHy: 'Մեկ անհատ հերոս (աղջիկը)։',
      },
      {
        id: 10,
        qEs: 'Escribe un resumen de tres líneas.',
        qHy: 'Գրի՛ր երեք տողանոց ամփոփում։',
        modelAnswerEs: 'En un pueblo con una torre abandonada, una niña se acerca a medianoche y escucha una voz protectora unida a una misteriosa luz azul que nadie puede explicar.',
        modelAnswerHy: 'Գյուղի լքված աշտարակում կեսգիշերին կապույտ լույս է երևում։ Մի աղջիկ մոտենում է և լսում պաշտպանող ձայն, որի ծագումը ոչ ոք չի կարողանում բացատրել։',
      },
    ],
  },
  {
    id: 'ejercicio-11-mito',
    titleEs: 'EJERCICIO 11. Lee y responde — Mito',
    titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 11. Կարդա՛ և պատասխանի՛ր — Առասպել',
    type: 'Prosa (Mito: El origen de las estaciones)',
    contentEs: `Hace muchísimo tiempo, cuando el mundo todavía no conocía las estaciones, una diosa llamada Alba cuidaba de la naturaleza.
Cuando estaba contenta, llenaba los campos de flores y calentaba la tierra con su luz. Pero cuando se entristecía, el cielo se oscurecía y llegaban el frío y la nieve.
Los seres humanos aprendieron así a reconocer los cambios de las estaciones.`,
    contentHy: `Շատ վաղուց, երբ աշխարհը դեռ չգիտեր տարվա եղանակները, Ալբա անունով մի աստվածուհի հոգ էր տանում բնության մասին։
Երբ նա ուրախ էր լինում, դաշտերը լցնում էր ծաղիկներով և իր լույսով տաքացնում երկիրը։ Բայց երբ տխրում էր, երկինքը մթնում էր, և գալիս էին ցուրտն ու ձյունը։
Մարդիկ այդպես սովորեցին ճանաչել տարվա եղանակների փոփոխությունները։`,
    noteEs: 'Texto mitológico original creado para este ejercicio.',
    noteHy: 'Ուսուցողական առասպելական բնօրինակ տեքստ։',
    questions: [
      {
        id: 1,
        qEs: '¿Es un mito, un cuento o una leyenda? Justifica.',
        qHy: 'Առասպե՞լ է, հեքիա՞թ, թե՞ լեգենդ։ Հիմնավորի՛ր։',
        modelAnswerEs: 'Es un mito, porque explica el origen de las estaciones mediante la acción de una divinidad (la diosa Alba).',
        modelAnswerHy: 'Առասպել է (mito), որովհետև աստվածուհու (Ալբայի) միջոցով բացատրում է բնական երևույթի՝ տարվա եղանակների ծագումը։',
      },
      {
        id: 2,
        qEs: '¿Quién es la protagonista?',
        qHy: 'Ո՞վ է գլխավոր հերոսը։',
        modelAnswerEs: 'La diosa Alba.',
        modelAnswerHy: 'Ալբա աստվածուհին։',
      },
      {
        id: 3,
        qEs: '¿Qué intenta explicar el texto?',
        qHy: 'Ի՞նչ է փորձում բացատրել տեքստը։',
        modelAnswerEs: 'El origen de los cambios estacionales (las cuatro estaciones).',
        modelAnswerHy: 'Տարվա եղանակների հերթափոխության ծագումը։',
      },
      {
        id: 4,
        qEs: '¿Qué elementos sobrenaturales aparecen?',
        qHy: 'Ի՞նչ գերբնական տարրեր են առկա։',
        modelAnswerEs: 'Una diosa capaz de controlar el clima, la floración y la nieve con sus estados de ánimo.',
        modelAnswerHy: 'Աստվածուհի, որի տրամադրությունից կախված փոխվում են եղանակը, ծաղկումն ու ձյունը։',
      },
      {
        id: 5,
        qEs: '¿Está escrito en prosa o en verso?',
        qHy: 'Արձա՞կ է գրված, թե՞ չափածո։',
        modelAnswerEs: 'En prosa.',
        modelAnswerHy: 'Արձակ։',
      },
      {
        id: 6,
        qEs: '¿Qué ocurre cuando la diosa está contenta?',
        qHy: 'Ի՞նչ է կատարվում, երբ աստվածուհին ուրախ է։',
        modelAnswerEs: 'Los campos se llenan de flores y la tierra se calienta con su luz (primavera y verano).',
        modelAnswerHy: 'Դաշտերը լցվում են ծաղիկներով, և երկիրը տաքանում է նրա լույսով (գարուն և ամառ)։',
      },
      {
        id: 7,
        qEs: '¿Qué sucede cuando está triste?',
        qHy: 'Ի՞նչ է տեղի ունենում, երբ նա տխուր է։',
        modelAnswerEs: 'El cielo se oscurece y llegan el frío y la nieve (otoño e invierno).',
        modelAnswerHy: 'Երկինքը մթնում է, և գալիս են ցուրտն ու ձյունը (աշուն և ձմեռ)։',
      },
      {
        id: 8,
        qEs: '¿A qué tipo de literatura podría pertenecer si se transmitiera oralmente de generación en generación sin autor conocido?',
        qHy: 'Գրականության ո՞ր տեսակին կպատկաներ, եթե փոխանցվեր բանավոր սերնդեսերունդ առանց հայտնի հեղինակի։',
        modelAnswerEs: 'A la literatura popular.',
        modelAnswerHy: 'Ժողովրդական գրականությանը (literatura popular)։',
      },
    ],
  },
  {
    id: 'ejercicio-12-lenguaje',
    titleEs: 'EJERCICIO 12. Lee y analiza el lenguaje literario — La noche',
    titleHy: 'ՎԱՐԺՈՒԹՅՈՒՆ 12. Կարդա՛ և վերլուծի՛ր գրական լեզուն — Գիշերը',
    type: 'Prosa lírica (Texto literario)',
    contentEs: `La ciudad dormía bajo un cielo oscuro. El viento susurraba entre los árboles y la luna era una lámpara de plata. Las estrellas brillaban como pequeños diamantes.
De repente, ¡pum!, una puerta se cerró. Marta sintió que su corazón iba a salir volando del pecho.`,
    contentHy: `Քաղաքը քնած էր մութ երկնքի տակ։ Քամին շշնջում էր ծառերի միջև, իսկ լուսինը մի արծաթե լամպ էր։ Աստղերը փայլում էին փոքրիկ ադամանդների պես։
Հանկարծ, դմփո՛ց, մի դուռ փակվեց։ Մարթան զգաց, որ իր սիրտը թռչելու էր կրծքից դուրս։`,
    noteEs: 'Texto original de práctica.',
    noteHy: 'Ուսումնական գրական տեքստ։',
    questions: [
      {
        id: 1,
        qEs: '¿Está escrito en verso o en prosa?',
        qHy: 'Արձա՞կ է գրված, թե՞ չափածո։',
        modelAnswerEs: 'En prosa.',
        modelAnswerHy: 'Արձակ։',
      },
      {
        id: 2,
        qEs: '¿Es un ejemplo de lenguaje literario? ¿Por qué?',
        qHy: 'Արդյոք սա գրական լեզվի օրինա՞կ է։ Ինչո՞ւ։',
        modelAnswerEs: 'Sí, porque busca producir un efecto estético y utiliza múltiples figuras literarias (metáfora, personificación, hipérbole, etc.).',
        modelAnswerHy: 'Այո, որովհետև ունի գեղագիտական նպատակ և կիրառում է բազմաթիվ գրական հնարքներ։',
      },
      {
        id: 3,
        qEs: 'Encuentra dos personificaciones.',
        qHy: 'Գտի՛ր երկու անձնավորում։',
        modelAnswerEs: '1) «La ciudad dormía» y 2) «El viento susurraba entre los árboles».',
        modelAnswerHy: '1) «La ciudad dormía» (քաղաքը քնած էր) և 2) «El viento susurraba» (քամին շշնջում էր)։',
      },
      {
        id: 4,
        qEs: 'Identifica una metáfora.',
        qHy: 'Գտի՛ր փոխաբերություն։',
        modelAnswerEs: '«La luna era una lámpara de plata».',
        modelAnswerHy: '«La luna era una lámpara de plata» (լուսինը արծաթե լամպ էր)։',
      },
      {
        id: 5,
        qEs: 'Identifica una comparación.',
        qHy: 'Գտի՛ր համեմատություն։',
        modelAnswerEs: '«Las estrellas brillaban como pequeños diamantes».',
        modelAnswerHy: '«Las estrellas brillaban como pequeños diamantes» (աստղերը փայլում էին փոքրիկ ադամանդների պես)։',
      },
      {
        id: 6,
        qEs: 'Identifica una onomatopeya.',
        qHy: 'Գտի՛ր ձայնանմանություն։',
        modelAnswerEs: '«¡Pum!».',
        modelAnswerHy: '«¡Pum!» (դմփոց)։',
      },
      {
        id: 7,
        qEs: 'Identifica una hipérbole.',
        qHy: 'Գտի՛ր չափազանցություն (հիպերբոլ)։',
        modelAnswerEs: '«Su corazón iba a salir volando del pecho».',
        modelAnswerHy: '«Su corazón iba a salir volando del pecho» (սիրտը կրծքից դուրս էր թռչելու)։',
      },
      {
        id: 8,
        qEs: '¿Qué ambiente crea el autor?',
        qHy: 'Ի՞նչ մթնոլորտ է ստեղծում հեղինակը։',
        modelAnswerEs: 'Un ambiente nocturno, poético, misterioso y con un repentino sobresalto o intriga.',
        modelAnswerHy: 'Գիշերային, պոետիկ, առեղծվածային և հանկարծակի վախի ու լարվածության մթնոլորտ։',
      },
      {
        id: 9,
        qEs: 'Transforma «la luna era una lámpara de plata» en una frase cotidiana.',
        qHy: 'Վերածի՛ր «la luna era una lámpara de plata» արտահայտությունը առօրյա սովորական խոսքի։',
        modelAnswerEs: '«La luna brillaba mucho» o «La luna iluminaba la noche».',
        modelAnswerHy: '«Լուսինը պայծառ լուսավորում էր գիշերը» (առանց փոխաբերության)։',
      },
      {
        id: 10,
        qEs: 'Escribe una oración con personificación inspirada en este texto.',
        qHy: 'Գրի՛ր անձնավորմամբ նախադասություն՝ ոգեշնչված այս տեքստից։',
        modelAnswerEs: '«Las sombras me perseguían por el callejón» o «Los árboles susurraban secretos».',
        modelAnswerHy: '«Ծառերը գաղտնիքներ էին շշնջում» կամ «Լուսինը հետևում էր իմ քայլերին»։',
      },
    ],
  },
];
