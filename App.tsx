import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Sparkles,
  Lightbulb,
  Search,
  Volume2,
  RotateCcw,
  Check,
  X,
  Languages,
  ChevronDown,
  ChevronUp,
  Award,
  Eye,
  EyeOff,
  ZoomIn,
  Ticket,
  Dices,
  HelpCircle,
} from 'lucide-react';

import { teoriaData } from './teoriaData';
import {
  ejercicio1Questions,
  ejercicio2Questions,
  ejercicio3Questions,
  ejercicio4Questions,
  ejercicio5Questions,
  ejercicio6Questions,
  ejercicio7Pairs,
  ejercicio8Questions,
} from './ejerciciosData';
import { textosData } from './textosData';
import { examenesData } from './examenesData';
import { repasoFlashcards, metodologiaConsejos } from './repasoData';
import {
  billetesData,
  fragmentosAnalisisData,
  preguntasDesarrolloData,
} from './billetesData';
import { ClickableText, ClickablePhrase } from './ClickableText';

type TabType = 'teoria' | 'ejercicios' | 'textos' | 'examenes' | 'billetes' | 'repaso' | 'metodologia';
type FontSizeType = 'normal' | 'large' | 'xlarge';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('billetes'); // open billetes or teoria
  const [forceShowAllTranslations, setForceShowAllTranslations] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSize, setFontSize] = useState<FontSizeType>('large');

  // Generic map for clicking Spanish items to toggle Armenian translation
  const [revealedArmenianMap, setRevealedArmenianMap] = useState<Record<string, boolean>>({});

  const isArmenianVisible = (id: string) => forceShowAllTranslations || !!revealedArmenianMap[id];
  const toggleArmenian = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevealedArmenianMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // BILLETES SECTION State
  const [billetesSubTab, setBilletesSubTab] = useState<'parte1' | 'parte2' | 'parte3' | 'criterios'>('parte1');
  const [selectedBilleteId, setSelectedBilleteId] = useState<number>(1);
  const [revealedBilleteAnswers, setRevealedBilleteAnswers] = useState<Record<string, boolean>>({});
  const [revealedBilleteTextHy, setRevealedBilleteTextHy] = useState<Record<number, boolean>>({});

  // BILLETES Parte 2 (16 fragmentos)
  const [fragmentSelections, setFragmentSelections] = useState<Record<number, string>>({});
  const [showFragmentSolutions, setShowFragmentSolutions] = useState<boolean>(false);

  // BILLETES Parte 3 (10 preguntas desarrollo)
  const [revealedDesarrolloAnswers, setRevealedDesarrolloAnswers] = useState<Record<number, boolean>>({});
  const [desarrolloUserInputs, setDesarrolloUserInputs] = useState<Record<number, string>>({});

  // EJERCICIO 1 State
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);

  // EJERCICIO 2 State
  const [fillAnswers, setFillAnswers] = useState<Record<number, string>>({});
  const [showFillSolutions, setShowFillSolutions] = useState<boolean>(false);

  // EJERCICIO 3 State
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean | null>>({});
  const [showTfSolutions, setShowTfSolutions] = useState<boolean>(false);

  // EJERCICIO 4 State
  const [popCultaAnswers, setPopCultaAnswers] = useState<Record<number, 'POPULAR' | 'CULTA' | null>>({});
  const [showPopCultaSolutions, setShowPopCultaSolutions] = useState<boolean>(false);

  // EJERCICIO 5 State
  const [figuraAnswers, setFiguraAnswers] = useState<Record<number, string>>({});
  const [showFiguraSolutions, setShowFiguraSolutions] = useState<boolean>(false);

  // EJERCICIO 6 State
  const [levelAnswers, setLevelAnswers] = useState<Record<number, string>>({});
  const [showLevelSolutions, setShowLevelSolutions] = useState<boolean>(false);

  // EJERCICIO 7 State
  const [pairAnswers, setPairAnswers] = useState<Record<number, string>>({});
  const [showPairSolutions, setShowPairSolutions] = useState<boolean>(false);

  // EJERCICIO 8 State
  const [revealedTransforms, setRevealedTransforms] = useState<Record<number, boolean>>({});

  // FLASHCARDS State
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState<number>(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState<boolean>(false);
  const [flashcardCategory, setFlashcardCategory] = useState<string>('all');
  const [revealedCardHy, setRevealedCardHy] = useState<boolean>(false);

  // TEXTOS State
  const [activeTextId, setActiveTextId] = useState<string>('ejercicio-9-romance');
  const [revealedTextAnswers, setRevealedTextAnswers] = useState<Record<string, boolean>>({});
  const [revealedMainTextHy, setRevealedMainTextHy] = useState<Record<string, boolean>>({});

  // EXÁMENES State
  const [activeExamId, setActiveExamId] = useState<'A' | 'B'>('A');
  const [revealedExamSolutions, setRevealedExamSolutions] = useState<Record<string, boolean>>({});

  // Theory Accordion State
  const [expandedTheorySections, setExpandedTheorySections] = useState<Record<string, boolean>>({
    'literatura-popular': true,
    'literatura-culta': true,
    'lenguaje-literario': true,
    'figuras-literarias-intro': true,
    'nivel-fonico': true,
    'nivel-morfosintactico': true,
    'nivel-semantico': true,
    'distinguir-figuras': true,
  });

  const toggleTheorySection = (id: string) => {
    setExpandedTheorySections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Sound function
  const speakSpanish = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find((v) => v.lang.startsWith('es'));
    if (esVoice) utterance.voice = esVoice;
    window.speechSynthesis.speak(utterance);
  };

  // Random Ticket Generator (Al azar)
  const handleRandomBillete = () => {
    const randomId = Math.floor(Math.random() * billetesData.length) + 1;
    setSelectedBilleteId(randomId);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  const currentBillete = useMemo(() => {
    return billetesData.find((b) => b.id === selectedBilleteId) || billetesData[0];
  }, [selectedBilleteId]);

  // Test 1 score calculation
  const testScore = useMemo(() => {
    let score = 0;
    ejercicio1Questions.forEach((q) => {
      if (testAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  }, [testAnswers]);

  const handleTestSubmit = () => {
    setTestSubmitted(true);
    if (testScore >= 12) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    }
  };

  const resetTest = () => {
    setTestAnswers({});
    setTestSubmitted(false);
  };

  // Filtered flashcards
  const filteredFlashcards = useMemo(() => {
    if (flashcardCategory === 'all') return repasoFlashcards;
    return repasoFlashcards.filter((c) => c.category === flashcardCategory);
  }, [flashcardCategory]);

  const currentFlashcard = filteredFlashcards[currentFlashcardIndex] || filteredFlashcards[0];

  const handleNextFlashcard = () => {
    setIsFlashcardFlipped(false);
    setRevealedCardHy(false);
    setCurrentFlashcardIndex((prev) => (prev + 1) % filteredFlashcards.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlashcardFlipped(false);
    setRevealedCardHy(false);
    setCurrentFlashcardIndex((prev) => (prev - 1 + filteredFlashcards.length) % filteredFlashcards.length);
  };

  const currentTextItem = useMemo(() => {
    return textosData.find((t) => t.id === activeTextId) || textosData[0];
  }, [activeTextId]);

  const currentExam = useMemo(() => {
    return examenesData.find((e) => e.id === activeExamId) || examenesData[0];
  }, [activeExamId]);

  const filteredTheory = useMemo(() => {
    if (!searchQuery.trim()) return teoriaData;
    const q = searchQuery.toLowerCase();
    return teoriaData.filter(
      (sec) =>
        sec.titleEs.toLowerCase().includes(q) ||
        sec.titleHy.toLowerCase().includes(q) ||
        sec.definition?.es.toLowerCase().includes(q) ||
        sec.definition?.hy.toLowerCase().includes(q) ||
        sec.subsections?.some(
          (sub) =>
            sub.titleEs.toLowerCase().includes(q) ||
            sub.titleHy.toLowerCase().includes(q) ||
            sub.definition.es.toLowerCase().includes(q) ||
            sub.examples.some((ex) => ex.es.toLowerCase().includes(q) || ex.hy.toLowerCase().includes(q))
        )
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf5f5] text-slate-900 font-sans antialiased selection:bg-yellow-300 selection:text-rose-950 pb-16">
      {/* Top Banner / Header in Burgundy (Бордовый), Orange & Yellow */}
      <header className="bg-gradient-to-r from-[#3b030b] via-[#5c0915] to-[#240207] text-white border-b-4 border-orange-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Logo & Titles */}
            <div className="flex items-center gap-3.5">
              <span className="p-3 rounded-2xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 text-rose-950 font-black shadow-md border-2 border-yellow-200">
                <GraduationCap className="w-7 h-7" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-md bg-yellow-400 text-rose-950 shadow-2xs">
                    1.º ESO · 7-րդ դասարան · Իսպանիա
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-rose-200">
                    Քննության նախապատրաստում
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-yellow-300">Lengua Castellana y Literatura</span>
                  <span className="text-rose-200 text-base sm:text-lg font-normal">
                    (Սեղմի՛ր իսպաներենին՝ հայերենը տեսնելու համար)
                  </span>
                </h1>
              </div>
            </div>

            {/* Controls Toolbar: Font Size + Reveal All Toggle */}
            <div className="flex flex-wrap items-center gap-2.5 self-stretch lg:self-auto">
              {/* Font Size Selector */}
              <div className="flex items-center gap-1.5 bg-[#2b0208]/90 border-2 border-rose-400/50 p-1 rounded-xl shadow-xs">
                <span className="text-xs font-bold text-rose-200 px-2 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Տառաչափ:</span>
                </span>
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSize === 'normal'
                      ? 'bg-yellow-400 text-rose-950 shadow-xs'
                      : 'text-rose-100 hover:bg-[#4a0711]'
                  }`}
                  title="Սովորական (Normal)"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSize === 'large'
                      ? 'bg-yellow-400 text-rose-950 shadow-xs'
                      : 'text-rose-100 hover:bg-[#4a0711]'
                  }`}
                  title="Մեծ (Grande)"
                >
                  A+ (Մեծ)
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSize === 'xlarge'
                      ? 'bg-yellow-400 text-rose-950 shadow-xs'
                      : 'text-rose-100 hover:bg-[#4a0711]'
                  }`}
                  title="Շատ մեծ (Extra Grande)"
                >
                  A++
                </button>
              </div>

              {/* Reveal All Translations (Optional Override) */}
              <button
                type="button"
                onClick={() => setForceShowAllTranslations(!forceShowAllTranslations)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-md border-2 ${
                  forceShowAllTranslations
                    ? 'bg-yellow-400 text-rose-950 border-yellow-300 hover:bg-yellow-300'
                    : 'bg-orange-500 text-white border-orange-400 hover:bg-orange-600'
                }`}
                title="Բացել կամ թաքցնել բոլոր հայերեն թարգմանությունները"
              >
                {forceShowAllTranslations ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>
                  {forceShowAllTranslations ? 'Թաքցնել հայերենը' : 'Բացել բոլոր թարգմանությունները'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Tabs - Burgundy, Orange & Yellow Highlights */}
        <nav aria-label="Main Navigation" className="bg-white rounded-2xl shadow-sm border-2 border-rose-200 p-2 flex flex-wrap gap-1.5 items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveTab('billetes')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-extrabold transition-all ${
                activeTab === 'billetes'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <Ticket className="w-5 h-5 text-yellow-300" />
              <span>🎟️ 14 Տոմսեր (70 հարց)</span>
            </button>

            <button
              onClick={() => setActiveTab('teoria')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeTab === 'teoria'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <BookOpen className="w-5 h-5 text-orange-400" />
              <span>1. Տեսություն (Teoría)</span>
            </button>

            <button
              onClick={() => setActiveTab('ejercicios')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeTab === 'ejercicios'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-orange-400" />
              <span>2. 8 Վարժություններ</span>
            </button>

            <button
              onClick={() => setActiveTab('textos')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeTab === 'textos'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <FileText className="w-5 h-5 text-yellow-300" />
              <span>3. Տեքստեր (4 Textos)</span>
            </button>

            <button
              onClick={() => setActiveTab('examenes')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeTab === 'examenes'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <Award className="w-5 h-5 text-orange-400" />
              <span>4. 2 Քննական տարբերակ</span>
            </button>

            <button
              onClick={() => setActiveTab('repaso')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeTab === 'repaso'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span>5. 23 Քարտեր</span>
            </button>

            <button
              onClick={() => setActiveTab('metodologia')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeTab === 'metodologia'
                  ? 'bg-[#7a1424] text-white shadow-md ring-2 ring-rose-400'
                  : 'text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <Lightbulb className="w-5 h-5 text-orange-400" />
              <span>6. Խորհուրդներ</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64 mt-2 sm:mt-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-rose-700" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Փնտրել տերմին կամ հնարք..."
              className="w-full pl-9 pr-7 py-2 text-xs sm:text-sm font-semibold bg-rose-50 border-2 border-rose-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white text-rose-950 placeholder-rose-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold p-1"
              >
                ✕
              </button>
            )}
          </div>
        </nav>

        {/* Global Interactive Guide Banner */}
        <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 border-2 border-yellow-400 rounded-2xl p-4 sm:p-5 flex items-start gap-4 shadow-sm">
          <span className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl font-black text-xl shrink-0 shadow-md">
            👆
          </span>
          <div className="space-y-1 text-slate-950">
            <div className="font-extrabold text-base sm:text-lg flex flex-wrap items-center gap-2">
              <span className="text-rose-950">Միայն իսպաներենն է բաց՝ հայերենը բացվում է կտտացնելով</span>
              <span className="text-xs sm:text-sm font-black px-2.5 py-0.5 rounded-full bg-orange-500 text-white shadow-2xs">
                🇦🇲 Click para ver armenio
              </span>
              <span className="text-xs sm:text-sm font-black px-2.5 py-0.5 rounded-full bg-[#7a1424] text-white shadow-2xs">
                ✅ Առանձին կոճակ պատասխանի համար
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
              Բոլոր հարցերում սկզբում տեսանելի է միայն իսպաներենը։ Սեղմի՛ր ցանկացած իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը տեսնելու համար։
              Իսկ պատասխանը բացելու համար սեղմի՛ր առանձին <strong>«Ver respuesta / Տեսնել պատասխանը»</strong> կոճակը։
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW STANDALONE SECTION: 14 BILLETES DE EXAMEN (70 EJERCICIOS Y PREGUNTAS) */}
        {/* ========================================================================= */}
        {activeTab === 'billetes' && (
          <div className="space-y-6">
            {/* Header Box */}
            <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-8 shadow-sm space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                  Examen Oficial — 1.º ESO (7.º curso)
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-[#7a1424] text-white">
                  14 billetes de examen — 70 ejercicios y preguntas
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                Examen de Lengua Castellana — 1.º ESO
              </h2>

              <p className="text-base sm:text-lg font-bold text-amber-950 leading-relaxed">
                Այս տարբերակում աշակերտը պետք է կարդա տեքստը, վերլուծի, բացատրի իր պատասխանը, համեմատի հասկացությունները և օրինակներ բերի։ Հարցերը կազմված են Իսպանիայի 1.º ESO-ի գրավոր ու բանավոր քննությունների ոճով՝ ըստ տետրի թեմաների։
              </p>

              <div className="p-3.5 bg-yellow-100/80 border-2 border-yellow-400 rounded-xl text-sm font-semibold text-rose-950 flex items-baseline gap-2">
                <span className="font-black text-orange-600 shrink-0">📌 Instrucciones:</span>
                <span>Lee atentamente, responde con oraciones completas y justifica tus respuestas utilizando ejemplos del texto.</span>
              </div>
            </div>

            {/* Sub-Tabs for Billetes */}
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setBilletesSubTab('parte1')}
                className={`flex-1 min-w-[200px] py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all ${
                  billetesSubTab === 'parte1'
                    ? 'bg-[#7a1424] text-white shadow-md'
                    : 'bg-rose-50 text-rose-950 hover:bg-rose-100'
                }`}
              >
                🎟️ Parte 1. Billetes 1–14
              </button>
              <button
                type="button"
                onClick={() => setBilletesSubTab('parte2')}
                className={`flex-1 min-w-[200px] py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all ${
                  billetesSubTab === 'parte2'
                    ? 'bg-[#7a1424] text-white shadow-md'
                    : 'bg-rose-50 text-rose-950 hover:bg-rose-100'
                }`}
              >
                ✍️ Parte 2. Examen escrito (16 figuras)
              </button>
              <button
                type="button"
                onClick={() => setBilletesSubTab('parte3')}
                className={`flex-1 min-w-[200px] py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all ${
                  billetesSubTab === 'parte3'
                    ? 'bg-[#7a1424] text-white shadow-md'
                    : 'bg-rose-50 text-rose-950 hover:bg-rose-100'
                }`}
              >
                📝 Parte 3. 10 Preguntas de desarrollo
              </button>
              <button
                type="button"
                onClick={() => setBilletesSubTab('criterios')}
                className={`py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all ${
                  billetesSubTab === 'criterios'
                    ? 'bg-[#7a1424] text-white shadow-md'
                    : 'bg-rose-50 text-rose-950 hover:bg-rose-100'
                }`}
              >
                ⚖️ Evaluación
              </button>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* PARTE 1: 14 BILLETES INTERACTIVOS                             */}
            {/* ------------------------------------------------------------- */}
            {billetesSubTab === 'parte1' && (
              <div className="space-y-6">
                {/* Saca un billete Controls */}
                <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-rose-100 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-rose-950">
                        Saca un billete
                      </h3>
                      <p className="text-sm font-bold text-amber-950 mt-0.5">
                        Ընտրիր տոմսը կամ սեղմիր պատահական ընտրության կոճակը։
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleRandomBillete}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm transition-all shadow-md flex items-center gap-2"
                    >
                      <Dices className="w-5 h-5" />
                      <span>🎲 Al azar (Պատահական տոմս)</span>
                    </button>
                  </div>

                  {/* Number buttons 1 to 14 */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {billetesData.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBilleteId(b.id)}
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl font-black text-base transition-all border-2 flex items-center justify-center ${
                          selectedBilleteId === b.id
                            ? 'bg-[#7a1424] text-white border-[#540d16] shadow-md ring-2 ring-orange-400 scale-105'
                            : 'bg-rose-50 text-rose-950 border-rose-200 hover:bg-rose-100'
                        }`}
                      >
                        {b.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Billete View */}
                <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-8 shadow-sm space-y-6">
                  {/* Billete Header */}
                  <div className="border-b-2 border-rose-200 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                          Billete {currentBillete.id} de 14
                        </span>
                        <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-yellow-300 text-yellow-950 border border-yellow-500">
                          ⏱️ {currentBillete.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-rose-950 mt-2">
                        # {currentBillete.themeEs}
                      </h3>
                      <div className="text-sm font-bold text-amber-950">
                        🇦🇲 {currentBillete.themeHy}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedBilleteId((prev) => (prev > 1 ? prev - 1 : 14))}
                        className="px-4 py-2 bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 text-rose-950 rounded-xl text-sm font-black transition-colors"
                      >
                        ← Anterior
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedBilleteId((prev) => (prev < 14 ? prev + 1 : 1))}
                        className="px-4 py-2 bg-[#7a1424] hover:bg-[#881326] text-white rounded-xl text-sm font-black transition-colors shadow-sm"
                      >
                        Siguiente →
                      </button>
                    </div>
                  </div>

                  {/* Reading Passage */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-yellow-50 to-orange-50 border-2 border-rose-300 space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-sm font-black uppercase tracking-wider text-rose-950">
                        📖 Texto para leer y analizar
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setRevealedBilleteTextHy((prev) => ({
                              ...prev,
                              [currentBillete.id]: !prev[currentBillete.id],
                            }))
                          }
                          className="px-3.5 py-1.5 rounded-xl bg-yellow-300 border-2 border-yellow-500 text-rose-950 hover:bg-yellow-400 transition-colors text-xs font-black shadow-2xs flex items-center gap-1.5"
                        >
                          {revealedBilleteTextHy[currentBillete.id] || forceShowAllTranslations ? (
                            <>
                              <EyeOff className="w-4 h-4" />
                              <span>Թաքցնել հայերենը</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-4 h-4" />
                              <span>👉 🇦🇲 Տեսնել հայերեն թարգմանությունը</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => speakSpanish(currentBillete.textEs)}
                          className="p-1.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-2xs"
                          title="Լսել տեքստը"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border-2 border-rose-200 font-serif whitespace-pre-line text-base sm:text-lg leading-relaxed text-slate-950 shadow-2xs">
                      {currentBillete.textEs}
                    </div>

                    {(revealedBilleteTextHy[currentBillete.id] || forceShowAllTranslations) && (
                      <div className="p-5 rounded-2xl bg-yellow-100/90 border-2 border-yellow-400 font-serif whitespace-pre-line text-base sm:text-lg leading-relaxed text-amber-950 font-bold shadow-2xs animate-fadeIn">
                        <div className="text-xs font-sans font-black text-amber-800 mb-1 uppercase">
                          🇦🇲 ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ
                        </div>
                        {currentBillete.textHy}
                      </div>
                    )}
                  </div>

                  {/* 5 Cuestiones del examen */}
                  <div className="space-y-5">
                    <h4 className="text-xl font-black text-rose-950">
                      Cuestiones del examen (5 հարց)
                    </h4>

                    <div className="space-y-4">
                      {currentBillete.questions.map((q) => {
                        const qKey = `billete-${currentBillete.id}-q-${q.num}`;
                        const isQHyVisible = isArmenianVisible(qKey);
                        const isAnsRevealed = revealedBilleteAnswers[qKey];

                        return (
                          <div
                            key={q.num}
                            className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/40 space-y-3"
                          >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                              <div
                                onClick={() => toggleArmenian(qKey)}
                                className="space-y-1 cursor-pointer flex-1"
                              >
                                <div className="text-base sm:text-lg font-bold text-rose-950 flex items-baseline gap-2.5 flex-wrap">
                                  <span className="w-8 h-8 rounded-full bg-[#7a1424] text-white flex items-center justify-center text-sm font-black shrink-0">
                                    {q.num}
                                  </span>
                                  <span className="hover:text-rose-700">{q.qEs}</span>
                                  <span className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500">
                                    🇦🇲 {isQHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={(e) => speakSpanish(q.qEs, e)}
                                    className="p-1 text-rose-700 hover:text-orange-600"
                                  >
                                    <Volume2 className="w-4 h-4" />
                                  </button>
                                </div>

                                {isQHyVisible && (
                                  <div className="text-sm sm:text-base font-bold text-amber-950 bg-yellow-100 p-2.5 rounded-xl border border-yellow-400 animate-fadeIn ml-10.5 mt-2">
                                    🇦🇲 {q.qHy}
                                  </div>
                                )}
                              </div>

                              {/* Отдельная кнопка «Ver respuesta modelo» */}
                              <button
                                type="button"
                                onClick={() =>
                                  setRevealedBilleteAnswers({
                                    ...revealedBilleteAnswers,
                                    [qKey]: !isAnsRevealed,
                                  })
                                }
                                className={`px-4 py-2 rounded-xl border-2 text-xs sm:text-sm font-black shrink-0 transition-colors shadow-2xs flex items-center gap-1.5 ${
                                  isAnsRevealed
                                    ? 'bg-rose-200 text-rose-950 border-rose-400'
                                    : 'bg-yellow-300 border-yellow-500 text-rose-950 hover:bg-yellow-400'
                                }`}
                              >
                                {isAnsRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                <span>{isAnsRevealed ? 'Թաքցնել պատասխանը' : 'Ver respuesta modelo (Տեսնել պատասխանը)'}</span>
                              </button>
                            </div>

                            {/* Model Answer ONLY when separate button clicked */}
                            {isAnsRevealed && (
                              <div className="pl-0 sm:pl-10.5 pt-1">
                                <div className="p-4 rounded-xl bg-yellow-100 border-2 border-yellow-400 text-sm sm:text-base font-medium text-slate-950 space-y-1.5 animate-fadeIn">
                                  <div className="font-black text-orange-600 flex items-center gap-2">
                                    <Check className="w-4 h-4 font-black" />
                                    <span>Respuesta modelo (Օրինակելի պատասխան):</span>
                                  </div>
                                  <div className="font-extrabold text-rose-950">🇪🇸 {q.modelAnswerEs}</div>
                                  <div className="text-amber-950 font-bold">🇦🇲 {q.modelAnswerHy}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Ticket Bottom Navigation */}
                  <div className="flex items-center justify-between border-t-2 border-rose-200 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedBilleteId((prev) => (prev > 1 ? prev - 1 : 14))}
                      className="px-5 py-2.5 bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 text-rose-950 rounded-xl text-sm font-black transition-colors"
                    >
                      ← Anterior (Տոմս {selectedBilleteId > 1 ? selectedBilleteId - 1 : 14})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBilleteId((prev) => (prev < 14 ? prev + 1 : 1))}
                      className="px-5 py-2.5 bg-[#7a1424] hover:bg-[#881326] text-white rounded-xl text-sm font-black transition-colors shadow-sm"
                    >
                      Siguiente (Տոմս {selectedBilleteId < 14 ? selectedBilleteId + 1 : 1}) →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* PARTE 2: EXAMEN ESCRITO — 16 FRAGMENTOS                        */}
            {/* ------------------------------------------------------------- */}
            {billetesSubTab === 'parte2' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-7 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                      Parte 2. Examen escrito
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-rose-950">
                    Ejercicio 1. Identifica y justifica las figuras literarias
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-amber-950">
                    Սրանք արդեն ավելի մոտ են գրավոր ստուգողական աշխատանքին։ Աշակերտը ոչ միայն պետք է ճանաչի տերմինը, այլ նաև բացատրի, ապացուցի և կիրառի կանոնը (16 fragmentos)։
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setShowFragmentSolutions(!showFragmentSolutions)}
                      className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-black text-sm shadow-md hover:from-orange-600 hover:to-amber-600 transition-all flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      <span>{showFragmentSolutions ? 'Թաքցնել պատասխանները' : 'Corregir y explicar las 16 respuestas (Ստուգել և բացատրել)'}</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fragmentosAnalisisData.map((frag) => {
                    const fragKey = `frag-${frag.id}`;
                    const isFragHyVisible = isArmenianVisible(fragKey);
                    const selectedVal = fragmentSelections[frag.id] || '';
                    const isCorrect = selectedVal === frag.correctFigure;

                    return (
                      <div
                        key={frag.id}
                        className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/40 space-y-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="w-8 h-8 rounded-full bg-[#7a1424] text-white flex items-center justify-center text-sm font-black shrink-0">
                            {frag.id}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => toggleArmenian(fragKey)}
                              className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500"
                            >
                              🇦🇲 {isFragHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                            </button>
                            <button
                              type="button"
                              onClick={(e) => speakSpanish(frag.textEs, e)}
                              className="p-1 text-rose-700 hover:text-orange-600"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Spanish Text (clickable) */}
                        <div
                          onClick={() => toggleArmenian(fragKey)}
                          className="text-base sm:text-lg font-bold text-rose-950 cursor-pointer hover:text-rose-700 leading-snug"
                        >
                          «{frag.textEs}»
                        </div>

                        {/* Armenian translation ONLY when clicked */}
                        {isFragHyVisible && (
                          <div className="text-sm font-bold text-amber-950 bg-yellow-100 p-2.5 rounded-xl border border-yellow-400 animate-fadeIn">
                            🇦🇲 {frag.textHy}
                          </div>
                        )}

                        {/* Select Figure */}
                        <div className="pt-1">
                          <select
                            value={selectedVal}
                            onChange={(e) =>
                              setFragmentSelections({
                                ...fragmentSelections,
                                [frag.id]: e.target.value,
                              })
                            }
                            className={`w-full px-3.5 py-2 text-sm font-bold rounded-xl border-2 focus:outline-none ${
                              showFragmentSolutions
                                ? isCorrect
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950'
                                  : 'border-rose-400 bg-rose-50 text-rose-950'
                                : 'border-rose-300 bg-white text-rose-950'
                            }`}
                          >
                            <option value="">Selecciona la figura literaria...</option>
                            {frag.options.map((opt, oIdx) => (
                              <option key={oIdx} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Solution & Explanation */}
                        {showFragmentSolutions && (
                          <div className="p-3.5 rounded-xl bg-yellow-100 border-2 border-yellow-400 text-sm font-medium text-slate-950 space-y-1 animate-fadeIn">
                            <div className="font-black text-orange-600">
                              Figura: {frag.correctFigure}
                            </div>
                            <div className="font-bold text-rose-950">🇪🇸 {frag.explanationEs}</div>
                            <div className="text-amber-950 font-bold">🇦🇲 {frag.explanationHy}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* PARTE 3: PREGUNTAS DE DESARROLLO (10 PREGUNTAS)               */}
            {/* ------------------------------------------------------------- */}
            {billetesSubTab === 'parte3' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-7 shadow-sm space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                    Parte 3. Preguntas de desarrollo
                  </span>
                  <h3 className="text-2xl font-black text-rose-950">
                    Preguntas de desarrollo — երկար պատասխաններ
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-amber-950">
                    Աշակերտը պետք է պատասխանի յուրաքանչյուր հարցին մոտ 5–8 նախադասությամբ։ Սրանք հատկապես հարմար են բանավոր քննության համար։
                  </p>
                </div>

                <div className="space-y-6">
                  {preguntasDesarrolloData.map((d) => {
                    const dKey = `desarrollo-q-${d.id}`;
                    const isDHyVisible = isArmenianVisible(dKey);
                    const isAnswerRevealed = revealedDesarrolloAnswers[d.id];

                    return (
                      <div
                        key={d.id}
                        className="bg-white rounded-2xl border-2 border-rose-300 p-6 shadow-sm space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-rose-100 pb-3">
                          <div
                            onClick={() => toggleArmenian(dKey)}
                            className="cursor-pointer flex-1 space-y-1"
                          >
                            <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded bg-[#7a1424] text-white">
                              Pregunta {d.id}
                            </span>
                            <div className="text-lg sm:text-xl font-black text-rose-950 hover:text-rose-700 flex items-baseline gap-2 mt-1">
                              <span>{d.questionEs}</span>
                              <span className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500 shrink-0">
                                🇦🇲 {isDHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => speakSpanish(d.questionEs, e)}
                                className="p-1 text-rose-700 hover:text-orange-600"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Armenian Translation ONLY when clicked */}
                            {isDHyVisible && (
                              <div className="text-sm sm:text-base font-bold text-amber-950 bg-yellow-100 p-3 rounded-xl border border-yellow-400 animate-fadeIn mt-2">
                                🇦🇲 {d.questionHy}
                              </div>
                            )}
                          </div>

                          {/* Отдельная кнопка «Respuesta» */}
                          <button
                            type="button"
                            onClick={() =>
                              setRevealedDesarrolloAnswers({
                                ...revealedDesarrolloAnswers,
                                [d.id]: !isAnswerRevealed,
                              })
                            }
                            className={`px-5 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-black shrink-0 transition-all shadow-sm flex items-center gap-1.5 ${
                              isAnswerRevealed
                                ? 'bg-rose-200 text-rose-950 border-rose-400'
                                : 'bg-yellow-300 border-yellow-500 text-rose-950 hover:bg-yellow-400'
                            }`}
                          >
                            {isAnswerRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            <span>{isAnswerRevealed ? 'Թաքցնել պատասխանը' : 'Respuesta (Տեսնել օրինակելի պատասխանը)'}</span>
                          </button>
                        </div>

                        {/* Student Practice Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Գրի՛ր քո պատասխանը իսպաներենով (Tu respuesta de práctica):
                          </label>
                          <textarea
                            rows={3}
                            value={desarrolloUserInputs[d.id] || ''}
                            onChange={(e) =>
                              setDesarrolloUserInputs({
                                ...desarrolloUserInputs,
                                [d.id]: e.target.value,
                              })
                            }
                            placeholder="Escribe aquí tu respuesta en español con frases completas..."
                            className="w-full p-3.5 text-sm font-medium border-2 border-rose-200 rounded-xl bg-rose-50/30 focus:outline-none focus:ring-2 focus:ring-orange-400 text-slate-950"
                          />
                        </div>

                        {/* Model Answer ONLY when button clicked */}
                        {isAnswerRevealed && (
                          <div className="p-5 rounded-2xl bg-yellow-100 border-2 border-yellow-400 space-y-2 animate-fadeIn">
                            <div className="font-black text-orange-600 flex items-center gap-2 text-base">
                              <Check className="w-5 h-5 font-black" />
                              <span>Respuesta modelo completa (5–8 frases):</span>
                            </div>
                            <div className="font-extrabold text-rose-950 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                              🇪🇸 {d.modelAnswerEs}
                            </div>
                            <div className="text-amber-950 font-bold whitespace-pre-line text-sm sm:text-base leading-relaxed pt-2 border-t border-yellow-300">
                              🇦🇲 {d.modelAnswerHy}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* PARTE 4: CÓMO EVALUAR LAS RESPUESTAS                           */}
            {/* ------------------------------------------------------------- */}
            {billetesSubTab === 'criterios' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-2xl font-black text-rose-950">
                    Cómo evaluar las respuestas — Գնահատման չափանիշներ
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-amber-950">
                    Յուրաքանչյուր տոմս գնահատեք 10 միավորով։
                  </p>

                  {/* Rubric Table */}
                  <div className="overflow-x-auto rounded-2xl border-2 border-rose-200 shadow-xs pt-1">
                    <table className="w-full text-left text-sm sm:text-base">
                      <thead className="bg-[#7a1424] text-white font-extrabold">
                        <tr>
                          <th className="p-4">Criterio / Չափանիշ</th>
                          <th className="p-4 text-center w-28">Puntos</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-rose-100 bg-white">
                        <tr className="hover:bg-rose-50/50">
                          <td className="p-4 font-bold text-rose-950">
                            Comprensión del texto — Տեքստի ըմբռնում
                          </td>
                          <td className="p-4 text-center font-black text-orange-600 text-lg">2</td>
                        </tr>
                        <tr className="hover:bg-rose-50/50">
                          <td className="p-4 font-bold text-rose-950">
                            Conocimiento de la teoría — Տեսության իմացություն
                          </td>
                          <td className="p-4 text-center font-black text-orange-600 text-lg">2</td>
                        </tr>
                        <tr className="hover:bg-rose-50/50">
                          <td className="p-4 font-bold text-rose-950">
                            Identificación de recursos literarios — Գրական միջոցների ճանաչում
                          </td>
                          <td className="p-4 text-center font-black text-orange-600 text-lg">2</td>
                        </tr>
                        <tr className="hover:bg-rose-50/50">
                          <td className="p-4 font-bold text-rose-950">
                            Justificación con ejemplos — Հիմնավորում օրինակներով
                          </td>
                          <td className="p-4 text-center font-black text-orange-600 text-lg">2</td>
                        </tr>
                        <tr className="hover:bg-rose-50/50">
                          <td className="p-4 font-bold text-rose-950">
                            Expresión escrita u oral — Իսպաներենով հստակ պատասխան
                          </td>
                          <td className="p-4 text-center font-black text-orange-600 text-lg">2</td>
                        </tr>
                        <tr className="bg-yellow-100/80 font-black">
                          <td className="p-4 text-rose-950 text-base">Total</td>
                          <td className="p-4 text-center text-orange-600 text-xl font-black">10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Golden Formula Box */}
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-400 space-y-3 mt-4">
                    <div className="font-black text-base text-orange-950 flex items-center gap-2">
                      <span>⭐ Քննության կարևոր կանոն և պատասխանի ոսկե բանաձևը</span>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                      Պարզապես «Es una metáfora» կամ «Es literatura popular» ասելը բավարար չէ։ Աշակերտը պետք է կարողանա պատասխանել այս կառուցվածքով՝
                    </p>
                    <div className="p-4 rounded-xl bg-white border-2 border-orange-300 text-base sm:text-lg font-black text-rose-950 shadow-2xs font-serif leading-relaxed">
                      «Se trata de … porque … . En el texto podemos observar … . Por ejemplo, la expresión “…” demuestra que … . Por lo tanto, …»
                    </div>
                    <p className="text-sm font-bold text-amber-950">
                      Այս ձևով նա կսովորի ոչ միայն մտապահել կանոնները, այլև քննության ժամանակ հիմնավորված, երկար և ինքնուրույն պատասխանել իսպաներենով։
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 1: TEORÍA COMPLETA */}
        {activeTab === 'teoria' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                PARTE I. TEORÍA COMPLETA
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium mt-1">
                Տետրի բոլոր 5 էջերի տեսությունը։ Կտտացրեք ցանկացած իսպաներեն հատվածի վրա՝ հայերեն բացատրությունը տեսնելու համար։
              </p>
            </div>

            <div className="space-y-5">
              {filteredTheory.map((section) => {
                const isExpanded = expandedTheorySections[section.id];
                const secTitleKey = `sec-title-${section.id}`;
                const isSecTitleHyVisible = isArmenianVisible(secTitleKey);

                return (
                  <div
                    key={section.id}
                    className="bg-white rounded-2xl border-2 border-rose-300 shadow-sm overflow-hidden"
                  >
                    <div
                      onClick={() => toggleTheorySection(section.id)}
                      className="p-5 bg-gradient-to-r from-rose-100 via-rose-50 to-white border-b-2 border-rose-200 flex items-center justify-between cursor-pointer hover:bg-rose-100/70 transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-10 h-10 rounded-xl bg-[#7a1424] text-white font-extrabold flex items-center justify-center text-lg shadow-sm border border-[#540d16]">
                          {section.number}
                        </span>
                        <div>
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-rose-950">
                              {section.titleEs}
                            </h3>
                            <button
                              type="button"
                              onClick={(e) => toggleArmenian(secTitleKey, e)}
                              className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500 hover:bg-yellow-400 shadow-2xs"
                            >
                              🇦🇲 {isSecTitleHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                            </button>
                          </div>
                          {isSecTitleHyVisible && (
                            <div className="text-sm sm:text-base font-bold text-amber-950 mt-1 animate-fadeIn">
                              🇦🇲 {section.titleHy}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-rose-300 text-rose-950 shadow-2xs">
                        {isExpanded ? <ChevronUp className="w-6 h-6 font-bold" /> : <ChevronDown className="w-6 h-6 font-bold" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-5 sm:p-7 space-y-6">
                        {section.definition && (
                          <div className="space-y-2">
                            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-2">
                              <span>📌 Definición (Սեղմի՛ր թարգմանության համար)</span>
                            </h4>
                            <ClickableText
                              es={section.definition.es}
                              hy={section.definition.hy}
                              forceOpen={forceShowAllTranslations}
                              badge="Definición"
                              fontSize={fontSize}
                            />
                          </div>
                        )}

                        {section.characteristics && section.characteristics.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-900 flex items-center gap-2">
                              <span>📋 Características (Սեղմի՛ր յուրաքանչյուր հատկանիշին)</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                              {section.characteristics.map((c, idx) => (
                                <ClickableText
                                  key={idx}
                                  es={c.es}
                                  hy={c.hy}
                                  forceOpen={forceShowAllTranslations}
                                  fontSize={fontSize}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {section.examples && section.examples.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                              <span>✨ Ejemplo ilustrativo (Սեղմի՛ր թարգմանության համար)</span>
                            </h4>
                            {section.examples.map((ex, idx) => {
                              const noteKey = `ex-note-${section.id}-${idx}`;
                              const isNoteHyVisible = isArmenianVisible(noteKey);

                              return (
                                <div key={idx} className="space-y-2.5">
                                  <ClickableText
                                    es={ex.es}
                                    hy={ex.hy}
                                    forceOpen={forceShowAllTranslations}
                                    badge="Ejemplo"
                                    fontSize={fontSize}
                                  />
                                  {ex.noteEs && (
                                    <div
                                      onClick={() => toggleArmenian(noteKey)}
                                      className="p-4 rounded-xl bg-rose-50 border-2 border-rose-300 text-sm font-medium text-slate-900 space-y-1.5 cursor-pointer hover:border-orange-400 transition-colors"
                                    >
                                      <div className="flex items-center justify-between gap-2">
                                        <div className="font-bold text-rose-950">🇪🇸 {ex.noteEs}</div>
                                        <span className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500 shrink-0">
                                          🇦🇲 {isNoteHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                                        </span>
                                      </div>
                                      {isNoteHyVisible && ex.noteHy && (
                                        <div className="text-amber-950 font-bold border-t-2 border-yellow-300 pt-2 animate-fadeIn">
                                          🇦🇲 {ex.noteHy}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {section.table && (
                          <div className="space-y-2.5">
                            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-900">
                              📊 Cuadro comparativo (Սեղմի՛ր տողին՝ հայերենը բացելու համար)
                            </h4>
                            <div className="overflow-x-auto rounded-2xl border-2 border-rose-300 shadow-xs">
                              <table className="w-full text-left text-sm sm:text-base">
                                <thead className="bg-[#7a1424] text-white font-extrabold border-b-2 border-rose-300">
                                  <tr>
                                    <th className="p-4 text-base font-extrabold w-1/2">
                                      {section.table.headers[0]}
                                    </th>
                                    <th className="p-4 text-base font-extrabold w-1/2">
                                      {section.table.headers[1]}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-rose-100 bg-white">
                                  {section.table.rows.map((row, rIdx) => {
                                    const rowKey = `table-row-${section.id}-${rIdx}`;
                                    const isRowRevealed = isArmenianVisible(rowKey);

                                    return (
                                      <tr
                                        key={rIdx}
                                        onClick={() => toggleArmenian(rowKey)}
                                        className="hover:bg-yellow-50/60 cursor-pointer transition-colors"
                                      >
                                        <td className="p-4 font-bold text-rose-950">
                                          <div className="flex items-center justify-between gap-3">
                                            <span>{row[0]}</span>
                                            <button
                                              type="button"
                                              onClick={(e) => speakSpanish(row[0], e)}
                                              className="p-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-orange-500 hover:text-white transition-colors"
                                              title="Լսել արտասանությունը"
                                            >
                                              <Volume2 className="w-4 h-4" />
                                            </button>
                                          </div>
                                        </td>
                                        <td className="p-4 font-bold text-slate-900">
                                          {isRowRevealed ? (
                                            <div className="p-2.5 rounded-lg bg-yellow-100 border-2 border-yellow-400 text-amber-950 animate-fadeIn">
                                              🇦🇲 {row[1]}
                                            </div>
                                          ) : (
                                            <span className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-lg bg-yellow-300 text-yellow-950 border border-yellow-500 shadow-2xs hover:bg-yellow-400">
                                              👉 🇦🇲 Կտտացրեք՝ տեսնելու հայերենը
                                            </span>
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {section.subsections && section.subsections.length > 0 && (
                          <div className="space-y-5 pt-3">
                            <h4 className="text-base sm:text-lg font-black uppercase tracking-wider text-rose-950 border-b-2 border-rose-200 pb-2.5">
                              Հնարքների մանրամասն բացատրություն
                            </h4>
                            <div className="grid grid-cols-1 gap-5">
                              {section.subsections.map((sub) => {
                                const subTitleKey = `sub-title-${sub.id}`;
                                const isSubTitleHyVisible = isArmenianVisible(subTitleKey);
                                const howKey = `sub-how-${sub.id}`;
                                const isHowHyVisible = isArmenianVisible(howKey);

                                return (
                                  <div
                                    key={sub.id}
                                    className="p-5 rounded-2xl border-2 border-rose-300 bg-rose-50/40 space-y-3.5 shadow-2xs"
                                  >
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                      <div className="flex items-center gap-2.5">
                                        <span className="text-sm px-2.5 py-1 rounded-lg font-mono font-black bg-orange-500 text-white shadow-2xs">
                                          {sub.code}
                                        </span>
                                        <h5 className="font-extrabold text-rose-950 text-lg sm:text-xl">
                                          {sub.titleEs}
                                        </h5>
                                        <button
                                          type="button"
                                          onClick={() => toggleArmenian(subTitleKey)}
                                          className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500 hover:bg-yellow-400"
                                        >
                                          🇦🇲 {isSubTitleHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                                        </button>
                                      </div>
                                      {sub.level && (
                                        <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-300">
                                          Nivel {sub.level}
                                        </span>
                                      )}
                                    </div>
                                    {isSubTitleHyVisible && (
                                      <div className="text-base font-bold text-amber-950 bg-yellow-100 px-3 py-1.5 rounded-lg border border-yellow-400 animate-fadeIn">
                                        🇦🇲 {sub.titleHy}
                                      </div>
                                    )}

                                    <ClickableText
                                      es={sub.definition.es}
                                      hy={sub.definition.hy}
                                      forceOpen={forceShowAllTranslations}
                                      badge="Սահմանում"
                                      fontSize={fontSize}
                                    />

                                    <div className="space-y-2.5 pt-1">
                                      <div className="text-xs sm:text-sm font-extrabold text-rose-900 uppercase tracking-wider">
                                        Օրինակներ (Ejemplos):
                                      </div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {sub.examples.map((ex, exI) => (
                                          <ClickableText
                                            key={exI}
                                            es={ex.es}
                                            hy={ex.hy}
                                            forceOpen={forceShowAllTranslations}
                                            badge={ex.note ? ex.note : undefined}
                                            fontSize={fontSize}
                                          />
                                        ))}
                                      </div>
                                    </div>

                                    {sub.howToRecognize && (
                                      <div
                                        onClick={() => toggleArmenian(howKey)}
                                        className="p-4 rounded-xl bg-yellow-100 border-2 border-yellow-400 text-sm font-medium text-slate-950 space-y-1.5 cursor-pointer shadow-2xs hover:bg-yellow-200/80 transition-colors"
                                      >
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="font-black text-orange-600 text-base">
                                            🎯 ¿Cómo reconocerla en el examen?
                                          </span>
                                          <span className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-600">
                                            🇦🇲 {isHowHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                                          </span>
                                        </div>
                                        <p className="font-extrabold text-rose-950">🇪🇸 {sub.howToRecognize.es}</p>
                                        {isHowHyVisible && (
                                          <p className="font-bold text-amber-950 border-t border-yellow-300 pt-2 animate-fadeIn">
                                            🇦🇲 {sub.howToRecognize.hy}
                                          </p>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: 8 EJERCICIOS */}
        {activeTab === 'ejercicios' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                PARTE II. EJERCICIOS TIPO EXAMEN
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium mt-1">
                8 վարժություններ՝ հարցերը իսպաներեն, թարգմանությունը բացվում է կտտացնելով։
              </p>
            </div>

            {/* EJERCICIO 1: Multiple Choice Test */}
            <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-7 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-rose-200 pb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                    Վարժություն 1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-rose-950 mt-1.5">
                    EJERCICIO 1. Elige la respuesta correcta (Test de teoría)
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    Ընտրի՛ր ճիշտ տարբերակը (15 հարց)։ Սեղմի՛ր հարցին կամ տարբերակին՝ հայերեն թարգմանությունը բացելու համար։
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-yellow-200 border-2 border-yellow-400 text-base font-black text-rose-950 shadow-2xs">
                    Արդյունք՝ <span className="text-orange-600 font-extrabold">{testScore}</span> / 15
                  </div>
                  <button
                    onClick={resetTest}
                    className="p-2.5 text-rose-800 hover:text-white hover:bg-orange-500 border-2 border-rose-300 rounded-xl transition-colors shadow-2xs"
                    title="Վերսկսել թեստը (Repetir test)"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {ejercicio1Questions.map((q) => {
                  const userAnswer = testAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;
                  const qKey = `test-q-${q.id}`;
                  const isQHyVisible = isArmenianVisible(qKey);

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border-2 transition-all ${
                        testSubmitted
                          ? isCorrect
                            ? 'bg-emerald-50/80 border-emerald-400 ring-2 ring-emerald-300'
                            : 'bg-rose-50/80 border-rose-400 ring-2 ring-rose-300'
                          : 'bg-rose-50/30 border-rose-200 hover:border-rose-400'
                      }`}
                    >
                      <div
                        onClick={() => toggleArmenian(qKey)}
                        className="space-y-1.5 mb-4 cursor-pointer select-none"
                      >
                        <div className="font-extrabold text-rose-950 text-base sm:text-lg flex items-baseline gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#7a1424] text-white flex items-center justify-center text-sm font-black shrink-0 shadow-2xs">
                            {q.id}
                          </span>
                          <span className="flex-1 hover:text-rose-700 transition-colors">
                            {q.questionEs}
                          </span>
                          <span className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500 shrink-0">
                            🇦🇲 {isQHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => speakSpanish(q.questionEs, e)}
                            className="p-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-orange-500 hover:text-white transition-colors shrink-0"
                            title="Լսել հարցը"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {isQHyVisible && (
                          <div className="text-sm sm:text-base font-bold text-amber-950 bg-yellow-100 p-3 rounded-xl border border-yellow-400 animate-fadeIn ml-11">
                            🇦🇲 {q.questionHy}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-11">
                        {q.options.map((opt) => {
                          const isSelected = userAnswer === opt.label;
                          const isOptionCorrect = opt.label === q.correctAnswer;
                          const optKey = `test-opt-${q.id}-${opt.label}`;
                          const isOptHyVisible = isArmenianVisible(optKey);

                          let btnStyle = 'bg-white border-2 border-rose-200 text-rose-950 hover:border-rose-400 hover:bg-rose-50';
                          if (testSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = 'bg-emerald-200 border-2 border-emerald-500 text-emerald-950 font-black';
                            } else if (isSelected && !isOptionCorrect) {
                              btnStyle = 'bg-rose-200 border-2 border-rose-400 text-rose-950 font-bold';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-rose-100 border-2 border-[#7a1424] text-rose-950 font-extrabold ring-2 ring-rose-400/40';
                          }

                          return (
                            <div
                              key={opt.label}
                              className={`p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between gap-1 shadow-2xs ${btnStyle}`}
                            >
                              <div
                                onClick={() => {
                                  if (!testSubmitted) {
                                    setTestAnswers((prev) => ({ ...prev, [q.id]: opt.label }));
                                  }
                                }}
                                className="cursor-pointer flex items-start gap-2.5 flex-1"
                              >
                                <span className="font-black uppercase w-5 shrink-0 text-orange-600">{opt.label})</span>
                                <div className="font-bold flex-1">{opt.textEs}</div>
                              </div>

                              <div className="flex items-center justify-between border-t border-rose-100 pt-1 mt-1">
                                <button
                                  type="button"
                                  onClick={(e) => toggleArmenian(optKey, e)}
                                  className="text-[11px] font-black px-2 py-0.5 rounded bg-yellow-200 text-yellow-950 border border-yellow-400 hover:bg-yellow-300"
                                >
                                  🇦🇲 {isOptHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                                </button>
                                {isOptHyVisible && (
                                  <span className="text-xs font-bold text-amber-950 ml-2 animate-fadeIn">
                                    🇦🇲 {opt.textHy}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {testSubmitted && (
                        <div className="mt-4 pl-0 sm:pl-11 text-sm space-y-2">
                          <div className={`font-black flex items-center gap-2 text-base ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                            {isCorrect ? <Check className="w-5 h-5 font-black" /> : <X className="w-5 h-5 font-black" />}
                            <span>
                              {isCorrect ? 'Ճիշտ է (¡Correcto!)' : `Սխալ է։ Ճիշտ պատասխանն է՝ ${q.correctAnswer})`}
                            </span>
                          </div>
                          <div className="text-slate-900 bg-yellow-100/80 p-3.5 rounded-xl border-2 border-yellow-400 font-medium space-y-1">
                            <div className="font-bold text-rose-950">🇪🇸 {q.explanationEs}</div>
                            <div className="text-amber-950 font-bold">🇦🇲 {q.explanationHy}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-rose-200">
                <button
                  type="button"
                  onClick={handleTestSubmit}
                  className="px-7 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-black text-base shadow-md hover:from-orange-600 hover:to-amber-600 transition-all flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Ստուգել պատասխանները (Corregir respuestas)</span>
                </button>
                <button
                  type="button"
                  onClick={resetTest}
                  className="px-5 py-3 bg-rose-100 text-rose-900 border-2 border-rose-300 rounded-xl font-bold hover:bg-rose-200 transition-colors text-base"
                >
                  Կրկնել թեստը (Repetir test)
                </button>
              </div>
            </div>

            {/* Other 7 exercises similarly rendered */}
            {/* Ejercicio 2 */}
            <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-7 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-rose-200 pb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                    Վարժություն 2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-rose-950 mt-1.5">
                    EJERCICIO 2. Completa las frases
                  </h3>
                  <p className="text-sm font-medium text-slate-600">
                    Լրացրո՛ւ բաց թողնված բառերը (16 հարց)։
                  </p>
                </div>
                <button
                  onClick={() => setShowFillSolutions(!showFillSolutions)}
                  className="px-4 py-2 rounded-xl bg-yellow-300 border-2 border-yellow-500 text-rose-950 hover:bg-yellow-400 text-sm font-black transition-all flex items-center gap-2 shadow-2xs"
                >
                  {showFillSolutions ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span>{showFillSolutions ? 'Թաքցնել պատասխանները' : 'Ցուցադրել ճիշտ պատասխանները'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ejercicio2Questions.map((q) => {
                  const val = fillAnswers[q.id] || '';
                  const isCorrect = val.trim().toLowerCase() === q.correctAnswer.toLowerCase();
                  const qKey = `fill-q-${q.id}`;
                  const isHyVisible = isArmenianVisible(qKey);

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-orange-600 uppercase">Հարց {q.id}</span>
                        <button
                          type="button"
                          onClick={() => toggleArmenian(qKey)}
                          className="text-xs font-black px-2 py-0.5 rounded bg-yellow-300 text-yellow-950 border border-yellow-500"
                        >
                          🇦🇲 {isHyVisible ? 'Թաքցնել' : 'Թարգմանել'}
                        </button>
                      </div>

                      <div
                        onClick={() => toggleArmenian(qKey)}
                        className="text-base font-bold text-rose-950 cursor-pointer hover:text-rose-700"
                      >
                        {q.sentenceEs}
                      </div>

                      {isHyVisible && (
                        <div className="text-sm font-bold text-amber-950 bg-yellow-100 p-2.5 rounded-xl border border-yellow-400 animate-fadeIn">
                          🇦🇲 {q.sentenceHy}
                        </div>
                      )}

                      <div className="pt-1">
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => setFillAnswers({ ...fillAnswers, [q.id]: e.target.value })}
                          placeholder="Գրի՛ր բառը..."
                          className={`w-full px-4 py-2 text-sm sm:text-base font-bold rounded-xl border-2 focus:outline-none focus:ring-2 ${
                            val
                              ? isCorrect
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-emerald-300'
                                : 'border-rose-400 bg-rose-50 text-rose-950'
                              : 'border-rose-300 bg-white text-rose-950'
                          }`}
                        />
                      </div>

                      {showFillSolutions && (
                        <div className="p-3 rounded-xl bg-yellow-200 border-2 border-yellow-400 text-sm text-rose-950 font-bold flex items-center justify-between shadow-2xs">
                          <span>
                            Ճիշտ բառը՝ <strong className="text-orange-600 text-base">{q.correctAnswer}</strong>
                          </span>
                          <span className="text-xs text-slate-800">({q.hintHy})</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TEXTOS */}
        {activeTab === 'textos' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                PARTE III. COMPRENSIÓN Y ANÁLISIS DE TEXTOS
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium mt-1">
                4 գրական տեքստեր՝ բնագիրը իսպաներեն, հայերենը բացվում է կտտացնելով։
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {textosData.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTextId(t.id)}
                  className={`px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all border-2 ${
                    activeTextId === t.id
                      ? 'bg-[#7a1424] text-white border-[#540d16] shadow-md ring-2 ring-rose-400'
                      : 'bg-white text-rose-950 border-rose-300 hover:bg-rose-100'
                  }`}
                >
                  {t.titleEs.split('—')[1] || t.titleEs}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl border-2 border-rose-300 p-6 sm:p-7 shadow-sm space-y-6">
              <div className="border-b-2 border-rose-200 pb-4">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-orange-500 text-white shadow-2xs">
                  {currentTextItem.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-rose-950 mt-1.5">
                  {currentTextItem.titleEs}
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-yellow-50 to-orange-50 border-2 border-rose-300 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-sm font-black uppercase tracking-wider text-rose-950">
                    📖 Texto original (Español)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setRevealedMainTextHy((prev) => ({
                          ...prev,
                          [currentTextItem.id]: !prev[currentTextItem.id],
                        }))
                      }
                      className="px-4 py-1.5 rounded-xl bg-yellow-300 border-2 border-yellow-500 text-rose-950 hover:bg-yellow-400 transition-colors text-xs sm:text-sm font-black shadow-2xs flex items-center gap-1.5"
                    >
                      {revealedMainTextHy[currentTextItem.id] || forceShowAllTranslations ? (
                        <>
                          <EyeOff className="w-4 h-4" />
                          <span>Թաքցնել հայերեն տեքստը</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          <span>👉 🇦🇲 Տեսնել հայերեն թարգմանությունը</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => speakSpanish(currentTextItem.contentEs)}
                      className="px-3.5 py-1.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-bold shadow-2xs"
                      title="Լսել ամբողջ տեքստը"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Լսել տեքստը</span>
                    </button>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border-2 border-rose-200 font-serif whitespace-pre-line text-base sm:text-lg leading-relaxed text-slate-950 shadow-2xs">
                  {currentTextItem.contentEs}
                </div>

                {(revealedMainTextHy[currentTextItem.id] || forceShowAllTranslations) && (
                  <div className="p-5 rounded-2xl bg-yellow-100/90 border-2 border-yellow-400 font-serif whitespace-pre-line text-base sm:text-lg leading-relaxed text-amber-950 font-bold shadow-2xs animate-fadeIn">
                    <div className="text-xs font-sans font-black text-amber-800 mb-1 uppercase">
                      🇦🇲 ՀԱՅԵՐԵՆ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ
                    </div>
                    {currentTextItem.contentHy}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXÁMENES A y B */}
        {activeTab === 'examenes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                PARTE IV. DOS SIMULACROS DE EXAMEN
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium mt-1">
                Քննական տարբերակներ A և B՝ 10 միավորանոց ստուգումով։
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setActiveExamId('A')}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${
                  activeExamId === 'A'
                    ? 'bg-[#7a1424] text-white border-[#540d16] shadow-md ring-2 ring-rose-400'
                    : 'bg-white text-rose-950 border-rose-300 hover:bg-rose-50'
                }`}
              >
                <div className="text-xs uppercase font-black tracking-wider text-yellow-300">Տարբերակ 1</div>
                <div className="text-lg sm:text-xl font-black mt-1">EXAMEN MODELO A (10 puntos)</div>
              </button>

              <button
                type="button"
                onClick={() => setActiveExamId('B')}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${
                  activeExamId === 'B'
                    ? 'bg-[#7a1424] text-white border-[#540d16] shadow-md ring-2 ring-rose-400'
                    : 'bg-white text-rose-950 border-rose-300 hover:bg-rose-50'
                }`}
              >
                <div className="text-xs uppercase font-black tracking-wider text-orange-400">Տարբերակ 2 (Բարդացված)</div>
                <div className="text-lg sm:text-xl font-black mt-1">EXAMEN MODELO B — Más difícil (10 puntos)</div>
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: FLASHCARDS */}
        {activeTab === 'repaso' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                  REPASO FINAL (23 Preguntas rápidas)
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-medium mt-1">
                  Հարցը և պատասխանը իսպաներեն են։ Կտտացրեք՝ հայերենը տեսնելու համար։
                </p>
              </div>

              <select
                value={flashcardCategory}
                onChange={(e) => {
                  setFlashcardCategory(e.target.value);
                  setCurrentFlashcardIndex(0);
                  setIsFlashcardFlipped(false);
                  setRevealedCardHy(false);
                }}
                className="px-4 py-2.5 text-sm font-bold bg-rose-50 border-2 border-rose-300 rounded-xl text-rose-950 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="all">Բոլոր թեմաները (23 հարց)</option>
                <option value="Literatura popular">Literatura popular</option>
                <option value="Literatura culta">Literatura culta</option>
                <option value="Géneros populares">Géneros populares</option>
                <option value="Lenguaje literario">Lenguaje literario</option>
                <option value="Nivel fónico">Nivel fónico</option>
                <option value="Nivel morfosintáctico">Nivel morfosintáctico</option>
                <option value="Nivel semántico">Nivel semántico</option>
              </select>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div
                onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
                className={`min-h-[340px] p-8 sm:p-10 rounded-3xl border-4 transition-all cursor-pointer flex flex-col justify-between shadow-lg relative overflow-hidden select-none ${
                  isFlashcardFlipped
                    ? 'bg-gradient-to-br from-[#3b030b] via-[#5c0915] to-[#240207] text-white border-yellow-400'
                    : 'bg-white text-rose-950 border-rose-300 hover:border-orange-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs sm:text-sm uppercase font-black tracking-wider px-3.5 py-1.5 rounded-xl border-2 ${
                      isFlashcardFlipped
                        ? 'bg-yellow-400 text-rose-950 border-yellow-300 shadow-sm'
                        : 'bg-orange-500 text-white border-orange-400 shadow-sm'
                    }`}
                  >
                    {isFlashcardFlipped ? 'Respuesta' : 'Pregunta rápida'}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setRevealedCardHy(!revealedCardHy);
                    }}
                    className="px-3 py-1 rounded-lg bg-yellow-300 text-rose-950 border border-yellow-500 text-xs font-black hover:bg-yellow-400"
                  >
                    🇦🇲 {revealedCardHy ? 'Թաքցնել հայերենը' : 'Տեսնել հայերենը'}
                  </button>
                </div>

                <div className="py-6 space-y-4 my-auto">
                  {!isFlashcardFlipped ? (
                    <>
                      <div className="text-2xl sm:text-3xl font-black leading-snug text-rose-950">
                        {currentFlashcard.questionEs}
                      </div>
                      {revealedCardHy && (
                        <div className="text-lg sm:text-xl text-amber-950 font-bold bg-yellow-100 p-3.5 rounded-2xl border-2 border-yellow-400 animate-fadeIn">
                          🇦🇲 {currentFlashcard.questionHy}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-xl sm:text-2xl font-bold leading-relaxed text-yellow-300">
                        {currentFlashcard.answerEs}
                      </div>
                      {revealedCardHy && (
                        <div className="text-base sm:text-lg text-white font-medium pt-3 border-t-2 border-rose-800 animate-fadeIn">
                          🇦🇲 {currentFlashcard.answerHy}
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div
                  className={`text-sm text-center font-bold pt-2 ${
                    isFlashcardFlipped ? 'text-rose-200' : 'text-rose-800'
                  }`}
                >
                  {isFlashcardFlipped ? '👉 Սեղմի՛ր նորից՝ հարցին վերադառնալու համար' : '👉 Սեղմի՛ր քարտի վրա՝ պատասխանը բացելու համար'}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={handlePrevFlashcard}
                  className="flex-1 py-3.5 px-6 bg-white border-2 border-rose-300 hover:bg-rose-50 rounded-2xl text-base font-black text-rose-950 transition-colors shadow-xs"
                >
                  ← Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNextFlashcard}
                  className="flex-1 py-3.5 px-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-2xl text-base font-black transition-all shadow-md"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CONSEJOS */}
        {activeTab === 'metodologia' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-rose-950">
                {metodologiaConsejos.titleEs}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium mt-1">
                Քննության մեթոդաբանություն և խորհուրդներ։
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {metodologiaConsejos.phases.map((ph) => (
                <div
                  key={ph.step}
                  className="p-6 rounded-2xl border-2 border-rose-200 bg-rose-50/50 space-y-2.5 shadow-2xs"
                >
                  <span className="w-9 h-9 rounded-full bg-[#7a1424] text-white font-black flex items-center justify-center text-sm shadow-sm">
                    {ph.step}
                  </span>
                  <h4 className="font-black text-rose-950 text-base">{ph.titleEs}</h4>
                  <p className="text-sm text-slate-800 pt-1 font-medium">{ph.descEs}</p>
                  <p className="text-sm text-amber-950 font-bold">{ph.descHy}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer in Burgundy */}
      <footer className="mt-12 border-t-4 border-orange-500 bg-gradient-to-r from-[#3b030b] to-[#240207] py-8 text-center text-sm font-medium text-rose-200 space-y-2">
        <div className="font-extrabold text-base text-yellow-300">
          📚 Preparación Completa para el Examen — 1.º ESO · Lengua Castellana y Literatura (Իսպանիա)
        </div>
        <div className="text-rose-300">
          14 Քննական տոմսեր, 70 վարժություններ և տեսություն։ Բորդո, նարնջագույն և դեղին գունապնակով։
        </div>
      </footer>
    </div>
  );
}
