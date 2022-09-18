import classNames from 'classnames/bind';
import styles from './PageItem.module.scss';

const cx = classNames.bind(styles);

function PageItem() {
  return (
    <a className={cx('wrapper')} href="/" target="_blank">
      <div className={cx('picture')}>
        <div className={cx('infomation')}>
          <div className={cx('title')}>The Band</div>
          <div className={cx('sub-title')}>ReactJS & Bootstrap</div>
        </div>
      </div>
      <p className={cx('description')}>
        This is the page of a band, that name is The Band, include infomation
        about member, tour, address ...
      </p>
    </a>
  );
}

export default PageItem;
