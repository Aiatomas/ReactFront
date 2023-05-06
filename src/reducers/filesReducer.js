import {GET_ALL_FILES_FAILURE, GET_ALL_FILES_REQUEST, GET_ALL_FILES_SUCCESS} from "../actions/allFilesAction";
import {ADD_FILE, DELETE_FILE, PICK_FILE} from "../actions/fileAction";

const initialState = {
    allFiles: [],
    isLoading: false,
    error: null,
    thisFile: null
};

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILE:
            return { ...state, allFiles: state.allFiles.concat(action.payload) };
        case DELETE_FILE:
            return {
                ...state,
                allFiles: state.allFiles.filter((item, index) => item.id !== action.payload)
            };
        case PICK_FILE:
            const thisFile = state.allFiles.find((item) => item.id === action.payload);
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