import React, { Component } from 'react';

import styles from './New.css';

class New extends Component {
  static defaultProps = {
  }

  render() {
    return (
      <div className={styles.base}>
        <h1>New Page</h1>
      </div>
    );
  }
}

export default New;
