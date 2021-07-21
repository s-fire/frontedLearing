<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Kform",
  //向所有子孙组件传值，这里将整个实例传出去，用于输入校验
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() { },

  methods: {
    validate(cb) {
      //遍历所有子组件，执行子组件内的validate方法,此时结果是若干个promise组成的数组
      const task = this.$children.filter((item) => item.prop).map((item) => item.validate());
      Promise.all(task).then(() => cb(true)).catch(() => cb(false));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>