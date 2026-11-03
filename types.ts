export interface BilingualText {
  es: string;
  hy: string;
}

export interface TheorySection {
  id: string;
  number: string;
  titleEs: string;
  titleHy: string;
  definition?: {
    es: string;
    hy: string;
  };
  characteristics?: {
    es: string;
    hy: string;
  }[];
  examples?: {
    es: string;
    hy: string;
    noteEs?: string;
    noteHy?: string;
  }[];
  table?: {
    headers: [string, string];
    rows: [string, string][];
  };
  extraContent?: {
    titleEs: string;
    titleHy: string;
    textEs: string;
    textHy: string;
  }[];
  subsections?: TheorySubSection[];
  examTip?: {
    es: string;
    hy: string;
  };
}

export interface TheorySubSection {
  id: string;
  code: string;
  titleEs: string;
  titleHy: string;
  level?: 'fónico' | 'morfosintáctico' | 'semántico';
  definition: {
    es: string;
    hy: string;
  };
  examples: {
    es: string;
    hy: string;
    note?: string;
  }[];
  howToRecognize?: {
    es: string;
    hy: string;
  };
  extraTable?: {
    headers: string[];
    rows: string[][];
  };
}

export interface MultipleChoiceQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: {
    label: string;
    textEs: string;
    textHy: string;
  }[];
  correctAnswer: string;
  explanationEs: string;
  explanationHy: string;
}

export interface FillBlankQuestion {
  id: number;
  sentenceEs: string; // contains blank representation
  sentenceHy: string;
  correctAnswer: string;
  hintEs?: string;
  hintHy?: string;
}

export interface TrueFalseQuestion {
  id: number;
  statementEs: string;
  statementHy: string;
  isTrue: boolean;
  correctionEs?: string;
  correctionHy?: string;
}

export interface PopularCultaQuestion {
  id: number;
  itemEs: string;
  itemHy: string;
  correct: 'POPULAR' | 'CULTA';
  justificationEs: string;
  justificationHy: string;
}

export interface IdentifyFigureQuestion {
  id: number;
  sentenceEs: string;
  sentenceHy: string;
  correctAnswer: string;
  explanationEs: string;
  explanationHy: string;
}

export interface ClassifyLevelQuestion {
  id: number;
  figureEs: string;
  figureHy: string;
  correctLevel: 'Fónico' | 'Morfosintáctico' | 'Semántico';
}

export interface SimilarFiguresPair {
  id: number;
  category: string;
  sentenceEs: string;
  sentenceHy: string;
  options: string[];
  correctAnswer: string;
}

export interface TransformQuestion {
  id: number;
  originalEs: string;
  originalHy: string;
  targetFigureEs: string;
  targetFigureHy: string;
  modelAnswerEs: string;
  modelAnswerHy: string;
  notesHy?: string;
}

export interface TextAnalysisItem {
  id: string;
  titleEs: string;
  titleHy: string;
  type: string;
  contentEs: string;
  contentHy: string;
  noteEs?: string;
  noteHy?: string;
  questions: {
    id: number;
    qEs: string;
    qHy: string;
    modelAnswerEs: string;
    modelAnswerHy: string;
  }[];
}

export interface MockExam {
  id: 'A' | 'B';
  titleEs: string;
  titleHy: string;
  difficulty: 'Standard' | 'Avanzado (Más difícil)';
  totalPoints: number;
  sections: {
    id: number;
    points: number;
    titleEs: string;
    titleHy: string;
    instructionsEs: string;
    instructionsHy: string;
    questions: {
      subId?: string;
      promptEs: string;
      promptHy: string;
      answerEs: string;
      answerHy: string;
    }[];
  }[];
}

export interface QuickReviewCard {
  id: number;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
  category: string;
  hintHy?: string;
}
