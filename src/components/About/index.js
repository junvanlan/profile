import classNames from 'classnames/bind';
import styles from './About.module.scss';

import imgs from '~/assets/img';
const cx = classNames.bind(styles);

function About() {
  return (
    <div id="about" className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('my-info')}>
          <div className={cx('my-name')}>
            <p className={cx('sub-name')}>My name is</p>
            <h2 className={cx('full-name')}>Nguyễn Xuân Lân</h2>
          </div>
          <div className={cx('my-job')}>
            <p className={cx('sub-job')}>I am</p>
            <h2 className={cx('full-job')}>Web Developer & Designer</h2>
          </div>
        </div>

        <a
          className={cx('download-wrapper')}
          href={imgs.cv}
          target="_blank"
          rel="noreferrer"
        >
          <div className={cx('download-btn')}>
            <span className={cx('circle')} aria-hidden="true">
              <span className={cx('icon', 'arrow')}></span>
            </span>
            <span className={cx('button-text')}>Download my CV</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
