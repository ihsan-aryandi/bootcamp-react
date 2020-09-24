export default function useProducts(users) {
    let usersProducts = []

    users.forEach(user => {
        if(user.role === "pedagang")
        {
            usersProducts = [...usersProducts, ...user.products]
        }
    })

    return usersProducts 
}
