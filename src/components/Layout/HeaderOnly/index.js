import React from 'react'
import Header from './Header/Index'

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className='contain'>
                    { children }
            </div>
        </div>
    )
}

export default HeaderOnly