import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import config from '../../../config/index'
import { LiveActiveIcon, LiveIcon, HomeIcon, HomeActiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../../../components/Icons/Icon';
import SuggestAccounts from '../../../components/SuggestAccount';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={ cx('wrapper') }>
      <Menu>
        <MenuItem title={ "For You" } icon={ <HomeIcon className={ cx('menu-icon') } /> } activeIcon={ <HomeActiveIcon /> } to={ config.routes.home } />
        <MenuItem title={ "Following" } icon={ <UserGroupIcon className={ cx('menu-icon') } /> } activeIcon={ <UserGroupActiveIcon /> } to={ config.routes.following } />
        <MenuItem title={ "LIVE" } icon={ <LiveIcon className={ cx('menu-icon') } /> } activeIcon={ <LiveActiveIcon /> } to={ config.routes.live } />
      </Menu>

      <SuggestAccounts label={ 'Suggested accounts' } />
    </aside>
  )
}

export default SideBar