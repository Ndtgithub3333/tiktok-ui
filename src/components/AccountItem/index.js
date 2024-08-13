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
                src="https://cdn.phunuvagiadinh.vn/minhthu/auto/1_12_2022/37-2022-12-01-14-38.JPG"
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