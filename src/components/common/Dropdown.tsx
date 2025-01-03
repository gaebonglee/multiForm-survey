import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownProps<T> {
  placeholder?: string;
  options: DropdownOption<T>[];
  onChange?: (value: T) => void;
}

export default function Dropdown<T>({
  placeholder,
  options,
  onChange,
}: DropdownProps<T>) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(-1);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const handleChange = useCallback(
    (index: number) => {
      setSelected(index);
      onChange?.(options[index].value);
      close();
    },
    [close, options, onChange]
  );
  return (
    <DropdownContext.Provider
      value={{
        opened,
        open,
        close,
        options,
        selected,
        onChange: handleChange,
      }}
    >
      <DropdownButton placeholder={placeholder} />
      <DropdownMenu />
    </DropdownContext.Provider>
  );
}
type DropdownOption<T> = {
  label: ReactNode;
  value: T;
};

interface DropdownContextType<T = unknown> {
  opened: boolean;
  open: () => void;
  close: () => void;
  options: DropdownOption<T>[];
  selected: number;
  onChange: (index: number) => void;
}
const DropdownContext = createContext<DropdownContextType | null>(null);

function DropdownButton({ placeholder = " select" }: { placeholder?: string }) {
  const { open, options, selected } = useContext(DropdownContext)!;
  return (
    <button
      className="border border-gray300 rounded-10 min-w-197 p-14 pr-36  relative"
      onClick={open}
    >
      {selected >= 0 ? options[selected].label : placeholder ?? ""}
      <span className="absolute right-12 top-1/2 transform -translate-y-1/2">
        <IoMdArrowDropdown />
      </span>
    </button>
  );
}
function DropdownMenu() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown.");
  }

  const { opened, options, onChange } = context;
  return opened ? (
    <div>
      {options.map((option, index) => (
        <DropdownMenuItem
          key={`${option.value}`}
          label={option.label}
          onSelect={() => onChange(index)}
        />
      ))}
    </div>
  ) : null;
}

function DropdownMenuItem({
  label,
  onSelect,
}: {
  label: ReactNode;
  onSelect: () => void;
}) {
  return <button onClick={onSelect}>{label}</button>;
}
