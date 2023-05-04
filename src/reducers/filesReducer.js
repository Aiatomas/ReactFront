import {TOMAINWINDOW, TOFILES, ADDFILE, DELETEFILE, DELETECALC, PICKFILE} from "../actions/actions";

const initialState = {
    allFiles: [],
    thisFile: {}
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
            // state.allFiles.forEach((item, index) => {
            //     if(index === action.payload){
            //         item.active = true
            //     } else {
            //         item.active = false
            //     }
            // })
            return {
                ...state,
                thisFile
            };
        default:
            return state;
    }
};

export default filesReducer;