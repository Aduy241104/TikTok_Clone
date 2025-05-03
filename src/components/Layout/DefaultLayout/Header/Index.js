import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '../../../../assets/images/Index';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper/Index'
import AccountItem from '../../../AccountItem/AccountItem';
import ButtonTikTok from '../../../Button/Index';
// import 'tippy.js/dist/tippy.css';


const cx = classNames.bind(styles);

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
                    interactive={ true }
                    visible={ searchResult.length > 0 }
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
                    <ButtonTikTok text>
                        Upload
                    </ButtonTikTok>
                    <ButtonTikTok primary>
                        Log in
                    </ButtonTikTok>
                </div>
            </div>
        </header>
    )
}

export default Header