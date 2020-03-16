<template>
  <input
    type="checkbox"
    :checked="value"
    @change="change"
  />
</template>

<script>
export default {
  name: "jCheckBox",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    change(e) {
      this.$emit("input", e.target.checked);
    }
  }
};
</script>

<style scoped lang="scss">
input {
  display: inline-block;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  zoom: 100.1%;
}
</style>