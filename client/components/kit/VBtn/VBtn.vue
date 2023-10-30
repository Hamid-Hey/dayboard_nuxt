<template>
  <component
    :is="tag"
    :to="to && !href ? to : null"
    :href="href && !to ? href : null"
    :class="[
      'v-btn',
      `v-btn--${color}`,
      {
        'v-btn--small': small,
        'v-btn--medium': !small && !large,
        'v-btn--large': large,
        'v-btn--outline': outline,
        'v-btn--block': block,
        'v-btn--wide': wide,
        'v-btn--disable': disabled,
        'v-btn--loading': loading,
        'v-btn--freeze': disabled || loading,
      },
    ]"
    :disabled="disabled || loading"
  >
    <div class="v-btn__content">
      <div :class="{ invisible: loading }">
        <span class="v-btn__text">
          <slot></slot>
        </span>
      </div>

      <div v-if="loading" class="v-btn__loading">
        <img src="/img/btn_spinner.svg" alt="" />
      </div>
    </div>
  </component>
</template>

<script>
import { NuxtLink } from "#components";

export default {
  name: "VBtn",

  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() {
      if (this.to) {
        return NuxtLink;
      } else if (this.href) {
        return "a";
      } else {
        return "button";
      }
    },
  },
};
</script>

<style src="./VBtn.scss" lang="scss" />
