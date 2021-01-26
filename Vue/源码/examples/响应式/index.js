// eslint-disable-next-line
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  mounted() {
    console.log(this.$data);
  },
  methods: {
    changeMsg() {
      this.message = 'Hello World!';
    },
  },
});
