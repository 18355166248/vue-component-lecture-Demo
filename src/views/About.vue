<template>
  <div class="about">
    <jForm :model="formInline" :rules="rules" label-width="60px">
      <jFromItem label="名字" prop="name">
        <jInput v-model="formInline.name"></jInput>
      </jFromItem>
      <jFromItem label="Email" prop="email">
        <jInput v-model="formInline.email"></jInput>
      </jFromItem>
    </jForm>
  </div>
</template>

<script>
import jForm from 'components/Form/jForm'
import jFromItem from 'components/Form/jFormItem'
import jInput from 'components/Input/jInput'

export default {
  name: 'About',
  data() {
    return {
      formInline: {},
      rules: {
        name: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入姓名',
          },
        ],
        email: [
          {
            type: 'email',
            trigger: 'blur',
            message: '请输入正确的邮箱格式',
          },
        ],
      },
    }
  },
  components: {
    jForm,
    jFromItem,
    jInput,
  },
}
</script>

<style scoped lang="scss"></style>
