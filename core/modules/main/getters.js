import { toImmutable } from 'nuclear-js';

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
  subTopics,
  topicTitle,
}
