import React from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import TopicCard from '../TopicCard';

import './style.scss';

const Container = React.createClass({
  _renderTopicCard(topic, index) {

    return (
      <div key={index} className='mdl-cell mdl-cell--4-col'>
        <TopicCard topic={topic} />
      </div>
    );
  },

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header
          title={this.props.title}
          subTopicIndexs={this.props.subTopicIndexs} />
        <Navigation title={this.props.title} />
        <main className="mdl-layout__content">
          <div className='topicCardContainer mdl-grid'>
            {
              this.props.activeTopics.map(
              (topic, index) => this._renderTopicCard(topic, index)
            )}
          </div>
        </main>
      </div>
    );
  },
});

export default Container;
