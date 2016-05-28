import React from 'react';

import Header from '../Header';
import Navigation from '../Navigation';

import './style.scss';

const Container = React.createClass({
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header
          title={this.props.title}
          subtopics={this.props.subtopics} />
        <Navigation title={this.props.title} />
        <main className="mdl-layout__content">
          <div className="page-content"></div>
        </main>
      </div>
    );
  },
});

export default Container;
