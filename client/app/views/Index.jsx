import React from 'react';

const Index = React.createClass({
  displayName: 'Index',

  render() {
    return (
      <div>
				INDEX!
				{this.props.children}
      </div>
    );
  },
});

export default Index;
