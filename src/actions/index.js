import axios from 'axios'
export const CAKE_URL_START = 'CAKE_URL_START'
export const CAKE_URL_SUCCESS = 'CAKE_URL_SUCSESS'
export const CAKE_URL_FAIL = 'CAKE_URL_FAIL'

const getCakesRecipes= async()=>{
    const API_ID="3b319b91"
    const API_KEY="49c4670d46b4b30b4efafbaaca0ba09c"

    return (dispatch) => {
        dispatch({ type: CAKE_URL_START })
    
      axios.get(`https://api.edamam.com/search?q=cake&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => dispatch({
          payload: response.data.hits,
          type: CAKE_URL_SUCCESS
        }))
        .catch(error => dispatch({
          payload: error.message,
          type: CAKE_URL_FAIL
        }))
      


    }
}
   
export default getCakesRecipes