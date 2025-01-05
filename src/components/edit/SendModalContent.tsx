import callApi from "../../utils/api";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Panel, { PanelBody, PanelFooter, PanelHeader } from "../common/Panel";

//react icon
import { CgClose } from "react-icons/cg";

interface Props {
  surveyId: number;
  emailCollected: boolean;
  onClose: () => void;
}

export default function SendModalContent({
  surveyId,
  emailCollected,
  onClose,
}: Props) {
  const path = `${location.host}/surveys/${surveyId}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(path);
    onClose();
  };
  const handleChangeEmailCollected = (value: boolean) => {
    callApi(`/surveys/${surveyId}`, {
      method: "PATCH",
      body: {
        emailCollected: value,
      },
    });
  };
  return (
    <Panel className="text-gray900">
      <PanelHeader className="flex justify-between items-center mb-19 ">
        <h4 className=" text-20 font-semibold">설문지 보내기</h4>
        <button onClick={onClose}>
          <CgClose />
        </button>
      </PanelHeader>
      <PanelBody>
        <div className="-mx-20 px-20 bg-bg flex justify-between items-centerpy-13 mb-38">
          <span className="text-16 font-medium ">이메일 수집</span>
          <Dropdown<boolean>
            defaultValue={emailCollected}
            options={[
              { label: "수집하지않음", value: false },
              { label: "수집함", value: true },
            ]}
            onChange={handleChangeEmailCollected}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-17 font-semibold ">링크</span>
          <p className="py-21 pb-16 text-gray800 font-medium text-16">{path}</p>
        </div>
      </PanelBody>
      <PanelFooter className=" flex justify-end mt-26">
        <Button variant="tertiary" onClick={onClose}>
          취소
        </Button>
        <Button variant="secondary" onClick={handleCopy}>
          복사
        </Button>
      </PanelFooter>
    </Panel>
  );
}
