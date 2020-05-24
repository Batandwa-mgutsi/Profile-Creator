import React from 'react';

import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{ height: '100%', margin: 0 }}>
        {children}
      </div>
    )
  }
}

export default App;
