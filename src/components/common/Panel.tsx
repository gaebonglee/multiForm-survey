import { PropsWithChildren } from "react";
import cn from "classnames";

export default function Panel({ children, className }: PropsWithChildren<Cn>) {
  return (
    <div
      className={
        (cn("flex flex-col p-20 pt-26 bg-white rounded-10"), className)
      }
    >
      {children}
    </div>
  );
}

export function PanelHeader({ children, className }: PropsWithChildren<Cn>) {
  return <div className={className}>{children}</div>;
}
export function PanelBody({ children, className }: PropsWithChildren<Cn>) {
  return <div className={className}>{children}</div>;
}
export function PanelFooter({ children, className }: PropsWithChildren<Cn>) {
  return (
    <>
      <hr className="border-gray100" />
      <div className={className}>{children}</div>
    </>
  );
}

export function PanelCap({ children }: PropsWithChildren) {
  return (
    <div className="-mb-10 relative">
      {children && (
        <div className="inline-block px-14 pt-10 pb-6 bg-main rounded-t-10 text-15 text-white">
          {children}
        </div>
      )}
      <div className="bg-main h-9" />
    </div>
  );
}
