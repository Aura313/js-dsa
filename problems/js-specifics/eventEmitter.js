// Write a class, EventEmitter that has three methods: on, emit, and removeListener.

// on("eventName", callbackFn) - a function that takes an eventName and a callbackFn, should save the callbackFn to be called when the event with eventName is emitted.
// emit("eventName", data) - a function that takes an eventName and data object, should call the callbackFns associated with that event and pass them the data object.
// removeListener("eventName", callbackFn) - a function that takes eventName and callbackFn, should remove that callbackFn from the event.
// For example:

// let superbowl = new EventEmitter()

// const cheer = function (eventData) {
//   console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam)
// }

// const jeer = function (eventData) {
//   console.log('BOOOOOO ' + eventData.scoringTeam)
// }

// superbowl.on('touchdown', cheer)
// superbowl.on('touchdown', jeer)

// superbowl.emit('touchdown', { scoringTeam: 'Patriots' }) // Both cheer and jeer should have been called with data

// superbowl.removeListener('touchdown', jeer)

// superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only c

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callbackFn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callbackFn);
  }

  emit(eventName, eventData) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((fn) => fn(eventData));
  }

  removeListener(eventName, callbackFn) {
    const idx = this.events[eventName].indexOf(callbackFn);
    if (idx === -1) return;
    this.events[eventName].splice(idx, 1);
  }
}

let superbowl = new EventEmitter();
const cheer = function (eventData) {
  console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam);
};

const jeer = function (eventData) {
  console.log('BOOOOOO ' + eventData.scoringTeam);
};

superbowl.on('touchdown', cheer);
superbowl.on('touchdown', jeer);

superbowl.emit('touchdown', { scoringTeam: 'Patriots' }); // Both cheer and jeer should have been called with data

superbowl.removeListener('touchdown', jeer);

superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer should have been called
