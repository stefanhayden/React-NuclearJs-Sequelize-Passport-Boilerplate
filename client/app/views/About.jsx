
import React from 'react';


const About = React.createClass({
  displayName: 'About',

  render() {
    return (
      <div>
				ABOUT!
				{this.props.children}
      </div>
    );
  },
});

export default About;
