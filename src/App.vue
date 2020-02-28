<template>
  <div id="app" style="margin: 30px">
    <div class="menu">
      <div
        v-for="menu in menuList"
        :key="menu"
        :class="[activePath(menu), 'menuItem']"
      >
        <router-link :to="`/${menu}`">{{ menu }}</router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routeList } from './router'

export default {
  name: 'App',
  data() {
    return {
      menuList: routeList,
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    activePath(path) {
      return this.$route.path === `/${path}` ? 'active' : ''
    },
  },
}
</script>

<style scoped lang="scss">
#app {
  .menu {
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    .menuItem {
      display: inline-block;
      margin-right: 15px;
      height: 40px;
      line-height: 40px;
      > a {
        color: #1989fa;
        opacity: 0.5;
      }
      &.active {
        > a {
          opacity: 1;
        }
      }
    }
  }

  .content {
  }
}
</style>
