import classNames from "classnames/bind"
import styles from './SuggestAccount.module.scss'
import AccountItem from "./AccountItem";
import { memo } from "react";

const cx = classNames.bind(styles);

//prop limit dùng để giới hạn show more bao nhiêu lần

function SuggestAccounts({ label, accountList, handleShowMore, handleShowLess, pageIndex, limit, isShowToolTip }) {

    return (
        <div className={ cx('wrapper') }>
            <div className={ cx('separate-line') }>
                <div className={ cx('separate-inner') }></div>
            </div>
            <p className={ cx('label') }>{ label }</p>

            { accountList.map((item) => {
                return (
                    <AccountItem data={ item } key={ item.id } isShowToolTip={isShowToolTip} />
                )
            }) }

            { (pageIndex === limit) ? (
                <button className={ cx('show-more') } onClick={ handleShowLess }>
                    Show less
                </button>
            ) : (
                <button className={ cx('show-more') } onClick={ handleShowMore }>
                    See all
                </button>
            ) }
        </div>
    )
}

export default memo(SuggestAccounts)