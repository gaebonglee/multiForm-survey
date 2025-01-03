export type QuestionType =
  | "shortText"
  | "longText"
  | "multipleChoice"
  | "checkbox"
  | "dropdown"
  | "date"
  | "time";


  export type QuestionData = {
    id: number;
    title: string;
    type: QuestionType;
    required: boolean;
    options?: string[];
  };