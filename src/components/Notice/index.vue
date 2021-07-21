<template>
    <div v-if="isShow">
        <!-- 渲染提示类容 -->
        <h3>{{title}}</h3>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  name: 'VueStudyIndex',
  // 接受props
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false
    };
  },

  mounted() {

  },

  methods: {
    show() {
      this.isShow = true
      setTimeout(() => {
        this.hide()
      }, this.duration)
    },
    hide() {
      this.isShow = false
      this.remove()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>