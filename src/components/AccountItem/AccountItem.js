import React from 'react'
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import Image from '../Image/Index';

const cx = classNames.bind(styles);

function AccountItem({ nickName, fullName, avatar, id, tick }) {
    return (
        <div className={ cx('wrapper') }>
            <Image
                src={ avatar }
                alt=""
                className={ cx('avarta') }

            />
            <div className={ cx('content') }>
                <p className={ cx('account') }>
                    <span className={ cx('account-name') }>
                        { nickName }
                    </span>
                    { tick && <i class="fa-solid fa-circle-check"></i> }
                </p>
                <span className={ cx('account-id') }>
                    { fullName }
                </span>
            </div>
        </div>
    )
}

export default AccountItem