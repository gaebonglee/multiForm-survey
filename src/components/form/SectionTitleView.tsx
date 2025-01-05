
import Section from "../../models/section";
import Panel, { PanelCap, PanelBody } from "../common/Panel";

interface Props {
  section: Section;
}

function SectionTitleView({
  section,
}: Props) {
  return (
    <div>
      <PanelCap />
      <Panel>
        <PanelBody className="felx flex-col">
          <h4 className="mb-17 text-24 text-gray900 font-semibold">
            {section.title}
          </h4>
          <p className="text-16 text-gray700 ">{section.description}r</p>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default SectionTitleView;
