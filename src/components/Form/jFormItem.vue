<template>
  <div class="jFormItem">
    <label :style="{ width: form.labelWidth }">{{ label }}</label>
    <div class="rightContent">
      <slot></slot>
      <transition name="slide-toggle-fade">
        <div v-if="validateStatus === 'error'" class="validateError">
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import commonMixins from 'mixins/common'
import _ from 'lodash'

export default {
  name: 'jFormItem',
  mixins: [commonMixins],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  inject: ['form'],
  data() {
    return {
      required: false,
      validateStatus: '',
      validateMessage: '',
    }
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop]
    },
  },
  mounted() {
    if (this.prop) {
      this.dispatch('jFrom', 'on-form-item-add', this)

      // 设置初始值, 以便在重置的时候恢复默认值
      this.initialValue = this.filedValue

      this.setRules()
    }
  },
  // 组件销毁前, 将实例从jForm的
  beforeDestroy() {
    this.dispatch('jForm', 'on-form-item-remove', this)
  },
  methods: {
    // 缓存需要校验的实例到jForm组件
    setRules() {
      let rules = this.getRules()

      if (rules.length) {
        rules.forEach(rule => {
          if (rule.required) this.required = rule.required
        })
      }

      this.$on('on-form-blur', this.onFiledBlur)
      this.$on('on-form-change', this.onFiledChange)
    },
    // 获取当前表单的rules
    getRules() {
      const rules = this.form.rules[this.prop]

      return _.cloneDeep(rules || [])
    },
    // 过滤rules 触发条件有blur change trigger
    getFiledRules(type) {
      const rules = this.getRules()

      return rules.filter(rule => rule.trigger.indexOf(type) > -1)
    },
    /**
     * 校验状态
     * @params trigger {string}
     * @params callback {func}
     */
    validate(trigger, callback = function() {}) {
      const rules = this.getFiledRules(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      // 设置状态为验证中
      this.validateStatus = 'validating'

      let descriptor = { [this.prop]: rules }

      const validator = new AsyncValidator(descriptor)

      validator.validate({ [this.prop]: this.fieldValue }, (err, fields) => {
        this.validateStatus = err ? 'error' : 'success'
        this.validateMessage = err ? err[0].message : ''

        callback(err, fields)
      })
    },
    onFiledBlur(value) {
      this.validate('blur')
    },
    onFiledChange(value) {
      this.validate('change')
    },
    resetField() {
      this.required = false
      this.validateStatus = ''
      this.validateMessage = ''

      this.form.model[this.prop] = this.initialValue
    },
  },
}
</script>

<style scoped lang="scss">
$red: #f56c6c;

.jFormItem {
  display: flex;
  margin-bottom: 22px;
  label {
    display: flex;
    align-items: center;
    height: 40px;

    &::before {
      content: '*';
      padding-right: 4px;
      font-size: 12px;
      color: $red;
    }
  }

  .rightContent {
    width: 100%;
    position: relative;
    .validateError {
      font-size: 12px;
      margin-top: 2px;
      color: $red;
      overflow: hidden;
    }
  }
}

.slide-toggle-fade-enter-active,
.slide-toggle-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-toggle-fade-enter-to,
.slide-toggle-fade-leave {
  height: 17px;
}

.slide-toggle-fade-enter,
.slide-toggle-fade-leave-to {
  height: 0;
}
</style>
