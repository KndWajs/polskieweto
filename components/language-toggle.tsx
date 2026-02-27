"use client"

import type { Language } from "@/lib/translations"

interface LanguageToggleProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <button
      onClick={() => onLanguageChange(language === "pl" ? "en" : "pl")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-colors text-sm font-medium"
    >
      {language === "pl" ? (
        <>
          <span className="text-base">🇬🇧</span>
          <span>English</span>
        </>
      ) : (
        <>
          <span className="text-base">🇵🇱</span>
          <span>Polski</span>
        </>
      )}
    </button>
  )
}
