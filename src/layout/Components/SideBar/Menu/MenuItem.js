import classNames from "classnames/bind"
import styles from './Menu.module.scss'
import { NavLink } from "react-router-dom"

const cx = classNames.bind(styles)

function MenuItem({ title, icon, activeIcon, to }) {
    return (
        <NavLink to={ to } className={ (nav) => cx('menu-item', { active: nav.isActive }) }>
            { ({ isActive }) => (
                <>
                    { isActive ? activeIcon : icon }
                    <span className={ cx('menu-title') }>{ title }</span>
                </>
            ) }
        </NavLink>
    )
}

export default MenuItem