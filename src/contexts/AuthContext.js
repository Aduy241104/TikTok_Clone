import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const Login = (userData,token) => {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem("token", token);
        setUser(userData);
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])
    return (
        <AuthContext.Provider value={ { user, Login } }>
            { children }
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider