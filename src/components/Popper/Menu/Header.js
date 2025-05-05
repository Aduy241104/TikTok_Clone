import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={ cx('header') } onClick={ () => onBack() }>
            <button className={ cx('back-btn') }>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <h4 className={ cx('header-title') }>{ title }</h4>
        </header>
    )
}

export default Header