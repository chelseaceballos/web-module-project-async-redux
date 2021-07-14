import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchQuote = (dispatch) => {
    //hit api axios
    dispatch({type: FETCH_START}); // loading = true, display spinner
    axios.get("https://ghibliapi.herokuapp.com/films")
    
    // Then if it's happy, save the response to state.quoteReducer.quote
    .then(res => {
        console.log(res);
        dispatch({type: FETCH_SUCCESS, payload: res.data.title })
    })
    // if it's sad, catch the error message and save it to state.quoteReducer.error
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_FAIL, payload: err });
    })
}