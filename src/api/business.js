const getBusinesses = async() => {
  const response = await fetch(`${BASE_API_URL}/business`, { // eslint-disable-line
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
    },
  })
  const json = await response.json()
  return json
}

/**
 * 
 * @param {string} name
 */
const createBusiness = async(name) => {
  const response = await fetch(`${BASE_API_URL}/business`, { // eslint-disable-line
    method: 'POST',
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name })
  })
  const json = await response.json()
  return json
}


/**
 * 
 * @param {string} name
 */
 const editBusiness = async(businessId, name) => {
  const response = await fetch(`${BASE_API_URL}/business/${businessId}`, { // eslint-disable-line
    method: 'PUT',
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name })
  })
  const json = await response.json()
  return json
}

/**
 * 
 * @param {string} name
 */
const deleteBusiness = async(businessId) => {
  const response = await fetch(`${BASE_API_URL}/business/${businessId}`, { // eslint-disable-line
    method: 'DELETE',
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  return {
    json,
    status: response.status
  }
}

export {
  getBusinesses,
  createBusiness,
  editBusiness,
  deleteBusiness,
}
