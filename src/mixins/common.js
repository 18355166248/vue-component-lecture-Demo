const commonMixins = {
  methods: {
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};

function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (componentName === name) {
      child.$emit.call(child, eventName, params);
    } else {
      broadcast.call(child, componentName, eventName, params);
    }
  });
}

export default commonMixins;
