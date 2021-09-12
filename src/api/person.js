const getPersons = async(businessId) => {
  const response = await fetch(`${BASE_API_URL}/business/${businessId}/persons`, { // eslint-disable-line
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
    },
  })
  const json = await response.json()
  return json
}


/**
 * 
 * @param {string} businessId
 * @param {string} name
 * @param {string} role
 * @param {string} email
 * @param {string} phone
 * @param {string} joinDate
 */
 const createPerson = async(businessId, name, role, email, phone, joinDate) => {
  const response = await fetch(`${BASE_API_URL}/business/${businessId}/persons`, { // eslint-disable-line
    method: 'POST',
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, role, email, phone, join_date: joinDate })
  })
  const json = await response.json()
  return json
}


/**
 * 
 * @param {string} businessId
 * @param {string} personId
 * @param {string} name
 * @param {string} role
 * @param {string} email
 * @param {string} phone
 */
 const editPerson = async(businessId, personId, name, role, email, phone) => {
  const response = await fetch(`${BASE_API_URL}/business/${businessId}/persons/${personId}`, { // eslint-disable-line
    method: 'PUT',
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, role, email, phone, })
  })
  const json = await response.json()
  return json
}

/**
 * 
 * @param {string} businessId
 * @param {string} personId
 */
 const deletePerson = async(businessId, personId) => {
  const response = await fetch(`${BASE_API_URL}/business/${businessId}/persons/${personId}`, { // eslint-disable-line
    method: 'DELETE',
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
    },
  })
  const json = await response.json()
  return {
    json,
    status: response.status
  }
}

export {
  getPersons,
  createPerson,
  editPerson,
  deletePerson,
}
