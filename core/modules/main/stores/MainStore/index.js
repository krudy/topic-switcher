import { Store, toImmutable } from 'nuclear-js';
import actionTypes from '../../actionTypes';

var MainStore = Store({
  getInitialState,

  initialize() {
    this.on(actionTypes.COMPLETE_TASK, onCompleteTask);
    this.on(actionTypes.UPDATE_ACTIVE_TOPIC, onUpdateActiveTopic);
  },
});

function getInitialState() {
  // Initialize Data
  return toImmutable({
    data: {
      topic: {
        title: 'Geometry',
      },
      subtopics: [
        { index: 1, title: 'Triangles', completed: true },
        { index: 2, title: 'Angle Sum', completed: true },
        { index: 3, title: 'Similar Triangles', completed: true },
        { index: 4, title: 'Congruence', completed: false },
        { index: 5, title: 'Enlargements', completed: false },
        { index: 6, title: 'Parallel Lines', completed: false },
        { index: 7, title: 'Pythagoras Theorem', completed: false },
        { index: 8, title: 'Revision', completed: false },
        { index: 9, title: 'Topic Test', completed: false }
      ],
      activeTopic: 0,
    },
  });
}

function onCompleteTask(state, { index }) {
  return state.updateIn(['data', 'subtopics', index, 'completed'], () => true);
}

function onUpdateActiveTopic(state, { newActiveIndex }) {
  return state.updateIn(['data', 'activeTopic'], () => newActiveIndex);
}

export default MainStore;
