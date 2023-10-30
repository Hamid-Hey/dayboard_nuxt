export default {
  data() {
    return {
      attrs$: {},
      listeners$: {},
    };
  },

  watch: {
    $attrs: {
      handler(val) {
        for (const attr in val) {
          this.$set(this.attrs$, attr, val[attr]);
        }
      },
      immediate: true,
    },

    $listeners: {
      handler(val) {
        for (const listener in val) {
          this.$set(this.listeners$, listener, val[listener]);
        }
      },
      immediate: true,
    },
  },
};
