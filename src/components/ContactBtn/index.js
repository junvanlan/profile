import classNames from 'classnames/bind';
import styles from './ContactBtn.module.scss';

const cx = classNames.bind(styles);

function ContactBtn({ data }) {
  if (data.type === 'text') {
    return (
      <div className={cx('text-wrapper')}>
        <span className={cx('tilte')}>{data.title}: </span>
        <span className={cx('value')}>{data.value}</span>
      </div>
    );
  }

  if (data.type === 'button') {
    const onUsed = (title) => {
      alert(`Sorry, I don't use ${title}, please select other contact method`);
    };

    let Comp;
    const props = {};
    if (data.used) {
      Comp = 'a';
      props.href = data.value;
      props.target = '_blank';
    } else {
      Comp = 'button';
      props.onClick = () => onUsed(data.title);
    }
    return (
      <Comp className={cx('btn-wrapper')} {...props}>
        <span className={cx('tilte')}>{data.title}</span>
      </Comp>
    );
  }
}

export default ContactBtn;
