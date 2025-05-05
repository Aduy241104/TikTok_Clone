import React from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import ButtonTikTok from '../../Button/Index';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {

  return (
    <ButtonTikTok className={ cx('menu-item') } leftIcon={ data.icon } to={ data.to } onClick={ onClick }>
      { data.title }
    </ButtonTikTok>
  )
}

export default MenuItem