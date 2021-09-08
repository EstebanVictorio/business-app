/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import Toggle from "components/Toggle"
import useToggle from "hooks/useToggle"
import LightModeIcon from "components/icons/LightMode"
import DarkModeIcon from "components/icons/DarkMode"
import { useContext } from 'react'
import { ThemeContext } from "context/ThemeContext"


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
  }
`

/**
 * @type {FC} Navbar
 **/
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const { selected, handleSelect } = useToggle(theme)

  const handleToggleChange = (value) => {
    if(value !== selected) {
      handleSelect(value)
    }
  }

  return (
    <nav css={styles}>
      <div data-content>
        <Toggle>
          <Toggle.Option selected={selected === 'light'} onChange={() => {
            handleToggleChange('light')
            setTheme('light')
          }}>
            <LightModeIcon />
          </Toggle.Option>
          <Toggle.Option selected={selected === 'dark'} onChange={() => {
            handleToggleChange('dark')
            setTheme('dark')
          }}>
            <DarkModeIcon />
          </Toggle.Option>
        </Toggle>
      </div>
    </nav>
  )
}

export default Navbar
