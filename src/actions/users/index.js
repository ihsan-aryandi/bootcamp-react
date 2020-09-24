export const getUsers = () => {
    return {
        type: "GET_USERS"
    }
}

export const getUser = () => {
    return {
        type: "GET_USER"
    }
}

export const setUsers = users => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    }
}

export const addUser = newUser => {
    return {
        type: "ADD_USER",
        payload: {
            newUser
        }
    }
}

export const deleteUser = userId => {
    return {
        type: "DELETE_USER",
        payload: {
            userId
        }
    }
}

export const editUserByUserRole = (userId, newData) => {
    return {
        type: "EDIT_BY_USER_ROLE",
        payload: {
            userId,
            newData
        }
    }
}

export const addPedagangProduct = (userId, data) => {
    return {
        type: 'ADD_PEDAGANG_PRODUCT',
        payload: {
            userId,
            data
        }
    }
}

export const deletePedagangProduct = (userId, productId) => {
    return {
        type: 'DELETE_PEDAGANG_PRODUCT',
        payload: {
            userId,
            productId
        }
    }
}

export const editPedagangProduct = (userId, productId, data) => {
    return {
        type: 'EDIT_PEDAGANG_PRODUCT',
        payload: {
            userId,
            productId,
            data
        }
    }
}

export const addToUserCart = (userId, data) => {
    return {
        type: 'ADD_TO_USER_CART',
        payload: {
            userId,
            data
        }
    }
}

export const incrementQuantity = (userId, productId) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload : {
            userId,
            productId
        }
    }
}

export const decrementQuantity = (userId, productId) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload : {
            userId,
            productId
        }
    }
}

export const removeItemFromCart = (userId, productId) => {
    return {
        type: 'REMOVE_ITEM',
        payload : {
            userId,
            productId
        }
    }
}