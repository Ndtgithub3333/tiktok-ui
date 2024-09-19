import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="data:image/jpeg;base64,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"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>@thangsalt</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Duc Thang</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
