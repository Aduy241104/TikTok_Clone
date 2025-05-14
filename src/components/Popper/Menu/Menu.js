import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '..'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false }) {

    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const handleChangeSubMenu = (menuItem) => {
        const isParent = !!menuItem.children;
        if (isParent) {
            setHistory(previous => [...previous, menuItem.children])
        }
    }

    const handleBack = () => {
        setHistory(previous => previous.slice(0, previous.length - 1));
    }

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            return (
                <MenuItem data={ item } onClick={ () => handleChangeSubMenu(item) } key={ index } />
            )
        })
    }

    return (
        <Tippy
            interactive={ true }
            placement="top-start"
            delay={ [0, 700] }
            hideOnClick={ hideOnClick }
            offset={ [9, 5] }
            onHide={ () => { setHistory(prev => [prev[0]]) } }
            render={ attrs => (
                <div className={ cx('content') } tabIndex="-1" { ...attrs }>
                    <PopperWrapper className={ cx("menu-popper") }>
                        { (history.length > 1) ? (<Header title={ currentMenu.title } onBack={ handleBack } />) : "" }
                        <div className={ cx('menu-scroll') }>
                            { renderItems() }
                        </div>
                    </PopperWrapper>
                </div>
            ) }

        >
            { children }
        </Tippy>
    )
}

export default Menu