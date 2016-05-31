import React from 'react';

import './style.scss';

const Footer = React.createClass({
  render() {
    return (
      <footer>
        <div className="mdl-layout__tab-bar footer-tab-container">
          <a href="#top"
            className="mdl-layout__tab footer-tab__link">
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick.png' />
          </a>
          <a href="#top"
            className="mdl-layout__tab footer-tab__link">
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/piechart.png' />
          </a>
          <a href="#top"
            className="mdl-layout__tab footer-tab__link">
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/linegraph.png' />
          </a>
        </div>
      </footer>
    );
  },
});

export default Footer;
