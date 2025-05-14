import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import Image from '../Image';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    console.log(typeof data)
    const navigate = useNavigate();

    return (
        <div className={ cx('wrapper') } onClick={ () => navigate(`/@${data.id}`) }>
            <Image
                src={ data.avatar }
                alt=""
                className={ cx('avarta') }

            />
            <div className={ cx('content') }>
                <p className={ cx('account') }>
                    <span className={ cx('account-name') }>
                        { data.nickname }
                    </span>
                    { data.tick && <i className="fa-solid fa-circle-check"></i> }
                </p>
                <span className={ cx('account-id') }>
                    { data.full_name }
                </span>
            </div>
        </div>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object,
};


export default AccountItem