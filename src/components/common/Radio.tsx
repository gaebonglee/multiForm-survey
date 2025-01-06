import { forwardRef, InputHTMLAttributes } from "react";

//react icon
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = forwardRef<HTMLInputElement, Props>(function Radio(
  { label, ...props },
  ref
) { 
  return (
    <label className="relative h-26 flex items-center">
      <input
        className="peer opacity-0 w-26 h-26"
        ref={ref}
        type="radio"
        {...props}
      />
      <IoIosRadioButtonOn className="absolute top-0 left-0 opacity-0 peer-checked:opacity-100 transition-opacity" />
      <IoIosRadioButtonOff className="absolute top-0 left-0 opacity-100 peer-checked:opacity-0 transition-opacity" />
      <span className="pl-14">{label}</span>
    </label>
  );
});

export default Radio;
