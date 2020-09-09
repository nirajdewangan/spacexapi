export const getData = () =>{

  return fetch(`https://api.spacexdata.com/v3/launches?limit=100`, {
    method: "GET"
  })
  .then( response => {
    return response.json()
  })
  .catch( err => console.log(err))

}