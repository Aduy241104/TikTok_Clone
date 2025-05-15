import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import Image from '../Image';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    console.log(typeof data)
    const navigate = useNavigate();

    console.log("re-render");
    

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

// dùng useMemo hook để tránh re-render 
// lại component này khi người dùng click ra ngoài phần kết quả tìm kiếm
export default memo(AccountItem)