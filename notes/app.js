const App = {
  data() {
    return {
      title: "vue title",
      input: {
        value: "",
        placeholder: "type or not",
      },
      notes: ["aaaaa", "bbbbb", "ccccc"],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updateList) {
        localStorage.setItem("notes", JSON.stringify(updateList));
      },
    },
  },
  methods: {
    getNotes() {
      const notes = localStorage.getItem("notes");

      if (notes) {
        this.notes = JSON.parse(notes);
      }
    },
    onSubmit() {
      this.notes.push(this.input.value);
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
