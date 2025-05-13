import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '../../../../assets/images/Index';
import TippyHeadless from '@tippyjs/react/';
import ButtonTikTok from '../../../Button/Index';
import Menu from '../../../Popper/Menu/Index';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, InboxIcon, MessageIcon } from '../../../Icons/Icon'
import Image from '../../../Image/Index';
import Search from '../Search/Index';
import { Link } from 'react-router-dom';
import routesConfig from '../../../../config/routes';
import MENU_ITEMS, { userMenu } from './dataMenu'

const cx = classNames.bind(styles);
const currentUser = true;

function Header() {

    return (
        <header className={ cx('wrapper') }>
            <div className={ cx('inner-content') }>
                
                <Link className={ cx('logo') } to={ routesConfig.home }>
                    <img src={ images.logo } alt="tiktok logo" />
                </Link>

                {/* {search} */ }
                <Search />

                <div className={ cx('actions-place') }>
                    { (currentUser) ? (
                        <>
                            <TippyHeadless
                                content={ "Upload video" }
                                delay={ [0, 20] }
                            >
                                <button className={ cx('action-btn') }>
                                    <UploadIcon className={ cx('style-icon') } />
                                </button>
                            </TippyHeadless>

                            <TippyHeadless
                                content={ "Message" }
                                delay={ [0, 20] }
                            >
                                <button className={ cx('action-btn') }>
                                    <MessageIcon className={ cx('style-icon', 'messeage-icon') } />
                                </button>
                            </TippyHeadless>

                            <TippyHeadless
                                content={ "Inbox" }
                                delay={ [0, 20] }
                            >
                                <button className={ cx('action-btn') }>
                                    <InboxIcon className={ cx('style-icon') } />
                                    <span className={ cx('badge') }>12</span>
                                </button>
                            </TippyHeadless>

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

                    <Menu items={ (currentUser) ? userMenu : MENU_ITEMS } hideOnClick={false}>
                        { (currentUser) ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a0e63af2063dccd1389e1bc27ee465ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=888d861f&x-expires=1746669600&x-signature=4O30%2F%2FU5oWU7aogL5U%2BvuQ8qfy0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="avartar"
                                className={ cx('user-avartar') }
                                fallBack={ 'https://pbs.twimg.com/media/FIw0iNhXwAQkxKh?format=jpg&name=small' }
                            />
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