import React, { createContext, useContext, useEffect, useState } from 'react'

type Translations = Record<string, any>

type I18nContextType = {
  lang: 'EN' | 'ES'
  t: Translations
  toggleLang: () => void
  loadLang: (lang: 'EN' | 'ES') => Promise<void>
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'EN' | 'ES'>(() => {
    const saved = localStorage.getItem('rc_lang')
    if (saved === 'ES') return 'ES'
    return 'EN'
  })
  const [t, setT] = useState<Translations>({})

  async function loadLang(l: 'EN' | 'ES') {
    try {
      const res = await fetch(`/lang/${l.toLowerCase()}.json`)
      const json = await res.json()
      setT(json)
      setLang(l)
      localStorage.setItem('rc_lang', l)
      if (json.title) document.title = json.title
    } catch (err) {
      console.error('error loading lang', err)
    }
  }

  useEffect(() => {
    loadLang(lang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggleLang() {
    loadLang(lang === 'EN' ? 'ES' : 'EN')
  }

  return <I18nContext.Provider value={{ lang, t, toggleLang, loadLang }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
