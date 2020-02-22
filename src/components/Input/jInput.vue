<template>
  <input
    type="text"
    @input="handleInput"
    @blur="handleBlur"
    :value="currentValue"
  />
</template>

<script>
import commonMixns from 'mixins/common'

export default {
  name: 'jInput',
  mixins: [commonMixns],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentValue: '',
    }
  },
  created() {
    this.dispatch('jFormItem', 'on-form-change', '12')
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('jFormItem', 'on-form-change', value)
    },
    handleBlur() {
      this.dispatch('jFormItem', 'on-form-blur', this.currentValue)
    },
  },
}
</script>

<style scoped lang="scss">
input {
  font-size: 14px;
  display: block;
  width: 100%;
  padding: 0 15px;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  color: #606266;
}
</style>
