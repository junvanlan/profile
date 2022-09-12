import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const actionBtn = [
    {
      btnName: 'ABOUT',
      link: '#about',
    },
    {
      btnName: 'PAGES',
      link: '#pages',
    },
    {
      btnName: 'CONTACT',
      link: '#contact',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h2 className={cx('title')}>Personal Page</h2>
        <div className={cx('action')}>
          <div className={cx('action-btn')}>
            {actionBtn.map((btn, index) => (
              <a key={index} className={cx('btn-wrapper')} href={btn.link}>
                {btn.btnName}
              </a>
            ))}
          </div>
          <div className="dropdown">
            <button
              type="button"
              className={cx('dropdown-btn')}
              data-bs-toggle="dropdown"
            >
              <span className={cx('material-symbols-outlined', 'more-icon')}>
                menu
              </span>
            </button>
            <div className={cx('dropdown-menu', 'dropdown-wrapper')}>
              {actionBtn.map((btn, index) => (
                <a key={index} className={cx('item-wrapper')} href={btn.link}>
                  {btn.btnName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
