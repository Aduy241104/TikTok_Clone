import classNames from "classnames/bind"
import styles from './ActionButton.module.scss'

const cx = classNames.bind(styles);

function ActionButton({ icon, analyse }) {
    return (
        <div className={ cx('wrapper') }>
            <button className={ cx('action-btn') }>
               {icon}
            </button>
            <p className={ cx('analyse') }>{ analyse }</p>
        </div>
    )
}

export default ActionButton