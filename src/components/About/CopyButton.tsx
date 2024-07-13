import { OkLogo } from "@components/Icons";
import { useState } from "react";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  const email = "alexander.mamani.dev@gmail.com";

  const handleCopy = () => {
    if (!navigator.clipboard) return console.log("Sorry clipboard isn't available in your device.");

    if (navigator.clipboard && !copied) {
      setCopied(true);
      navigator.clipboard.writeText(email);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className={
          "bg-gradient-to-b from-slate-100 to-slate-50 h-9 hover:from-slate-200 hover:to-slate-100 button-base sm:border-l font-medium text-sm group transition-[width] duration-200" +
          (copied ? " w-[10ch]" : " w-[6.7ch]")
        }>
        <span className={"flex items-center gap-1 group-active:scale-95 transition"}>
          {copied ? (
            <>
              Copied <OkLogo />
            </>
          ) : (
            "Copy"
          )}
        </span>
      </button>
    </>
  );
}
