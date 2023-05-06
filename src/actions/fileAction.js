import axios from "axios";
export const PICK_FILE = "PICK_FILE";
export const DELETE_FILE = "DELETE_FILE";
export const ADD_FILE = "ADD_FILE";

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