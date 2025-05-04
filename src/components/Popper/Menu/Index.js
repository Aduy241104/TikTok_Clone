import React from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '../Index'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles);


function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => ( 
            <MenuItem data={ item } key={ index } />
        ))
    }

    return (
        <Tippy
            interactive={ true }
            visible
            placement="top-start"
            render={ attrs => (
                <div className={ cx('content') } tabIndex="-1" { ...attrs }>
                    <PopperWrapper>
                       {renderItems()}
                    </PopperWrapper>
                </div>
            ) }
        >

            { children }
        </Tippy>
    )
}

export default Menu