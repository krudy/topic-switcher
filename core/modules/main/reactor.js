import { Reactor } from 'nuclear-js';

// TODO(cam): create config for prod and staging to toggle debug mode
const reactor = new Reactor({
  debug: true,
});

export default reactor;
