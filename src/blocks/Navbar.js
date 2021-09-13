/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Toggle from "components/Toggle"
import useToggle from "hooks/useToggle"
import { useTranslation } from "react-i18next"
import { useContext } from 'react'
import { ThemeContext } from "context/ThemeContext"
import { Link } from "react-router-dom"
import Icon from "components/Icon"

const styles = css`
  width: 100%;
  height: 5rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;

  [data-content] {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    [data-brand] {
      flex-grow: 1;
    }
  }
`

/**
 * @type {FC} Navbar
 **/
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation('common')
  const { selected, handleSelect } = useToggle(theme)

  const handleToggleChange = (value) => {
    if(value !== selected) {
      handleSelect(value)
    }
  }

  return (
    <nav css={styles}>
      <div data-content>
        <span data-brand>
          <Link to="/">Business App</Link>
        </span>
        <Toggle>
          <Toggle.Option selected={i18n.language === 'en'} onChange={() => {
            i18n.changeLanguage('en')
          }}>
            {t('langEN')}
          </Toggle.Option>
          <Toggle.Option selected={i18n.language === 'es'} onChange={() => {
            i18n.changeLanguage('es')
          }}>
            {t('langES')}
          </Toggle.Option>
        </Toggle>
        <Toggle>
          <Toggle.Option selected={selected === 'light'} onChange={() => {
            handleToggleChange('light')
            setTheme('light')
          }}>
            <Icon featherIcon="icon-sun"/>
          </Toggle.Option>
          <Toggle.Option selected={selected === 'dark'} onChange={() => {
            handleToggleChange('dark')
            setTheme('dark')
          }}>
            <Icon featherIcon="icon-moon"/>
          </Toggle.Option>
        </Toggle>
      </div>
    </nav>
  )
}

export default Navbar
