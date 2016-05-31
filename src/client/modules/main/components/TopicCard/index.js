import React from 'react';

import actions from '../../../../../../core/modules/main/actions';

import './style.scss';

const TopicCard = React.createClass({
  _isTopicCompleted() {
    return this.props.topic.get('completed');
  },

  _completeTask() {
    let index = this.props.topic.get('index') - 1;
    actions.completeTask(index);
  },

  _renderTopicTitle() {
    let topicIndex = this.props.topic.get('index');
    let topicName = this.props.topic.get('title');
    let topicCardTitle = topicIndex + '. ' + topicName;
    return topicCardTitle;
  },

  _renderCompleteButton() {
    return (
      <div className='complete-button__container'>
        <img className='complete-button__image' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/tick@2x.png' />
      </div>
    );
  },

  _renderTopicNavButton() {
    return (
      <button
        className='topic-nav-button mdl-button mdl-js-button'
        onClick={this._completeTask} >
        Lets Go
      </button>
    );
  },

  render() {
    return (
      <div className='topic-card mdl-card mdl-shadow--2dp'>
        <div className='topic-card__title-container mdl-card__title'>
          <h2 className='topic-card__title mdl-card__title-text'>{this._renderTopicTitle()}</h2>
        </div>
        <div className='topic-card__content mdl-card__supporting-text'>
          {this._isTopicCompleted() ? this._renderCompleteButton() : null}
          <div className='topic-card-spacer'></div>
          {this._renderTopicNavButton()}
        </div>
      </div>
    );
  },
});

export default TopicCard;
