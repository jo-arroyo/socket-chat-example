const socket = io();

let vue = new Vue({
  el: '#messages',
  data: {
    test : 'This is a test',
    messages: [],
  }
});