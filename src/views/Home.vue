<template>
  <div class="home">
    <div class="grid">
      <div v-for="item in list" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import commonMixin from 'mixins/common'

export default {
  name: 'Home',
  mixins: [commonMixin],
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
  },
  created() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
</style>
