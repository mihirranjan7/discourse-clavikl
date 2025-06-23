import Component from "@ember/component";
export default Component.extend({
  init() {
    this._super(...arguments);
    this.greeting = "Hello from Dummy Page Two!";
  }
});
