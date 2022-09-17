import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
  const textContacts = [
    {
      title: 'Gmail',
    },
  ];
  return (
    <div id="contact" className={cx('wrapper')}>
      <h2 className={cx('title')}>Contact</h2>
      <p> You can contact to my by some ways</p>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={cx('gmail')}>Gmail: junvanlan@gmail.com</div>
            <div className={cx('zalo')}>Zalo: 0376572311</div>
            <div className={cx('phone')}>Phone: +84376572311</div>
          </div>
          <div className="col-md-6">
            <div>Facebook</div>
            <div>Instagram</div>
            <div>twinter</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
