<template>
  <div>
      <k-form :model="model" :rules="rules" ref="loginForm">
          <k-form-item label='用户名' prop='account'>
          <k-input v-model="model.account" type='text'></k-input>
            </k-form-item>
        <k-form-item label='密码' prop='password'>
            <k-input v-model="model.password" type='password'></k-input>
        </k-form-item>
        <k-checked v-model="checked"></k-checked>
        <k-form-item>
            <button @click="login">登录</button>
        </k-form-item>
      </k-form>
  </div>
</template>

<script>
import KChecked from './KChecked.vue';
import KForm from "./KForm.vue";
import KFormItem from "./KFormItem.vue";
import KInput from "./KInput.vue";
// 引入notice组件
import Notice from '@/components/Notice';
// 引入create方法
import create from '@/utils/create';
export default {
  components: { KInput, KFormItem, KForm, KChecked, },
  data() {
    return {
      checked: false,
      model: {
        account: "123",
        password: "",
      },
      rules: {
        account: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }],
      },
    };
  },
  componments: {
    KInput,
  },
  mounted() {
    this.$on("input", () => {
      // console.log(e)
    });
  },
  methods: {
    login() {
      // 创建弹窗实例
      let notice
      this.$refs.loginForm.validate((validate) => {
        if (validate) {
          notice = create(Notice, {
            title: '弹窗',
            message: '成功',
            duration: 3000
          })
        } else {
          notice = create(Notice, {
            title: '弹窗',
            message: '失败',
            duration: 3000
          })
        }
        notice.show()
      });
    },
  },
};
</script>

<style>
</style>