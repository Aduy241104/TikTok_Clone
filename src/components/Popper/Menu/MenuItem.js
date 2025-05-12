import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import ButtonTikTok from '../../Button/Index';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {

  const classes = cx('menu-item', {
    separate: data.separate
  })



  return (
    <ButtonTikTok className={ cx(classes) } leftIcon={ data.icon } to={ data.to } onClick={ onClick }>
      { data.title }
    </ButtonTikTok>
  )
}

export default MenuItem