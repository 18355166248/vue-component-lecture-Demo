<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>年龄: {{age}}</div>
    <button @click="helloMethod">触发HelloWorld组件事件</button>
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
      age: 0
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
