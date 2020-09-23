import { useState, useEffect } from 'react'

export default function useUsers() {
    const users = useState([])

    useEffect(() => {
        const getFromLocalStorage = async () => {
            if(localStorage.getItem("users") === null)
            {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()

            let dataWithRole = data.map(user => {
                if(user.role === undefined)
                {
                    user.role = "user"
                    user.password = ''
                    user.isActive = false
                    user.productsInCart = []
                }

                return user;
            })

            dataWithRole = [...dataWithRole, {
                    id: "1A",
                    name: "Ihsan Aryandi",
                    username: "admin",
                    password: "admin",
                    role: "admin"
                },
                {
                    id: "1P",
                    name: "Jack Krauser",
                    username: "pedagang",
                    password: "pedagang",
                    role: "pedagang",
                    products: []
                },
                {
                    id: "2P",
                    name: "Leon Scott Kennedy",
                    username: "pedagang2",
                    password: "pedagang2",
                    role: "pedagang",
                    products: []
                }
            ];

            localStorage.setItem('users', JSON.stringify(dataWithRole))
            users[1](prevUsers => [...prevUsers, ...dataWithRole])
            }
            else
            {
            const data = JSON.parse(localStorage.getItem('users'))
            users[1](prevUsers => [...prevUsers, ...data]);
            }
        }
        getFromLocalStorage();
    }, [])

    return users; 
}
