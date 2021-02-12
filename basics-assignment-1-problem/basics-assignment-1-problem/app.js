const app = Vue.createApp({
  data() {
    return {
      name: 'Andrew',
      age: 25,
      imgUrl: 'https://sansrd.com/asset/upload/article/4399_SanasRadio_image-20150902-6700-t2axrz.jpg'
    };
  },
  methods: {
    favNumber() {
      const favNumber = Math.random();
      return favNumber
    }
  }
});

app.mount("#assignment");
