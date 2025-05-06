import React from 'react'
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={ cx('wrapper') }>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a0e63af2063dccd1389e1bc27ee465ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=888d861f&x-expires=1746669600&x-signature=4O30%2F%2FU5oWU7aogL5U%2BvuQ8qfy0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="" className={ cx('avarta') } />
            <div className={ cx('content') }>
                <p className={ cx('account') }>
                    <span className={ cx('account-name') }>
                      jisoo
                    </span>
                    <i class="fa-solid fa-circle-check"></i>
                </p>
                <span className={cx('account-id')}>
                   JISOO
                </span>
            </div>
        </div>
    )
}

export default AccountItem