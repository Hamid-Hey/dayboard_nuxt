<template>
  <div
    :class="[
      'v-radio',
      blockClass,
      {
        'v-radio--align': align,
        'v-radio--inline': inline,
      },

      'v-control',
      {
        'v-control--disabled': disabled,
      },
    ]"
  >
    <label class="v-radio__label">
      <input
        v-model="checked"
        :value="nativeValue"
        v-bind="attrs$"
        :disabled="disabled"
        class="v-radio__input"
        type="radio"
      />

      <span class="v-radio__toggle" />

      <span v-if="label || $slots.default" class="v-radio__title">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
import componentMixin from "@mixin/component";

export default {
  name: "VRadio",

  mixins: [componentMixin],

  inheritAttrs: false,

  props: {
    value: {
      default: undefined,
    },
    nativeValue: {
      default: undefined,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    align: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    block: {
      type: String,
      default: null,
    },
  },

  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.$nextTick(() => {
          this.$emit("input", val);
          this.$emit("change", val);
        });
      },
    },

    blockClass() {
      let classes = "";

      if (this.block) {
        this.block.split(",").forEach((i) => {
          classes += `v-radio--block-${i} `;
        });
      }

      return classes;
    },
  },
};
</script>

<style src="./VRadio.scss" lang="scss" />
