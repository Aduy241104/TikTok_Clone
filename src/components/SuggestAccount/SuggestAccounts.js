import classNames from "classnames/bind"
import styles from './SuggestAccount.module.scss'
import AccountItem from "./AccountItem";
import { useEffect, useState } from "react";
import { getSuggested } from "../../services/getSuggestedUserService";

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    const [accountList, setAccountList] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);

    const handleShowMore = () => {
        setPageIndex(prev => prev + 1);
    }

    const handleShowLess = () => {
        setPageIndex(1);
        setAccountList([]);
    }

    useEffect(() => {

        const fetchData = async () => {
            const respond = await getSuggested(pageIndex, 5);
            if (respond) {
                setAccountList(prev => [...prev, ...respond.data])
            } else {
                console.log("lỗi rồi nhưng từ từ bắt lỗi");
            }
        }

       
        fetchData()
        console.log("ayouu");
    }, [pageIndex]);

    return (
        <div className={ cx('wrapper') }>
            <div className={ cx('separate-line') }>
                <div className={ cx('separate-inner') }></div>
            </div>
            <p className={ cx('label') }>{ label }</p>

            { accountList.map((item) => {
                return (
                    <AccountItem data={ item } key={ item.id } />
                )
            }) }

            { (pageIndex === 3) ? (
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

export default SuggestAccounts