import { observer } from "mobx-react-lite";
import Section from "../../models/section";
import Input from "../common/Input";
import Panel, { PanelCap, PanelBody } from "../common/Panel";

interface Props {
  capTitle: string;
  section: Section;
}

const SectionTitleEditor = observer(function SectionTitleEditor({
  capTitle,
  section,
}: Props) {
  return (
    <div>
      <PanelCap>{capTitle}</PanelCap>
      <Panel>
        <PanelBody className="felx flex-col">
          <Input
            className="mb-17 text-24 text-gray900 font-semibold py-3"
            value={section.title}
            onChange={(e) => section.setTitle(e.currentTarget.value)}
          />
          <Input
            className="text-16 text-gray700"
            value={section.description}
            onChange={(e) => section.setDescription(e.currentTarget.value)}
          />
        </PanelBody>
      </Panel>
    </div>
  );
});

export default SectionTitleEditor;
