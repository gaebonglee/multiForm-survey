import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Panel, { PanelHeader } from "../common/Panel";
import { QuestionType } from "../../types/app";

//reactIcon
import { AiOutlineBars } from "react-icons/ai";
import { HiMiniBars4 } from "react-icons/hi2";
import { MdOutlineChecklist } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";

export default function QuestionEditor() {
  return (
    <Panel>
      <PanelHeader className="flex">
        <Input className="flex-1" />
        <Dropdown<QuestionType>
          options={[
            {
              label: (
                <div>
                  <AiOutlineBars />
                  <span>단답형</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div>
                  <HiMiniBars4 />
                  <span>장문형</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div>
                  <MdOutlineChecklist />
                  <span>객관식 질문</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div>
                  <FaRegCircleCheck />
                  <span>체크박스</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div>
                  <IoArrowDownCircleOutline />
                  <span>드롭다운</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div>
                  <MdCalendarToday />
                  <span>날짜</span>
                </div>
              ),
              value: "shortText",
            },
            {
              label: (
                <div>
                  <MdOutlineAccessTime />
                  <span>시간</span>
                </div>
              ),
              value: "shortText",
            },
          ]}
        />
      </PanelHeader>
    </Panel>
  );
}
