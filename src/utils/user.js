/**
 * 
 * @param {{
 *  lang?: 'es'|'en'
 *  theme?: 'light'|'dark'
 * }} settings
 */
export const setUserSettings = (settings) => {
  const { lang, theme } = settings

  if(lang) {
    localStorage.setItem('lang', lang)
  }

  if(theme) {
    localStorage.setItem('theme', theme)
  }
}
