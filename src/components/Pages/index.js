import classNames from 'classnames/bind';
import styles from './Pages.module.scss';

import imgs from '~/assets/img';
import PageItem from '../PageItem';
const cx = classNames.bind(styles);

function Pages() {
  const pages = [
    {
      img: imgs.theband,
      title: 'THE BAND',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: 'https://junvanlan.github.io/the-band/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: 'https://junvanlan.github.io/the-band/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: '/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: '/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: '/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: '/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: '/',
    },
    {
      img: imgs.reactjs,
      title: 'EMPTY',
      subTitle: 'ReactJS & Bootstrap',
      description:
        'This is the page of a band, that name is The Band, include infomation about member, tour, address ...',
      link: '/',
    },
  ];
  return (
    <div id="pages" className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header')}>My Pages</div>
        <p className={cx('sub-header')}>
          This is my websites, written by ReactJs and bootstrap
        </p>

        <div className="container">
          <div className="row">
            {pages.map((page, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                <PageItem data={page} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
