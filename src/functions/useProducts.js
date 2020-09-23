import { useState, useEffect } from 'react'

export default function useProducts(users) {
    const[products, setProducts] = useState([])

    useEffect(() => {

        let usersProducts = []
        users.forEach(user => {
            if(user.role === "pedagang")
            {
                usersProducts = [...usersProducts, ...user.products]
            }
        })

        setProducts(usersProducts)
        
    }, [users])


    return products
}
