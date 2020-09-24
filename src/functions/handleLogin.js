export default function handleLogin(e, doLogin, users, redirect) 
{
    e.preventDefault()

    const { username, password } = e.target
    const user = users.find(user => {
        const usernameCheck = user.username === username.value
        const passwordCheck = user.password === password.value

        return (usernameCheck && passwordCheck)
    })

    if(user === undefined) return alert('Username atau password salah')

    doLogin(user)
    redirect(`/${user.role}`)
}