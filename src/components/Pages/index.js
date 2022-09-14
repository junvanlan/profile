import classNames from 'classnames/bind';
import styles from './Pages.module.scss';

import PageItem from '../PageItem';
const cx = classNames.bind(styles);

function Pages() {
  return (
    <div id="pages" className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header')}>My Pages</div>
        <p className={cx('sub-header')}>
          This is my pages, written by ReactJs and bootstrap
        </p>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <PageItem />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <PageItem />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <PageItem />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <PageItem />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <PageItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
