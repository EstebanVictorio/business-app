import { useState } from "react"

/**
 * 
 * @param {string} selectedOption
 * @returns {{
 *  selected: string
 *  handleSelect: (value: string) => void
 * }}
 */
const useToggle = (selectedOption = '') => {
  const [selected, setSelected] = useState(selectedOption)

  /**
   * 
   * @param {string} value 
   */
  const handleSelect = (value) => {
    if(value !== selected) {
      setSelected(value)
    }
  }

  return {
    selected,
    handleSelect,
  }
}


export default useToggle
