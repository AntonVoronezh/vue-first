const App = {
  data() {
    return {
      title: "vue title",
      input: {
        value: "",
        placeholder: "type or not",
      },
      notes: []
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value)
        console.log(this.input)
    }
  },
};

Vue.createApp(App).mount("#app");
