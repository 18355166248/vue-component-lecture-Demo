<template>
  <div class="displayDemo">
    <span class="runBtn" @click="getComponent">Run</span>
    <div class="displayDemoContent">
      <codemirror
        ref="myCm"
        class="codemirror"
        :style="getStyle"
        :value="code"
        :options="cmOptions"
        @input="onCmCodeChange"
      ></codemirror>
      <div :style="getStyle" class="renderCodeArea">
        <Display :code="code" ref="display" />
      </div>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

import 'codemirror/theme/monokai.css'

import Display from '../../components/Display/Display'

export default {
  name: 'DisplayName',
  data() {
    const code = `<template>
  <h1>{{name}}!</h1>
</template>

<script>
  export default {
    data() {
      return {
        name: 'display Demo',
      }
    }
  }
<\/script>

<style>
  h1 {
    color: yellowgreen;
  }
</style>`
    return {
      code,
      cmOptions: {
        tabSize: 2,
        styleActiveLine: true,
        mode: 'text/javascript',
        theme: 'monokai',
        lineNumbers: true,
        line: true,
      },
    }
  },
  computed: {
    getStyle() {
      return {
        height: `${window.innerHeight - 200}px`,
        width: `${window.innerWidth / 2 - 60}px`,
      }
    },
  },
  mounted() {
    this.$refs.display.renderCode()
  },
  methods: {
    // onCmReady(cm) {
    //   console.log('the editor is readied!', cm)
    // },
    // onCmFocus(cm) {
    //   console.log('the editor is focus!', cm)
    // },
    onCmCodeChange(newCode) {
      this.code = newCode
    },
    getComponent() {
      this.$refs.display.renderCode()
    },
  },
  components: {
    codemirror,
    Display,
  },
}
</script>

<style lang="scss">
.displayDemo {
  .runBtn {
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 4px 15px;
    border: 1px solid #ccc;
  }
  .displayDemoContent {
    display: flex;

    .codemirror {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      overflow: hidden;
      .CodeMirror {
        height: 100%;
      }
    }

    .renderCodeArea {
      width: 50%;
      padding: 10px;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>
