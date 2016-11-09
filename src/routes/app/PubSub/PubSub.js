let PubSub = {
  events: {},
  subscribe: function (eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  },
  unsubscribe: function(eventName, callback) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === callback) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  publish: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(callback) {
        callback(data);
      });
    }
  }
};

export default PubSub;
