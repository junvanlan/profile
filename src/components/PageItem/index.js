import classNames from 'classnames/bind';
import styles from './PageItem.module.scss';

const cx = classNames.bind(styles);

function PageItem({ data }) {
  return (
    <a
      className={cx('wrapper')}
      href={data.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={cx('picture')}>
        <img className={cx('page-img')} src={data.img} alt="" />
        <div className={cx('infomation')}>
          <div className={cx('title')}>{data.title}</div>
          <p className={cx('sub-title')}>{data.subTitle}</p>
        </div>
      </div>
      <p className={cx('description')}>{data.description}</p>
    </a>
  );
}

export default PageItem;
