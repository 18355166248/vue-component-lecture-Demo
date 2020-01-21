<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: "B",
  data() {
    return {
      name: "hello"
    };
  },
  created() {
    this.$on("changeName", this.changeName);
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
