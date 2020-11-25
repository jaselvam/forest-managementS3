export function getAdmin() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_ADMIN'  
        });  
    }  
};  
  
export function addAdmin(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'ADD_ADMIN',  
            payload: data  
        });  
    }  
};  
  
export function editAdmin(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'EDIT_ADMIN',  
            payload: data  
        });  
    }  
};  
  
export function deleteAdmin(adminId) {  
    return dispatch => {  
        return dispatch({  
            type: 'DELETE_ADMIN',  
            payload: adminId  
        });  
    }  
}; 