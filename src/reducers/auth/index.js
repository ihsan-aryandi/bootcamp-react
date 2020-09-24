let loginStatus = {
    isLoggedIn: false,
    user: null
}

export const LoginReducer = (state = loginStatus, action) => {
    switch(action.type) {
        case "LOGIN" :
            loginStatus = { ...loginStatus, ...{
                isLoggedIn: true,
                user: action.payload.user
            }}
            
            return loginStatus
        case "LOGOUT" :
            loginStatus = {
                isLoggedIn: false,
                user: null
            }

            return loginStatus
        default : 
            return state
    }
}