<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>年龄: {{age}}</div>
    <button @click="helloMethod">触发HelloWorld组件事件</button>
    <div class="grid">
      <div v-for="item in list" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import commonMixin from "mixins/common";

export default {
  name: "Home",
  mixins: [commonMixin],
  data() {
    return {
      age: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  created() {
    this.$on("onChangeAge", this.onChangeAge);
  },
  methods: {
    helloMethod() {
      this.broadcast("B", "changeName", { name: "改变了名字" });
    },

    onChangeAge({ age }) {
      this.age = age;
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
</style>
