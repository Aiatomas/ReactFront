import {GET_PRICES_FAILURE, GET_PRICES_REQUEST, GET_PRICES_SUCCESS} from "../actions/pricesAction";


const initialState = {
    prices: null,
    pricesIsLoading: false,
    pricesError: null
};

const pricesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRICES_REQUEST:
            return {
                ...state,
                pricesIsLoading: true,
                pricesError: null
            };
        case GET_PRICES_SUCCESS:
            return {
                ...state,
                prices: action.payload,
                pricesIsLoading: false,
                pricesError: null
            };
        case GET_PRICES_FAILURE:
            return {
                ...state,
                pricesIsLoading: false,
                pricesError: action.payload
            };
        default:
            return state;
    }
};

export default pricesReducer;