<template>
  <div class="jTreeNode">
    <div class="content">
      <span class="toggle">
        <span
          v-if="node.expand && node.children && Array.isArray(node.children)"
          @click="toggle"
        >-</span>
        <span
          v-if="!node.expand && node.children && Array.isArray(node.children)"
          @click="toggle"
        >+</span>
      </span>
      <jCheckBox
        :value="node.checked"
        @input="toggleCheck"
      ></jCheckBox>
      <span class="title">{{ node.title }}</span>
    </div>
    <template v-if="node.expand && node.children && Array.isArray(node.children)">
      <template v-if="node.expand">
        <jTreeNode
          v-for="(treeNode, treeIndex) in node.children"
          :key="treeIndex"
          :node="treeNode"
        ></jTreeNode>
      </template>
    </template>
  </div>
</template>

<script>
import jCheckBox from "components/CheckBox/jCheckBox";
import commonMixins from "mixins/common";

export default {
  name: "jTreeNode",
  mixins: [commonMixins],
  props: {
    node: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      tree: this.findComponentUpward(this, "jTree")
    };
  },
  created() {},
  watch: {
    "node.children": {
      handler(newVal) {
        if (newVal) {
          const noChecked = !newVal.some(val => !val.checked);

          this.$set(this.node, "checked", noChecked);
        }
      },
      deep: true
    }
  },
  methods: {
    toggle() {
      this.$set(this.node, "expand", !this.node.expand);

      // 通知jTree实例某个节点展开收缩事件
      this.tree.emitEvent("on-toggle-expand", this.node);
    },
    toggleCheck(value) {
      this.updateChildren(this.node, value);

      if (this.tree) {
        this.tree.emitEvent("on-check-change", this.node);
      }
    },
    updateChildren(node, value) {
      this.$set(node, "checked", value);

      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(child => {
          this.updateChildren(child, value);
        });
      }
    }
  },
  components: {
    jCheckBox
  }
};
</script>

<style scoped lang="scss">
.jTreeNode {
  padding-left: 20px;
  margin: 6px 0;

  .content {
    display: flex;
    align-items: flex-end;
    span {
      display: inline-block;
    }
    span.title {
      margin-left: 6px;
    }
    .toggle {
      width: 22px;
      height: 22px;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
