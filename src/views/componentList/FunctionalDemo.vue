<template>
  <div>
    <Functional :list="list">
      <div>
        测试children
      </div>
    </Functional>
  </div>
</template>

<script>
import Functional from './Functional/Functional.js'

export default {
  name: 'FunctionalDemo',
  data() {
    return {
      list: [
        {
          id: 1,
          name: '测试函数组件Functional',
        },
        {
          id: 2,
          name: '第二条数据',
        },
        {
          id: 3,
          name: '第三条数据展示',
        },
      ],
    }
  },
  components: {
    Functional,
  },
}
</script>

<style scoped lang="scss"></style>
