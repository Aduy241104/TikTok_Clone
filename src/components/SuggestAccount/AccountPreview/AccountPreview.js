import classNames from "classnames/bind"
import styles from './AccountPreview.module.scss'
import Image from "../../Image"
import ButtonTikTok from "../../Button/ButtonTikTok"

const cx = classNames.bind(styles)

function AccountPreview({ avatar, nickname, fullName, likeCount, followerCount, tick }) {

  function formatNumberShort(num) {
    if (num == null || isNaN(num)) {
      return '0'; // hoặc trả về 'N/A' nếu muốn
    }

    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return num.toString();
    }
  }


  return (
    <div className={ cx('wrapper') }>
      <header className={ cx('header') }>
        <Image
          src={ avatar }
          alt="avartar"
          className={ cx('user-avatar') }
          fallBack={ 'https://pbs.twimg.com/media/FIw0iNhXwAQkxKh?format=jpg&name=small' }
        />

        <ButtonTikTok className={ cx('follow-btn') } primary={ true }>Follow</ButtonTikTok>
      </header>

      <div className={ cx('preview-content') }>
        <p className={ cx('user-name') }>
          <strong>{ nickname }</strong>
          { tick && <i className="fa-solid fa-circle-check"></i> }
        </p>
        <p className={ cx('full-name') }>{ fullName }</p>

        <p className={ cx('analytics') }>
          <strong className={ cx('value') }>{ formatNumberShort(followerCount) }</strong>
          <span className={ cx('label') }> Followers</span>
          <strong className={ cx('value') }>{ formatNumberShort(likeCount) }</strong>
          <span className={ cx('label') }> Likes</span>
        </p>
      </div>
    </div>
  )
}

export default AccountPreview