/** 
 * @param {Iterator<[string, any]>} entries
 */
export const mapEntriesToValues = (entries) => {
  const values = {}
  Array.from(entries).map(([k,v]) => values[k] = v)
  return values
}
