import React from 'react';
import { Link } from 'react-router';
import Status from 'components/Status';
import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">Gohook</Link>
    </div>
    <div className={styles.status}>
      <Status label status="ok" />
    </div>
    <div className={styles.add}>
      <Link to="/new">
        <i className="material-icons">add</i>
      </Link>
    </div>
    <div className={styles.new}>
      <Link to="/settings">
        <i className="material-icons">settings</i>
      </Link>
    </div>
  </header>
);

export default Header;
