import classNames from "classnames/bind"
import styles from './Header.module.scss'
import Image from '../../../../components/Image'
import ButtonTikTok from '../../../../components/Button'


const cx = classNames.bind(styles);

function Header({ user = {}, videoDescription, backgroundMusic }) {

    return (
        <div className={ cx('wrapper') }>
            <Image
                src={ user.avatar }
                alt="avartar"
                className={ cx('avatar') }
                fallBack={ 'https://pbs.twimg.com/media/FIw0iNhXwAQkxKh?format=jpg&name=small' }
            />

            <div className={ cx('account-info') }>
                <p className={ cx('account-name') }>
                    <strong>{ user.nickname }</strong>
                    <span>{ user.first_name + " " + user.last_name }</span>
                </p>
                <p className={ cx('description') }>{ videoDescription }</p>
                <p className={ cx('background-music') }>
                    { (!!backgroundMusic) && (<><i className="fa-solid fa-music"></i> { backgroundMusic }</>) }
                </p>
            </div>

            <div className={ cx('follow-btn') }>
                <ButtonTikTok outLine={ true } small>
                    { (user.is_followed) ? ('Unfollow') : ('Follow') }
                </ButtonTikTok>
            </div>
        </div>
    )
}

export default Header