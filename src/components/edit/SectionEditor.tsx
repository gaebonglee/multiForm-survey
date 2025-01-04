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
    //className="[&>*]:mb-24" 모든 엘리먼트에 margin-bottom 24px을 추가해줘 라는 의미
    <div className="[&>*]:mb-24" onClick={handleClickContainer}>
      <SectionTitleEditor section={section} capTitle={capTitle} />
      {section.questions.map((question) => (
        <QuestionEditor
          key={question.id}
          question={question}
          onCopy={section.copyQuestion}
          onDelete={section.removeQuestion}
        />
      ))}
    </div>
  );
});

export default SectionEditor;
