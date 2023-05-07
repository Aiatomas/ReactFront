import axios from 'axios';
export const GET_PRICES_REQUEST = "GET_PRICES_REQUEST";
export const GET_PRICES_SUCCESS = "GET_PRICES_SUCCESS";
export const GET_PRICES_FAILURE = "GET_PRICES_FAILURE";

const fetchPricesRequest = () => {
    return {
        type: GET_PRICES_REQUEST
    }
}

const fetchPricesSuccess = (prices) => {
    return {
        type: GET_PRICES_SUCCESS,
        payload: prices
    }
}

const fetchPricesFailure = (error) => {
    return {
        type: GET_PRICES_FAILURE,
        payload: error
    }
}

export const fetchPrices = () => {
    return (dispatch) => {
        dispatch(fetchPricesRequest())
        axios.get('/getprices')
            .then(response => {
                const prices = response.data
                console.log(response.data);
                dispatch(fetchPricesSuccess(prices))
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(error.message);
                dispatch(fetchPricesFailure(errorMessage))
            })
    }
}