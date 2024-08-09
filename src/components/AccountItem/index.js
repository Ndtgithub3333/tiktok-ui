import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/60895fb000b5249b73f8ac5a3ea0d0c5~c5_300x300.webp?lk3s=a5d48078&nonce=99125&refresh_token=9e333d7cb0b91159ed9468c25a0e3479&x-expires=1723370400&x-signature=hWNXDvwjNQ9qP5a%2F93KTSs2g5yQ%3D&shp=a5d48078&shcp=c1333099"
                alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <p className={cx('username')}>nguyenvana</p>
            </div>

        </div>
    );
}

export default AccountItem;