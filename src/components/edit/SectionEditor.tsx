import { useSurveyStore } from "../../store";
import QuestionEditor from "./QuestionEditor";

export default function SectionEditor() {
  const surveyStore = useSurveyStore();
  return (
    <div className="relative">
      <div className="absolute top-0 -right-50">
        <button onClick={() => surveyStore.addQuestion()}>Add Question</button>
      </div>
      <div>
        {surveyStore.questions.map((question) => (
          <QuestionEditor key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
