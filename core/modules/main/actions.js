import reactor from './reactor';
import actionTypes from './actionTypes';

function completeTask(index) {
  reactor.dispatch(actionTypes.COMPLETE_TASK, { index });
}

function updateActiveTopic(activeIndex, maxIndex) {
  let indexLeft = activeIndex - 1;
  let indexRight = activeIndex + 1;
  let newActiveIndexObject = {
    indexLeft: (indexLeft >= 0 ? indexLeft : undefined),
    indexActive: activeIndex,
    indexRight:  (indexRight < maxIndex ? indexRight : undefined),
  };
  reactor.dispatch(actionTypes.UPDATE_ACTIVE_TOPIC, { newActiveIndexObject });
}

let actions = {
  completeTask,
  updateActiveTopic,
};

export default actions;
