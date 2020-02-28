<template>
  <div class="displayDemo">
    <button class="runBtn" @click="getComponent">Run</button>
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
  <h1>Hello {{name}}!</h1>
</template>

<script>
  export default {
    data() {
      return {
        name: '江浪',
      }
    }
  }
<\/script>

<style lang="scss">
</style>`
    return {
      code,
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'monokai',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
    }
  },
  computed: {
    getStyle() {
      return {
        height: `${window.innerHeight - 140}px`,
        width: `${window.innerWidth / 2 - 60}px`,
      }
    },
  },
  created() {},
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
      const component = this.$refs.display.renderCode()

      console.log(component)

      this.$refs.display.$el.appendChild(component.$el)
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
    font-size: 16px;
    cursor: pointer;
  }
  .displayDemoContent {
    display: flex;

    .codemirror {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      .CodeMirror {
        height: 100%;
      }
    }

    .renderCodeArea {
      width: 50%;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
}
</style>
