import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <span>Trên con đường thành công không có dấu chân của kẻ lười biếng</span>
      <span>Witten by Nguyen Xuan Lan</span>
    </div>
  );
}

export default Footer;
