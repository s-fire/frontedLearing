<template>
    <div>
        <input type="checkbox" :checked='checked' @change="onChange">
    </div>
</template>

<script>
export default {
  name: 'VueStudyKchecked',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    onChange(e) {
      this.$emit('change', e.target.checked);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>