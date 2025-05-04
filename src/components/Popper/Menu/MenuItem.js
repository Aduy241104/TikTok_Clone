import React from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import ButtonTikTok from '../../Button/Index';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  console.log("lo: ", data);
  const to = data.to;

  return (
    <ButtonTikTok className={cx('menu-item')} leftIcon={ data.icon } to={ to }>
      { data.title }
    </ButtonTikTok>
  )
}

export default MenuItem