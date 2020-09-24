export const doLogin = (user) => {
    return {
        type: 'LOGIN',
        payload: {
            user
        }
    }
}

export const doLogout = () => {
    return {
        type: 'LOGOUT'
    }
}