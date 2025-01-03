import { ReactNode, useState } from "react";
import { QuestionType } from "../../types/app";
import Input from "../common/Input";

//reactIcon
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

interface OptionEditorProps {
  type: QuestionType;
}
export default function OptionEditor({ type }: OptionEditorProps) {
  const [options, setOptions] = useState<string[]>([""]);
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          {icons[type]}
          <Input
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
          />
        </div>
      ))}
      <div className="flex items-center">
        {icons[type]}
        <button
          className="text-gray-500 text-16 mt-28"
          onClick={() => {
            setOptions((prev) => [...prev, ""]);
          }}
        >
          옵션추가
        </button>
      </div>
    </div>
  );
}
const icons: Partial<Record<QuestionType, ReactNode>> = {
  multipleChoice: <IoIosRadioButtonOff className="mr-14" />,
  checkbox: <MdCheckBoxOutlineBlank className="mr-14" />,
  dropdown: <IoIosRadioButtonOff className="mr-14" />,
};
