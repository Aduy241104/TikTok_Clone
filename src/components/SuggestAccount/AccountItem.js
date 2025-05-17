import classNames from "classnames/bind"
import styles from './SuggestAccount.module.scss'
import Image from '../Image/index'
import Tippy from '@tippyjs/react/headless'
import { Wrapper } from "../Popper"
import AccountPreview from "./AccountPreview/AccountPreview"

const cx = classNames.bind(styles);

function AccountItem({ data }) {

    const renderPreview = (attrs) => {
        return (
            <div className={ cx('preview') } tabIndex='-1' { ...attrs }>
                <Wrapper className={ cx('preview-content') }>
                    <AccountPreview
                        avatar={ data.avatar }
                        nickname={ data.nickname }
                        fullName={ data.first_name + ' ' + data.last_name }
                        likeCount={ data.likes_count }
                        followerCount={ data.followers_count }
                        tick={ data.tick }
                    />
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
                        src={ data.avatar }
                        alt="avartar"
                        className={ cx('user-avartar') }
                        fallBack={ 'https://pbs.twimg.com/media/FIw0iNhXwAQkxKh?format=jpg&name=small' }
                    />

                    <div className={ cx('user-info') }>
                        <p className={ cx('user-name') }>
                            <strong>{ data.nickname }</strong>
                            { data.tick && <i className="fa-solid fa-circle-check"></i> }
                        </p>
                        <p className={ cx('full-name') }>{ data.first_name + ' ' + data.last_name }</p>
                    </div>
                </div>

            </Tippy>
        </div>
    )
}

export default AccountItem