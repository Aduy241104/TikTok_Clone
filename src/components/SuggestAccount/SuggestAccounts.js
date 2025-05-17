import classNames from "classnames/bind"
import styles from './SuggestAccount.module.scss'
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={ cx('wrapper') }>
            <div className={ cx('separate-line') }>
                <div className={cx('separate-inner')}></div>
            </div>
            <p className={ cx('label') }>{ label }</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <button className={ cx('show-more') }>
                See all
            </button>


        </div>
    )
}

export default SuggestAccounts