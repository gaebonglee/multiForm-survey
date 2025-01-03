import { observer } from "mobx-react-lite";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/section";
import SectionTitleEditor from "./SectionTitleEditor";

interface Props {
  section: Section;
  capTitle: string;
  onChangeFocus: (id: number) => void;
}

const SectionEditor = observer(function SectionEditor({
  capTitle,
  section,
  onChangeFocus,
}: Props) {
  const handleClickContainer = () => {
    onChangeFocus(section.id);
  };

  return (
    <div className="[&>*]:mb-24" onClick={handleClickContainer}>
      <SectionTitleEditor section={section} capTitle={capTitle} />
      {section.questions.map((question) => (
        <QuestionEditor
          key={question.id}
          question={question}
          onCopy={section.copyQuesion}
          onDelete={section.removeQuestion}
        />
      ))}
    </div>
  );
});

export default SectionEditor;