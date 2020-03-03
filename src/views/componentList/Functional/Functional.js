export default {
  functional: true,
  props: {
    list: Array,
  },
  render(h, ctx) {
    const renderList = ctx.props.list.map(listItem => h('div', listItem.name))

    return h('div', ctx.data, [...renderList, ...ctx.children])
  },
}
