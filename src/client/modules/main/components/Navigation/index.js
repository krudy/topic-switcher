import React from 'react'

const Navigation = React.createClass({
  render () {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">{this.props.title}</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    );
  },
});

export default Navigation;
