export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
//-----------------------------
export const TOMAINWINDOW = "TOMAINWINDOW";
export const TOFILES = "TOFILES";
//files---------------------------------------------------
export const NEWTHISFILE = "NEWTHISFILE";
export const PICKFILE = "PICKFILE";
export const DELETECALC = "DELETECALC";
export const DELETEFILE = "DELETEFILE";
export const ADDFILE = "ADDFILE";
export const ADDALLFILES = "ADDALLFILES";
//files end-----------------------------------------------

export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};
export const addCalc = (calc, name, type) => {
    return {
        type: ADDFILE,
        payload: {
            calc: calc,
            name: name,
            type: type
        }
    };
};
export const deleteCalc = (index) => {
    return {
        type: DELETECALC,
        payload: index
    };
};
export const deleteFile = (id) => {
    return {
        type: DELETEFILE,
        payload: id
    };
};
export const pickFile = (index) => {
    return {
        type: PICKFILE,
        payload: index
    };
};
