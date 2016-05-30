function Job(name, description) {
  this.name = name;
  this.description = description;
};
Job.prototype = {
  getName: function() {
    return this.name;
  },
  getDesc: function() {
    return this.description;
  }
};
