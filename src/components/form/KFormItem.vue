<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>
        <!-- 校验信息 -->
        <p v-if="errMsg">{{errMsg}}</p>
    </div>
</template>

<script>
// import KInput from "./KInput.vue";
import Schema from "async-validator";
export default {
  name: "Kformitem",
  //注入父组件传过来的值
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  components: {},

  directives: {},

  data() {
    return {
      errMsg: "",
    };
  },

  mounted() {
    //监听校验时间，并执行监听
    // this.$on("validate", () => {
    // //   this.validate();
    // });
  },

  methods: {
    validate() {
      //获取该formitem对应的rules
      const rules = this.form.rules[this.prop];
      //获取该formitem对应的数据
      const data = this.form.model[this.prop];
      //执行校验
      const desc = {
        [this.prop]: rules,
      };
      const schema = new Schema(desc);
      //返回的是一个promise
      return schema.validate({ [this.prop]: data }, (errors) => {
        if (errors) {
          this.errMsg = errors[0].message;
        } else {
          this.errMsg = "";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>