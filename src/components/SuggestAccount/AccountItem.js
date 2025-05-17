import classNames from "classnames/bind"
import styles from './SuggestAccount.module.scss'
import Image from '../Image/index'
import Tippy from '@tippyjs/react/headless'
import { Wrapper } from "../Popper"
import AccountPreview from "./AccountPreview/AccountPreview"

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (attrs) => {
        return (
            <div className={ cx('preview') } tabIndex='-1' { ...attrs }>
                <Wrapper className={ cx('preview-content') }>
                    <AccountPreview />
                </Wrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                delay={ [700, 0] }
                placement={ 'bottom-start' }
                offset={ [-10, 0] }
                interactive
                render={ (attrs) => renderPreview(attrs) }
            >
                <div className={ cx('account') }>
                    <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a0e63af2063dccd1389e1bc27ee465ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=888d861f&x-expires=1746669600&x-signature=4O30%2F%2FU5oWU7aogL5U%2BvuQ8qfy0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        alt="avartar"
                        className={ cx('user-avartar') }
                        fallBack={ 'https://pbs.twimg.com/media/FIw0iNhXwAQkxKh?format=jpg&name=small' }
                    />

                    <div className={ cx('user-info') }>
                        <p className={ cx('user-name') }>
                            <strong>Sooyaa</strong>
                            <i className="fa-solid fa-circle-check"></i>
                        </p>
                        <p className={ cx('full-name') }>Kim Jisoo</p>
                    </div>
                </div>

            </Tippy>
        </div>
    )
}

export default AccountItem