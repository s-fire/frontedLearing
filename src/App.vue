<template>
  <div id="app">
    <!-- <FormTest></FormTest> -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import FormTest from "./components/form";

export default {
  name: "app",
  provide() {
    return { dong: this };
  },
  data() {
    return {
      bla: "blabla",
    };
  },
  components: {
    // FormTest,
  },
  created() {
    // 父组件先于子组件创建
    // console.log(this.$refs.hw);
  },
  mounted() {
    // this.$refs.hw.foo = "bar";
    // this.$children[0].foo = "dong";
  },
  methods: {
    onFoo() {
      // console.log("onFoo");
      // console.log(e);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
