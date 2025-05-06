import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '../../../../assets/images/Index';
import Tippy from '@tippyjs/react/headless';
import TippyHeadless from '@tippyjs/react/';
import { Wrapper as PopperWrapper } from '../../../Popper/Index'
import AccountItem from '../../../AccountItem/AccountItem';
import ButtonTikTok from '../../../Button/Index';
import Menu from '../../../Popper/Menu/Index';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <i className="fa-solid fa-earth-americas"></i>,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese'
                }
            ]
        }
    },
    {
        icon: <i className="fa-solid fa-circle-question"></i>,
        title: "Feedback and help",
        to: "/feeback"
    },
    {
        icon: <i className="fa-solid fa-keyboard"></i>,
        title: "Keyboard shortcuts",
        to: ""
    }
]


const userMenu = [
    {
        icon: <i className="fa-regular fa-user"></i>,
        title: "View profile",
        to: "/feeback"
    },
    {
        icon: <i className="fa-brands fa-bitcoin"></i>,
        title: "Get coins",
        to: "/feeback"
    },
    {
        icon: <i className="fa-solid fa-gear"></i>,
        title: "Settings",
        to: "/feeback"
    },
    ...MENU_ITEMS,
    {
        icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>,
        title: "Sign out",
        to: "/feeback",
        separate: true
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, [])

    return (
        <header className={ cx('wrapper') }>
            <div className={ cx('inner-content') }>

                <div className={ cx('logo') }>
                    <img src={ images.logo } alt="tiktok logo" />
                </div>

                <Tippy
                    interactive
                    visible={ searchResult.length > 0 }
                    offset={ [12, 8] }
                    render={ attrs => (
                        <div className={ cx('search-result') } tabIndex="-1" { ...attrs }>
                            <PopperWrapper>
                                <h4 className={ cx('accounts') }>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    ) }
                >
                    <div className={ cx('search-place') }>
                        <input type="text" placeholder='Search accounts and videos' className='' spellCheck={ false } name="" id="" />
                        <button className={ cx('clear-btn') }>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                        {/* <i className="fa-solid fa-spinner fa-spin loading"></i> */ }
                        <button className={ cx('search-btn') }>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </Tippy>


                <div className={ cx('actions-place') }>

                    { (currentUser) ? (
                        <>
                            <TippyHeadless
                                content={ "Upload video" }
                                delay={ [0, 200] }
                            >
                                <button className={ cx('action-btn') }><i className="fa-solid fa-cloud-arrow-up"></i></button>
                            </TippyHeadless>
                            {/* <button className={ cx('action-btn') }><i className="fa-solid fa-message"></i></button> */ }
                        </>) :
                        (
                            <>
                                <ButtonTikTok text>Upload</ButtonTikTok>
                                <ButtonTikTok
                                    primary
                                    onClick={ () => alert("hello baby") }
                                >
                                    Log in
                                </ButtonTikTok>

                            </>
                        ) }

                    <Menu items={ (currentUser) ? userMenu : MENU_ITEMS }>
                        { (currentUser) ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a0e63af2063dccd1389e1bc27ee465ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=888d861f&x-expires=1746669600&x-signature=4O30%2F%2FU5oWU7aogL5U%2BvuQ8qfy0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="avartar"
                                className={ cx('user-avartar') } />
                        ) : (
                            <button className={ cx('more-btn') }>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        ) }
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header