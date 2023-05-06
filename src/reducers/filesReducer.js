import {TOMAINWINDOW, TOFILES, ADDFILE, DELETEFILE, DELETECALC, PICKFILE} from "../actions/actions";
import {GET_ALL_FILES_FAILURE, GET_ALL_FILES_REQUEST, GET_ALL_FILES_SUCCESS} from "../actions/allFiles";

const initialState = {
    allFiles: [],
    isLoading: false,
    error: null,
    thisFile: null
};

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDFILE:
            return { ...state, allFiles: state.allFiles.concat(action.payload) };
        case DELETECALC:
            return { ...state, allFiles: state.allFiles.filter((item, index) => index !== action.payload) };
        case DELETEFILE:
            return { ...state, allFiles: state.allFiles.filter((item, index) => item.id !== action.payload) };
        case PICKFILE:
            const thisFile = state.allFiles.find((item, index) => index === action.payload);
            return {
                ...state,
                thisFile
            };

        case GET_ALL_FILES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_ALL_FILES_SUCCESS:
            return {
                ...state,
                allFiles: action.payload,
                isLoading: false,
                error: null
            };
        case GET_ALL_FILES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default filesReducer;