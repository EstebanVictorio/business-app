const getBusinesses = async() => {
  const response = await fetch(`${BASE_API_URL}/business`, { // eslint-disable-line
    headers: {
      'x-api-key': API_KEY, // eslint-disable-line
    },
  })
  const json = await response.json()
  return json
}


export {
  getBusinesses,
}
