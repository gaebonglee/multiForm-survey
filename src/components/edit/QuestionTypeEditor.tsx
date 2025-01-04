import Dropdown from "../common/Dropdown";
import { QuestionType } from "../../types/app";

//reactIcon
import { AiOutlineBars } from "react-icons/ai";
import { HiMiniBars4 } from "react-icons/hi2";
import { MdOutlineChecklist } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { observer } from "mobx-react-lite";

interface Props {
  type: QuestionType;
  onChange: (type: QuestionType) => void;
}

const QuestionTypeEditor = observer(function QuestionTypeEditor({
  type,
  onChange,
}: Props) {
  return (
    <Dropdown<QuestionType>
      defaultValue={type}
      onChange={(value) => onChange(value)}
      options={[
        {
          label: (
            <div>
              <AiOutlineBars className="inline-block mr-10" />
              <span>단답형</span>
            </div>
          ),
          value: "shortText",
        },
        {
          label: (
            <div>
              <HiMiniBars4 className="inline-block mr-10" />
              <span>장문형</span>
            </div>
          ),
          value: "shortText",
        },
        {
          label: (
            <div>
              <MdOutlineChecklist className="inline-block mr-10" />
              <span>객관식 질문</span>
            </div>
          ),
          value: "shortText",
        },
        {
          label: (
            <div>
              <FaRegCircleCheck className="inline-block mr-10" />
              <span>체크박스</span>
            </div>
          ),
          value: "shortText",
        },
        {
          label: (
            <div>
              <IoArrowDownCircleOutline className="inline-block mr-10" />
              <span>드롭다운</span>
            </div>
          ),
          value: "shortText",
        },
        {
          label: (
            <div>
              <MdCalendarToday className="inline-block mr-10" />
              <span>날짜</span>
            </div>
          ),
          value: "shortText",
        },
        {
          label: (
            <div>
              <MdOutlineAccessTime className="inline-block mr-10" />
              <span>시간</span>
            </div>
          ),
          value: "shortText",
        },
      ]}
    />
  );
});

export default QuestionTypeEditor;
