import { useEffect } from "react";
import { useSurveyStore } from "../store";
import { useParams } from "react-router";
import SectionLisView from "../components/form/SectionListView";


export default function FormPage() {
  const surveyStore = useSurveyStore();
  const { surveyId = "" } = useParams<{ surveyId: string }>();


  useEffect(() => {
    const id = parseInt(surveyId, 10);
    if (id) {
      surveyStore.fetchSurvey(id);
    }
  }, [surveyId, surveyStore]);
  return <SectionLisView/>
}
