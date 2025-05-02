import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '../../../../assets/images/Index';

const cx = classNames.bind(styles);

function Header() {

  return (
    <header className={ cx('wrapper') }>
      <div className={ cx('inner-content') }>

        <div className={ cx('logo') }>
          <img src={ images.logo } alt="tiktok logo" />
        </div>

        <div className={ cx('search-place') }>
          <input type="text" placeholder='Search accounts and videos' className='' spellCheck={ false } name="" id="" />
          <button className={ cx('clear-btn') }>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          {/* <i className="fa-solid fa-spinner fa-spin loading"></i> */}

          <button className={ cx('search-btn') }>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

        </div>

        <div className={cx('actions-place')}>
          <button>Upload</button>
          <button>Log in</button>
          <button>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>

        </div>

      </div>
    </header>
  )
}

export default Header