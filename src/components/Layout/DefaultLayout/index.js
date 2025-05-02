import React from 'react'
import Header from './Header/Index'
import SideBar from './SideBar/Index'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={ cx('wrapper') }>
            <Header />
            <div className={ cx('container') }>
                <SideBar />
                <div className={ cx('content') }>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout