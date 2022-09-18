import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import ContactBtn from '../ContactBtn';

const cx = classNames.bind(styles);

function Contact() {
  const Contacts = {
    textContacts: [
      {
        title: 'Gmail',
        value: 'lan.ngx1993@gmail.com',
        type: 'text',
        used: true,
      },
      {
        title: 'Zalo',
        value: '0376572311',
        type: 'text',
        used: true,
      },
      {
        title: 'Phone',
        value: '+84 376 572 311',
        type: 'text',
        used: true,
      },
    ],

    btnContacts: [
      {
        title: 'Facebook',
        value: 'http://facebook.com/junvanlan',
        type: 'button',
        used: true,
      },
      {
        title: 'Instagram',
        value: null,
        type: 'button',
        used: false,
      },
      {
        title: 'Twitter ',
        value: null,
        type: 'button',
        used: false,
      },
    ],
  };
  return (
    <div id="contact" className={cx('wrapper')}>
      <h2 className={cx('title')}>Contact</h2>
      <p className={cx('description')}> You can contact to me by some ways</p>
      <div className="container">
        <div className="row">
          <div className={cx('col-md-6', 'contact-col')}>
            {Contacts.textContacts.map((contact, index) => (
              <ContactBtn key={index} data={contact} />
            ))}
          </div>
          <div className={cx('col-md-6', 'contact-col')}>
            {Contacts.btnContacts.map((contact, index) => (
              <ContactBtn key={index} data={contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
