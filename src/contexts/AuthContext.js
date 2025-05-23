import { createContext, useContext, useState, useEffect } from 'react';
import { loginApi } from '../services/authService';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {

        const login = async () => {
            const response = await loginApi("auth/login", {
                email: "aduy8774@gmail.com",
                password: "123456"
            })
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("token", response.meta.token);
            setUser(response.data)
        }
        login();
    }, [])
    return (
        <AuthContext.Provider value={ user }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider