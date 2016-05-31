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
      activeTopics: getters.activeTopics,
      subTopicIndexs: getters.subTopicIndexs,
    };
  },

  render() {
    return (
      <Container
        title={this.state.title}
        activeTopics={this.state.activeTopics}
        subTopicIndexs={this.state.subTopicIndexs} />
    );
  },
});

export default MainApp;
