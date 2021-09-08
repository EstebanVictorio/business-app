import DS from "ds"
import Navbar from "blocks/Navbar"

/** @type {FC} Base */
const Base = ({ children }) => (
  <DS>
    <Navbar />
    {children}
  </DS>
)

export default Base
