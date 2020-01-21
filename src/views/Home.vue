<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="helloMethod">触发HelloWorld组件事件</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import commonMixin from "mixins/common";

export default {
  name: "home",
  mixins: [commonMixin],
  methods: {
    helloMethod() {
      this.broadcast("B", "changeName", { name: "改变了名字" });
    }
  },
  components: {
    HelloWorld
  }
};
</script>
