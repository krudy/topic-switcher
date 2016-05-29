import React from 'react';

import './style.scss';

const Header = React.createClass({
  _renderNavTab(index) {
    var displayText = index+1;
    return (
      <a href="#top" key={index} className="mdl-layout__tab nav-tab">{displayText}</a>
    );
  },

  render() {
    return (
      <header className="mdl-layout__header header-container">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title header-title">{this.props.title}</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link mdl-layout--large-screen-only" href="">
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/avatar@2x.png'
                className='profile-picture' />
            </a>
            <a className="mdl-navigation__link mdl-layout--small-screen-only" href="">
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/avatar.png'
                className='profile-picture' />
            </a>
          </nav>
        </div>
        <div className="mdl-layout__tab-bar tab-container">
          { /* Loop through the different Reasons */
            this.props.subtopics.map(
            (topic, index) => this._renderNavTab(index)
          )}
        </div>
        <div className='mdl-tabs__panel' id='top'></div>
      </header>
    );
  },
});

export default Header;
