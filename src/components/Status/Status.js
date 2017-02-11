import React from 'react';
import classnames from 'classnames/bind';
import styles from './Status.css';

const cx = classnames.bind(styles);

export const OK = 'ok';
export const WARN = 'warn';
export const BAD = 'bad';

const statusLabels = {
  [OK]: 'connected',
  [WARN]: 'connecting',
  [BAD]: 'connection failed',
};

const Status = ({ label, status }) => {
  const classes = cx('icon', status);
  return (
    <div className={styles.status}>
      {label &&
        <div className={styles.label}>{statusLabels[status]}</div>
      }
      <i className={classes} />
    </div>
  );
};

Status.propTypes = {
  label: React.PropTypes.bool,
  status: React.PropTypes.oneOf([OK, WARN, BAD]),
};

Status.defaultProps = {
  lable: true,
  status: BAD,
};

export default Status;
