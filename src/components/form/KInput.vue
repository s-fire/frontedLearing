<template>
  <div>
      <!-- 自定义组件要实现v-model，必须要实现:value,@input -->
      <!-- $attrs存储的是父组件标签上除了props之外的属性，配合inhertAttrs来避免顶层容器继承 -->
      <input :value="value" @input="inputChange" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    inputChange(e) {
      //通知父组件数值变化
      this.$emit("input", e.target.value);
      //通知父组件校验
      this.$parent.$emit("validate");
    },
  },
};
</script>

<style>
</style>