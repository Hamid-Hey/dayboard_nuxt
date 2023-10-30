<template>
  <div class="v-card">
    <div class="v-card__title-wrapper">
      <h3 class="v-card__title">{{ title }}</h3>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "VCard",

  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style src="./VCard.scss" lang="scss" />
