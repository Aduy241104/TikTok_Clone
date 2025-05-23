import React, { useEffect, useState } from 'react'
import { getTestAPI } from './utils/httpRequest'

// {
//     "username": "customer01",
//         "password": "hashedpassword3"
//   }

function Testss() {
    const [account, setAccount] = useState({
        username: "",
        password: ""
    })

    const [active, setActive] = useState(false);

    const [token, setToken] = useState("");

    const handleChange = (e) => {
        setAccount((prev) => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        })
    }

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await getTestAPI('/auth/log-in', account);
                console.log(response);
                setToken(response.data.result.token)
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, [active])

    return (
        <div>
            <input type="text" name='username' placeholder='account' onChange={ (e) => handleChange(e) } />
            <br />
            <input type="password" name='password' placeholder='password' onChange={ (e) => handleChange(e) } />
            <button onClick={ () => setActive(prev => !prev) }>submit</button>

            <h1>{ account.username }</h1>
            <h1>{ account.password }</h1>

            <h1>Token: { token }</h1>
        </div>
    )
}

export default Testss