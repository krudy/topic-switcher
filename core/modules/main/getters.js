import { toImmutable } from 'nuclear-js';

const activeTopics = [
  ['mainStore', 'data', 'subtopics'],
  ['mainStore', 'data', 'activeTopic'],
  (subtopics, activeTopicobject) => {
    let topicArray = [];

    // Add Left Topic
    if (!!activeTopicobject.get('indexLeft') || activeTopicobject.get('indexLeft') === 0) {
      let indexLeft = activeTopicobject.get('indexLeft');
      let topicLeft = subtopics.get(indexLeft);
      topicArray.push(topicLeft);
    }

    // Add Active topic
    let indexActive = activeTopicobject.get('indexActive');
    let topicActive = subtopics.get(indexActive);
    topicArray.push(topicActive);

    // Add Right topic
    if (!!activeTopicobject.get('indexRight')) {
      let indexRight = activeTopicobject.get('indexRight');
      let topicRight = subtopics.get(indexRight);
      topicArray.push(topicRight);
    }

    return topicArray;
  },
];

const subTopicIndexs = [
  ['mainStore', 'data', 'subtopics'],
  (subtopics) => {
    let indexArray = subtopics.map(
      (topic, index) => index
    );
    return indexArray;
  },
];

const topicTitle = [
  ['mainStore', 'data', 'topic'],
  (topic) => {
    return topic.title;
  },
];

export default {
  activeTopics,
  subTopicIndexs,
  topicTitle,
}
