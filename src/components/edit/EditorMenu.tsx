//react icon
import { CiGrid31 } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { useSurveyStore } from "../../store";
import classNames from "classnames";

export default function EditorMenu({ className }: Cn) {
  const surveyStore = useSurveyStore();
  return (
    <div
      className={classNames(
        "bg-white rounded-10 px-13 py-26 flex flex-col gap-y-26 shadow-sm",
        className,
      )}
    >
      <button onClick={surveyStore.addQuestion}>
        <FiPlusCircle />
      </button>
      <button onClick={surveyStore.addSection}>
        <CiGrid31 />
      </button>
    </div>
  );
}
