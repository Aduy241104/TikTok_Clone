import { useEffect, useState } from "react";
import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import config from '../../../config/index'
import { LiveActiveIcon, LiveIcon, HomeIcon, HomeActiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../../../components/Icons/Icon';
import SuggestAccounts from '../../../components/SuggestAccount';
import * as useService from "../../../services/userService";
import { getCurrentAccount } from "../../../services/searchService";

const cx = classNames.bind(styles);

function SideBar() {
  const [suggestedList, setSuggestedList] = useState([]);
  const [followedList, setFollowedList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageIndex2, setPageIndex2] = useState(1);


  const handleShowMore = () => {
    setPageIndex(prev => prev + 1);
  }

  const handleShowLess = () => {
    setPageIndex(1);
    setSuggestedList([]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const respond = await useService.getSuggested(pageIndex, 5);
      if (respond) {
        setSuggestedList(prev => [...prev, ...respond.data])
      } else {
        console.log("lỗi rồi nhưng từ từ bắt lỗi");
      }
    }
    fetchData()
  }, [pageIndex]);

  useEffect(() => {
    const fetch2 = async () => {
      const respond = await useService.getFollowedAccount(1);
      setFollowedList(prev => [...prev, ...respond.data])
    }

    fetch2();

  }, [pageIndex2])

  return (
    <aside className={ cx('wrapper') }>
      <Menu>
        <MenuItem title={ "For You" } icon={ <HomeIcon className={ cx('menu-icon') } /> } activeIcon={ <HomeActiveIcon /> } to={ config.routes.home } />
        <MenuItem title={ "Following" } icon={ <UserGroupIcon className={ cx('menu-icon') } /> } activeIcon={ <UserGroupActiveIcon /> } to={ config.routes.following } />
        <MenuItem title={ "LIVE" } icon={ <LiveIcon className={ cx('menu-icon') } /> } activeIcon={ <LiveActiveIcon /> } to={ config.routes.live } />
      </Menu>

      <SuggestAccounts
        label={ 'Suggested accounts' }
        accountList={ suggestedList }
        handleShowMore={ handleShowMore }
        handleShowLess={ handleShowLess }
        pageIndex={ pageIndex }
        limit={ 3 }
        isShowToolTip={ true }
      />

      <SuggestAccounts
        label={ 'Followed accounts' }
        accountList={ followedList }
        pageIndex={ pageIndex2 }
        limit={ 3 }
      />
    </aside>
  )
}

export default SideBar