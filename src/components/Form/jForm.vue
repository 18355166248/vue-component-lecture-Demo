<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jForm',
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
    labelWidth: {
      type: String,
    },
  },
  provide() {
    return {
      form: this,
    }
  },
  data() {
    return {
      fieldList: [],
    }
  },
  created() {
    this.init()
    console.log(123)
  },
  methods: {
    init() {
      this.$on('on-form-item-add', filed => {
        if (filed) this.fieldList.push(filed)
      })

      this.$on('on-form-item-remove', field => {
        if (field) this.fieldList.splice(this.fieldList.indexOf(field), 1)
      })
    },
  },
}
</script>

<style scoped lang="scss"></style>
