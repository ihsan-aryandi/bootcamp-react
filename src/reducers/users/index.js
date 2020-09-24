import { v4 as uuidv4 } from 'uuid';

let users = []

export const UsersReducer = (state = users, action) => {
    switch(action.type) {
        case "SET_USERS" :
            users = action.payload.users
            return users
        case "EDIT_BY_USER_ROLE" :
            users = editUser(action.payload.userId, action.payload.newData)
            return users
        case "ADD_USER" :
            users = addUser(action.payload.newUser)
            return users
        case "DELETE_USER" :
            users = deleteUser(action.payload.userId)
            return users
        case "ADD_PEDAGANG_PRODUCT" :
            users = addPedagangProduct(action.payload.userId, action.payload.data)
            return users
        case "DELETE_PEDAGANG_PRODUCT" :
            users = deletePedagangProduct(action.payload.userId, action.payload.productId)
            return users
        case "EDIT_PEDAGANG_PRODUCT" :
            users = editPedagangProduct(action.payload.userId, action.payload.productId, action.payload.data)
            return users
        case "ADD_TO_USER_CART" :
            users = addToUserCart(action.payload.userId, action.payload.data)
            return users
        case "INCREMENT_QUANTITY" :
            users = incrementQuantity(action.payload.userId, action.payload.productId)
            return users
        case "DECREMENT_QUANTITY" :
            users = decrementQuantity(action.payload.userId, action.payload.productId)
            return users
        case "REMOVE_ITEM" :
            users = removeItemFromCart(action.payload.userId, action.payload.productId)
            return users
        default :
            return state
    }
}

function editUser(userId, newData) {
    const dataCopy = [...users]
    const userIndex = dataCopy.findIndex(user => user.id === userId);
    dataCopy[userIndex] = {...dataCopy[userIndex], ...newData}

    return dataCopy
}

function addUser(newUser) {
    return [...users, { id: uuidv4(), ...newUser }];
}

function deleteUser(userId) {
    return users.filter(user => user.id !== userId)   
}

function addPedagangProduct(userId, data) {
    const dataCopy = [...users]
    const index = dataCopy.findIndex(value => value.id === userId)
    dataCopy[index].products = [...dataCopy[index].products, { id: uuidv4(), ...data }]

    return dataCopy;
}

function deletePedagangProduct(userId, productId)
{
    const dataCopy = [...users]
    const userIndex = users.findIndex(value => value.id === userId)
    dataCopy[userIndex].products = dataCopy[userIndex].products.filter(product => product.id !== productId)

    return dataCopy
}

function editPedagangProduct(userId, productId, data)
{
    const dataCopy = [...users]
    const userIndex = dataCopy.findIndex(value => value.id === userId)
    const productIndex = dataCopy[userIndex].products.findIndex(product => product.id === productId)
    dataCopy[userIndex].products[productIndex] = { ...dataCopy[userIndex].products[productIndex], ...data }

    return dataCopy
}

function addToUserCart(userId, data)
{
    const dataCopy = [...users]
    const userIndex = dataCopy.findIndex(value => value.id === userId)
    dataCopy[userIndex].productsInCart.push(data)

    return dataCopy;
}

function incrementQuantity(userId, productId)
{
    const dataCopy = [...users]
    const userIndex = dataCopy.findIndex(value => value.id === userId)
    const productIndex = dataCopy[userIndex].productsInCart.findIndex(value => value.id === productId)
    
    const newQuantity = dataCopy[userIndex].productsInCart[productIndex].quantity + 1
    
    dataCopy[userIndex].productsInCart[productIndex] = { 
        ...dataCopy[userIndex].productsInCart[productIndex], 
        quantity: newQuantity
    }

    return dataCopy
}

function decrementQuantity(userId, productId)
{
    const dataCopy = [...users]
    const userIndex = dataCopy.findIndex(value => value.id === userId)
    const productIndex = dataCopy[userIndex].productsInCart.findIndex(value => value.id === productId)
    
    const newQuantity = dataCopy[userIndex].productsInCart[productIndex].quantity - 1
    
    dataCopy[userIndex].productsInCart[productIndex] = { 
        ...dataCopy[userIndex].productsInCart[productIndex], 
        quantity: newQuantity
    }

    return dataCopy
}

function removeItemFromCart(userId, productId)
{
    const dataCopy = [...users]
    const userIndex = dataCopy.findIndex(value => value.id === userId)
    dataCopy[userIndex].productsInCart = dataCopy[userIndex].productsInCart.filter(value => value.id !== productId)

    return dataCopy;
}