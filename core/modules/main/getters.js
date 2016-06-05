import { toImmutable } from 'nuclear-js';

const activeTopic = [
  ['mainStore', 'data', 'activeTopic'],
  (activeTopic) => {
    return activeTopic;
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

const subTopics = [
  ['mainStore', 'data', 'subtopics'],
  (subtopics) => {
    return subtopics;
  },
];

const topicTitle = [
  ['mainStore', 'data', 'topic'],
  (topic) => {
    return topic.title;
  },
];

export default {
  activeTopic,
  subTopicIndexs,
  subTopics,
  topicTitle,
}
