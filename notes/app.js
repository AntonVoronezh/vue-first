const App = {
  data() {
    return {
      title: "vue title",
      input: {
        value: "",
        placeholder: "type or not",
      },
    };
  },
  methods: {
    onSubmit() {
        console.log(this.input)
    }
  },
};

Vue.createApp(App).mount("#app");
