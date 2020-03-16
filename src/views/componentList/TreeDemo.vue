<template>
  <div>
    <jTree
      :data="list"
      @on-toggle-expand="onToggleExpand"
      @on-check-change="onCheckChange"
    ></jTree>
  </div>
</template>

<script>
import jTree from "components/Tree/jTree";

const mock = [
  {
    title: "parent 1",
    children: [
      {
        title: "parent 1-1",
        children: [
          {
            title: "leaf 1-1-1"
          },
          {
            title: "leaf 1-1-2"
          }
        ]
      },
      {
        title: "parent 1-2",
        children: [
          {
            title: "leaf 1-2-1"
          },
          {
            title: "leaf 1-2-1"
          }
        ]
      }
    ]
  }
];

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = mock;
  },
  components: {
    jTree
  },
  methods: {
    onToggleExpand(node) {
      console.log("onToggleExpand", node);
    },
    onCheckChange(node) {
      console.log("onCheckChange", node);
    }
  }
};
</script>

<style scoped lang="scss"></style>
