import axios from "axios";
export const PICK_FILE = "PICK_FILE";
export const UNPICK_FILE = "UNPICK_FILE";
export const DELETE_FILE = "DELETE_FILE";
export const ADD_FILE = "ADD_FILE";
export const UPDATE_FILE = "UPDATE_FILE";

export const addFile = (file) => {
    return {
        type: ADD_FILE,
        payload: file
    };
};
export const deleteFile = (id) => {
    return {
        type: DELETE_FILE,
        payload: id
    };
};
export const pickFile = (id) => {
    return {
        type: PICK_FILE,
        payload: id
    };
};
export const unPickFile = () => {
    return {
        type: UNPICK_FILE
    };
};
export const updateFile = (newThisFile) => {
    return {
        type: UPDATE_FILE,
        payload: newThisFile
    };
};

export const addFileAction = (calc) => {
    return (dispatch) => {
        let config = {
            headers: {'Content-Type': 'application/json'},
            data: {
                calc: calc
            },
        };
        axios.post('/orders', config)
            .then(response => {
                const data = response.data
                dispatch(addFile(data))
                dispatch(unPickFile())
                dispatch(pickFile(data.id))

            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const deleteFileAction = (id) => {
    return (dispatch) => {
        let config = {
            headers: {'Content-Type': 'application/json'},
            data: {
                id: id
            },
        };
        axios.delete('/orders', config)
            .then(response => {
                const data = response.data
                console.log(data);
                if(data.status === "ok"){
                    dispatch(deleteFile(id))
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const updateFileAction = (thisFile, parameter, parameter2, parameter3, value, value2, value3) => {
    return (dispatch) => {
        let config = {
            id: thisFile.id,
            parameter: parameter,
            parameter2: parameter2,
            parameter3: parameter3,
            value: value,
            value2: value2,
            value3: value3,
        };
        axios.put('/orders', config)
            .then(response => {
                if(response.data.status === "ok"){
                    console.log(response.data);
                    let thisFileUpdated = thisFile
                    Object.defineProperty(thisFile, parameter, {
                        value: value,
                        writable: true
                    });
                    Object.defineProperty(thisFile, "x", {
                        value: response.data.x,
                        writable: true
                    });
                    Object.defineProperty(thisFile, "y", {
                        value: response.data.y,
                        writable: true
                    });
                    Object.defineProperty(thisFile, "format", {
                        value: response.data.format,
                        writable: true
                    });
                    Object.defineProperty(thisFile, "price", {
                        value: response.data.price,
                        writable: true
                    });
                    dispatch(updateFile(thisFileUpdated))
                } else {
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
}