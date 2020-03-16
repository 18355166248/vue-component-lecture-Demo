<template>
  <div>
    <jTreeNode
      v-for="(treeNode, treeIndex) in cloneData"
      :key="treeIndex"
      :node="treeNode"
    ></jTreeNode>
  </div>
</template>

<script>
import jTreeNode from "./jTreeNode";
import _ from "lodash";

export default {
  name: "jTree",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      cloneData: []
    };
  },
  watch: {
    data(newVal) {
      this.resetData(newVal);
    }
  },
  created() {
    this.resetData(this.data);
  },
  components: {
    jTreeNode
  },
  methods: {
    resetData(data) {
      this.cloneData = _.cloneDeep(data);
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    }
  }
};
</script>

<style scoped lang="scss"></style>
