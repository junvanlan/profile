import classNames from 'classnames/bind';
import styles from './About.module.scss';

import imgs from '~/assets/img';
const cx = classNames.bind(styles);

function About() {
  return (
    <div id="about" className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('my-name')}>
          <p className={cx('sub-name')}>My name is</p>
          <h2 className={cx('full-name')}>NGUYEN XUAN LAN</h2>
        </div>
        <div className={cx('my-job')}>
          <p className={cx('sub-job')}>I am</p>
          <h2 className={cx('full-job')}>Web Developer & Designer</h2>
        </div>

        <div className={cx('download-wrapper')}>
          <a className={cx('download-btn')} href={imgs.cv}>
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
