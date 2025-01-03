import { makeAutoObservable } from "mobx";
import Question from "./models/question";
import { createContext, PropsWithChildren, useContext } from "react";

class SurveyStore {
  questions: Question[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addQuestion() {
    this.questions.push(new Question());
  }
  removeQuestion(id: number) {
    this.questions = this.questions.filter((question) => question.id !== id);
  }
  copyQuestion(id: number) {
    const question = this.questions.find((q) => q.id === id);
    if (question) {
      this.questions.push(
        new Question({
          ...question,
          id: Date.now(),
        })
      );
    }
  }
}

const surveyStore = new SurveyStore();
const surveyStoreContext = createContext(surveyStore);

export const useSurveyStore = () => useContext(surveyStoreContext);
export const SurveyStoreProvider = ({ children }: PropsWithChildren) => (
  <surveyStoreContext.Provider value={surveyStore}>
    {children}
  </surveyStoreContext.Provider>
);
