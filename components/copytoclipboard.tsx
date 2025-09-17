"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyToClipboardProps {
  text: string;
  className?: string;
}

export function CopyToClipboard({
  text,
  className = "",
}: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    } catch (err) {
      console.error("Kopyalanamadı: ", err);
    }
  };



  return (
    <button
      onClick={copyToClipboard}
      className={`
        cursor-pointer
        w-1/5
        group
        inline-flex items-center justify-center rounded-md border border-input 
        bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium shadow-sm 
        hover:bg-gray-100 dark:hover:bg-gray-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary 
        transition-all duration-300 ease-in-out
        ${
          isCopied
            ? "text-green-600 dark:text-green-400"
            : "text-gray-700 dark:text-gray-300"
        }
        ${className}
      `}
      aria-label="Copy to clipboard"
    >
      <span className="relative w-4 h-4 mr-2">
        <Copy
          className={`
          absolute inset-0 w-4 h-4 
          transition-all duration-300 ease-in-out
          ${isCopied ? "opacity-0 scale-50" : "opacity-100 scale-100"}
        `}
        />
        <Check
          className={`
          absolute inset-0 w-4 h-4 
          transition-all duration-300 ease-in-out
          ${isCopied ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        `}
        />
      </span>
      <span className="transition-all duration-300 ease-in-out">
        {isCopied ? "Kopyalandı!" : "Kopyala"}
      </span>
    </button>
  );
}
