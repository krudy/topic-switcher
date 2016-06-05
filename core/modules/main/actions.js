import reactor from './reactor';
import actionTypes from './actionTypes';

function completeTask(index) {
  reactor.dispatch(actionTypes.COMPLETE_TASK, { index });
}

function updateActiveTopic(newActiveIndex) {
  reactor.dispatch(actionTypes.UPDATE_ACTIVE_TOPIC, { newActiveIndex });
}

let actions = {
  completeTask,
  updateActiveTopic,
};

export default actions;
