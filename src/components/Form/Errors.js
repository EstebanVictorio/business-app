import { useMemo } from "react"
import { useTranslation } from "react-i18next"

/**
 *
 * @typedef {{
 *  errors: {
 *    type: 'name' | 'role'| 'email' | 'phone'
 *    pass: bool
 *  }[]
 * }} Props
 * @type {FC<Props>} Errors
 */
const Errors = ({ errors  }) => {
  const { t, i18n } = useTranslation('dialog')
  
  const formErrors = useMemo(() => {
    const possibleErrors = errors
      .filter(error => !error.pass)
      .map(error => (t(`forms.${error.type}`)))
    return possibleErrors
  }, [errors, i18n.language])


  return (
    <ul>
      {formErrors.map((error, i) => (
        <li key={`create-error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  )
}


export default Errors
