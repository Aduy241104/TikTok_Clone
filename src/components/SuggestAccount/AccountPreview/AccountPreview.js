import classNames from "classnames/bind"
import styles from './AccountPreview.module.scss'
import Image from "../../Image"
import ButtonTikTok from "../../Button/ButtonTikTok"

const cx = classNames.bind(styles)

function AccountPreview() {
  return (
    <div className={ cx('wrapper') }>
      <header className={ cx('header') }>
        <Image
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a0e63af2063dccd1389e1bc27ee465ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=888d861f&x-expires=1746669600&x-signature=4O30%2F%2FU5oWU7aogL5U%2BvuQ8qfy0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
          alt="avartar"
          className={ cx('user-avatar') }
          fallBack={ 'https://pbs.twimg.com/media/FIw0iNhXwAQkxKh?format=jpg&name=small' }
        />

        <ButtonTikTok className={ cx('follow-btn') } primary={ true }>Follow</ButtonTikTok>
      </header>

      <div className={ cx('preview-content') }>
        <p className={ cx('user-name') }>
          <strong>theanh28entertainment</strong>
          <i className="fa-solid fa-circle-check"></i>
        </p>
        <p className={ cx('full-name') }>Theanh28Entertainment</p>

        <p className={ cx('analytics') }>
          <strong className={ cx('value') }>8.2M</strong>
          <span className={ cx('label') }> Followers</span>
          <strong className={ cx('value') }>100.1M</strong>
          <span className={ cx('label') }> Likes</span>
        </p>
      </div>
    </div>
  )
}

export default AccountPreview