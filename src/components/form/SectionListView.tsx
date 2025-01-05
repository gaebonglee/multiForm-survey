import { useState } from "react";
import { useSurveyStore } from "../../store";

export default function SectionLisView() {
  const surveyStore = useSurveyStore();
  const [currentSection, setCurrentSection] = useState();
  return <SectionView section={surveyStore.sections[currentSection]} />;
}
