const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      outputGoalA: 'Learn Vue!',
      outputGoalB: 'Master Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.outputGoalA;
      }
      else {
        return this.outputGoalB;
      }
    }
  }
});

app.mount("#user-goal");
