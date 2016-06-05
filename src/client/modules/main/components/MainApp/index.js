import React from 'react';

// Flux
import reactor from '../../../../../../core/modules/main/reactor';
import getters from '../../../../../../core/modules/main/getters';

// Components
import Container from '../Container';

const MainApp = React.createClass({
  // A React mixin needed to bind component state to a NuclearJS reactor
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      title: getters.topicTitle,
      activeTopic: getters.activeTopic,
      subTopicIndexs: getters.subTopicIndexs,
      subTopics: getters.subTopics,
    };
  },

  render() {
    return (
      <Container
        title={this.state.title}
        activeTopic={this.state.activeTopic}
        subTopicIndexs={this.state.subTopicIndexs}
        subTopics={this.state.subTopics} />
    );
  },
});

export default MainApp;
