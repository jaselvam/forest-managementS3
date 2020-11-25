const initialstate = {    
    admins: [    
        { id: 1, adminName: "Janani panneer selvam", adminPassword: "janani@123" },    
        { id: 2, adminName: "Karthika panneer selvam", adminPassword: "karthika@123" },    
        { id: 3, adminName: "Panneer selvam", adminPassword: "selvam@123" }    
    ]    
};    
    
const reducer = (state = initialstate, action) => {    
    switch (action.type) {    
        case 'GET_ADMIN':    
            return {    
                ...state    
            };    
        case 'ADD_ADMIN':    
            return {    
                ...state,    
                admins: state.admins.concat(action.payload)    
            };    
        case 'EDIT_ADMIN':    
            return {    
                ...state,    
                admins: state.admins.map(    
                    (content, i) => content.id === action.payload.id ? {...content, adminName : action.payload.adminName ,  adminPassword : action.payload.adminPassword }    
                                            : content)    
            };    
        case 'DELETE_ADMIN':    
            return {    
                ...state,    
                admins: state.admins.filter(item => item.id !== action.payload)    
            };    
        default:    
            return state;    
    }    
};    
    
export default reducer;