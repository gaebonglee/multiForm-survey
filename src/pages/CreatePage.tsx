import { toJS } from "mobx";
import SectionListEditor from "../components/edit/SectionListEditor";
import { useSurveyStore } from "../store";
import callApi from "../utils/api";

export default function CreatePage() {
  const surveyStore = useSurveyStore();
  const handleSubmit = () => {
    callApi("/surveys", {
      method: "POST",
      body: toJS({ sections: surveyStore.sections }),
    });
  };
  return (
    <>
      <div>
        <button onClick={handleSubmit}></button>
      </div>
      <SectionListEditor />
    </>
  );
}
