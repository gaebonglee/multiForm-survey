import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "py-14, px-28 text-16 font-medium rouded-10 border",
        classes[variant]
      )}
      {...props}
    />
  );
}
const classes: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-main border-main text-white",
  secondary: "border-main bg-white text-main",
  tertiary: "border-transparnet bg-transparnet text-gray700",
};
