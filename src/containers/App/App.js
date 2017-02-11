import React, { PropTypes } from 'react';

import Header from 'components/Header';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
