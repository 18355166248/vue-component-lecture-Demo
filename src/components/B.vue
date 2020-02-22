<template>
  <div>{{ name }}</div>
</template>

<script>
import A from "./A";
import Mixins from 'mixins/common'

export default {
  name: "B",
  mixins: [Mixins],
  extends: A,
  data() {
    return {
      name: "hello"
    };
  },
  created() {
    console.log(this.name, this.age);

    this.$on("changeName", this.changeName);

    this.dispatch("Home", "onChangeAge", { age: 30 });
  },
  methods: {
    changeName({ name }) {
      console.log(name);

      this.name = name;
    }
  }
};
</script>

<style scoped lang="scss"></style>
