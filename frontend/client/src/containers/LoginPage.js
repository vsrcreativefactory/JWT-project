import Layout from "components/Layout"
import { useDispatch } from "react-redux"
import { resetRegistered } from "features/user"
import { useEffect } from "react"

const LoginPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetRegistered())
    }, [] )
    return (
        <Layout title='Auth Site | Login' content='Login Page'>
            <h1>Login</h1>
        </Layout>
    )
}

export default LoginPage