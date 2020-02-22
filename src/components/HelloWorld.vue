<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <B />
  </div>
</template>

<script>
import B from "./B";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    B
  }
};
</script>

<style scoped lang="scss">
</style>
