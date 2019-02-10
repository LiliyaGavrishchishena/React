import React from 'react';

const passProps = props => WrappedComponent => ownProps => (
  <WrappedComponent {...props} {...ownProps} />
);

export default passProps;
