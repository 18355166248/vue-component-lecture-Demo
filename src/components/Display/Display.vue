<template>
  <div ref="display"></div>
</template>

<script>
import Vue from 'vue'
import { randomStrUtil } from 'utils/randomStr.util'

export default {
  name: 'Display',
  props: {
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      html: '',
      js: '',
      css: '',
      id: randomStrUtil.randomStr(),
      component: null,
    }
  },
  created() {
    this.getSource(this.code, 'template')
  },
  methods: {
    splitCode() {
      // 加一个id为app的div标签, 为了容错, 有时使用者传递的 `code` 可能会忘记在外层包一个节点，没有根节点的组件，是会报错的.
      const template = `<div id="app">${this.getSource(
        this.code,
        'template'
      )}</div>`
      // 这里对script 转化是为了后面可以执行这里面的逻辑 用 new Function 或者 eval
      const script = this.getSource(this.code, 'script').replace(
        /export default/,
        'return'
      )
      const style = this.getSource(this.code, 'style')

      this.html = template
      this.js = script
      this.css = style
    },
    /**
     * 获取标签内内容
     * source {string} 模板字符串
     * type 需要截取标签内部内容的标签名
     */
    getSource(source, type) {
      const regExp = new RegExp(`<${type}>`)
      let openingTag = source.match(regExp)

      if (openingTag) openingTag = openingTag[0]
      else return '' // 如果没有匹配到 直接返回空字符串

      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      )
    },
    // 渲染组件
    renderCode() {
      this.renderDestroy()

      this.splitCode()

      if (this.html && this.js) {
        const result = new Function(this.js)()

        result.template = this.html

        // 拿到符合extend格式的代码 进行初始化组件
        const Component = Vue.extend(result)

        // 实例化组件
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)
      }

      if (this.css) {
        const style = document.createElement('style')
        style.type = 'text/css'
        style.id = this.id
        style.innerHTML = this.css

        document.getElementsByTagName('head')[0].appendChild(style)
      }
    },
    // 销毁组件
    renderDestroy() {
      const componentDom = document.getElementById(this.id)
      if (componentDom) componentDom.parentNode.removeChild(componentDom)

      if (this.component) {
        this.component.$destroy()

        this.$refs.display.innerHTML = ''

        this.component = null
      }
    },
  },
  beforeDestroy() {
    this.renderDestroy()
  },
}
</script>

<style scoped lang="scss"></style>
