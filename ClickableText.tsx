import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Languages } from 'lucide-react';

interface ClickableTextProps {
  es: string;
  hy: string;
  className?: string;
  inline?: boolean;
  highlight?: boolean;
  badge?: string;
  forceOpen?: boolean;
  onToggle?: () => void;
  showAudio?: boolean;
  fontSize?: 'normal' | 'large' | 'xlarge';
}

export const ClickableText: React.FC<ClickableTextProps> = ({
  es,
  hy,
  className = '',
  inline = false,
  highlight = false,
  badge,
  forceOpen = false,
  onToggle,
  showAudio = true,
  fontSize = 'large',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const active = forceOpen || isOpen;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle();
    } else {
      setIsOpen(!isOpen);
    }
  };

  const playSpanishAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(es);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find((v) => v.lang.startsWith('es'));
    if (esVoice) utterance.voice = esVoice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  // Font size classes
  const esTextClass =
    fontSize === 'xlarge'
      ? 'text-xl sm:text-2xl font-bold'
      : fontSize === 'large'
      ? 'text-lg sm:text-xl font-bold'
      : 'text-base sm:text-lg font-semibold';

  const hyTextClass =
    fontSize === 'xlarge'
      ? 'text-lg sm:text-xl font-semibold'
      : fontSize === 'large'
      ? 'text-base sm:text-lg font-medium'
      : 'text-sm sm:text-base font-medium';

  if (inline) {
    return (
      <span className={`inline-flex flex-col align-baseline ${className}`}>
        <span
          onClick={handleToggle}
          title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար"
          className="cursor-pointer group inline-flex items-center gap-1.5 font-bold text-rose-950 border-b-2 border-dashed border-orange-400 hover:text-orange-600 transition-colors"
        >
          <span>{es}</span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-300 text-yellow-950 font-bold border border-yellow-500 shadow-2xs">
            🇦🇲 Թարգմանել
          </span>
        </span>
        {active && (
          <span className="text-base font-semibold text-amber-950 bg-yellow-100/90 px-2.5 py-1 rounded-lg mt-1 border-2 border-yellow-400 shadow-xs animate-fadeIn">
            🇦🇲 {hy}
          </span>
        )}
      </span>
    );
  }

  return (
    <div
      onClick={handleToggle}
      className={`group relative rounded-2xl border-2 transition-all duration-200 cursor-pointer overflow-hidden shadow-xs hover:shadow-md ${
        active
          ? 'bg-gradient-to-br from-yellow-50/90 via-amber-50/60 to-orange-50/40 border-yellow-400 ring-2 ring-yellow-400/40'
          : 'bg-white border-rose-200 hover:border-rose-400 hover:bg-rose-50/30'
      } ${highlight ? 'ring-2 ring-orange-500' : ''} ${className}`}
    >
      <div className="p-4 sm:p-5 flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 space-y-2.5">
          {badge && (
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-rose-100 text-rose-900 border border-rose-200">
              {badge}
            </span>
          )}

          {/* Spanish content - Highly visible, bold, deep burgundy/rose */}
          <div className={`${esTextClass} text-slate-950 leading-relaxed flex items-baseline gap-2.5`}>
            <span className="font-extrabold text-xs px-2 py-1 rounded-md bg-orange-500 text-white shrink-0 shadow-2xs uppercase tracking-wide">
              🇪🇸 ES
            </span>
            <span className="flex-1 text-rose-950">{es}</span>
          </div>

          {/* Click prompt indicator when collapsed */}
          {!active && (
            <div className="text-xs sm:text-sm text-rose-800 bg-rose-100/70 border border-rose-300/80 px-3 py-1.5 rounded-lg flex items-center gap-2 select-none font-bold w-fit group-hover:bg-yellow-200 group-hover:text-yellow-950 group-hover:border-yellow-400 transition-colors">
              <Languages className="w-4 h-4 text-orange-600" />
              <span>👉 Կտտացրեք՝ հայերեն թարգմանությունը տեսնելու համար (Haz clic para ver armenio)</span>
            </div>
          )}

          {/* Armenian content when expanded */}
          {active && (
            <div className="pt-3 mt-2 border-t-2 border-yellow-300 text-yellow-950 leading-relaxed flex items-baseline gap-2.5 animate-fadeIn bg-yellow-200/50 -mx-4 -mb-4 p-4 rounded-b-xl">
              <span className="font-extrabold text-xs px-2 py-1 rounded-md bg-yellow-400 text-yellow-950 border border-yellow-600 shrink-0 shadow-2xs uppercase tracking-wide">
                🇦🇲 HY
              </span>
              <span className={`flex-1 ${hyTextClass} text-slate-950 font-bold`}>{hy}</span>
            </div>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
          {showAudio && (
            <button
              type="button"
              onClick={playSpanishAudio}
              title="Լսել իսպաներեն արտասանությունը (Escuchar pronunciación)"
              className={`p-2.5 rounded-xl border transition-colors shadow-2xs ${
                isPlaying
                  ? 'bg-orange-500 text-white border-orange-600 animate-pulse'
                  : 'bg-rose-100 text-rose-800 border-rose-300 hover:bg-orange-500 hover:text-white hover:border-orange-500'
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
          <span
            className={`p-2 rounded-xl border transition-colors ${
              active
                ? 'bg-yellow-300 text-yellow-950 border-yellow-400'
                : 'bg-slate-100 text-slate-600 border-slate-300 group-hover:bg-rose-100 group-hover:text-rose-800'
            }`}
          >
            {active ? <ChevronUp className="w-5 h-5 font-bold" /> : <ChevronDown className="w-5 h-5 font-bold" />}
          </span>
        </div>
      </div>
    </div>
  );
};

// Compact Clickable Phrase for questions, options, headings, table cells
interface ClickablePhraseProps {
  es: string;
  hy: string;
  forceOpen?: boolean;
  className?: string;
  esClassName?: string;
  showAudio?: boolean;
  prefix?: React.ReactNode;
}

export const ClickablePhrase: React.FC<ClickablePhraseProps> = ({
  es,
  hy,
  forceOpen = false,
  className = '',
  esClassName = 'text-base font-bold text-rose-950',
  showAudio = true,
  prefix,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const active = forceOpen || isOpen;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(es);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find((v) => v.lang.startsWith('es'));
    if (esVoice) utterance.voice = esVoice;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={handleToggle}
      className={`group cursor-pointer select-none rounded-xl transition-all ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-baseline gap-2 flex-1 flex-wrap">
          {prefix}
          <span className={`${esClassName} group-hover:text-rose-700 transition-colors`}>{es}</span>
          {!active && (
            <span
              title="Սեղմիր՝ հայերեն թարգմանությունը բացելու համար"
              className="inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md bg-yellow-300 text-yellow-950 border border-yellow-500 shadow-2xs group-hover:bg-yellow-400 shrink-0"
            >
              🇦🇲 Թարգմանել
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {showAudio && (
            <button
              type="button"
              onClick={playAudio}
              className="p-1 rounded-lg text-rose-700 hover:bg-orange-500 hover:text-white transition-colors"
              title="Լսել իսպաներեն"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
          <span className="p-0.5 text-slate-400 group-hover:text-rose-700">
            {active ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </div>
      </div>

      {active && (
        <div className="mt-2 p-2.5 rounded-lg bg-yellow-100 border-2 border-yellow-400 text-sm font-bold text-slate-950 animate-fadeIn flex items-baseline gap-2">
          <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-yellow-400 text-yellow-950 border border-yellow-600 shrink-0">
            🇦🇲 HY
          </span>
          <span className="flex-1">{hy}</span>
        </div>
      )}
    </div>
  );
};
