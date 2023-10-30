<template>
  <div v-show="active" :class="['v-dialog', { 'v-dialog--blur': blur }]">
    <div class="abs-center">
      <div class="v-dialog__content">
        <slot />

        <div class="v-dialog__btn-pane">
          <v-btn @click="toggleDialog" outline small :color="btnColor">{{
            dialogBtn
          }}</v-btn>

          <v-btn v-if="homeBtn" color="error" outline small to="/">بازگشت به صفحه اصلی</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VDialog",

  data() {
    return {
      active: false,
    };
  },

  props: {
    dialogBtn: {
      type: String,
      default: "بستن",
    },
    blur: {
      type: Boolean,
      default: false,
    },
    btnColor: {
      type: String,
      default: 'error'
    },
    homeBtn: {
      type: Boolean,
      default: false
    }

  },

  methods: {
    toggleDialog() {
      this.active = !this.active;

      this.close()
    },

    close() {
      this.$emit('close')
    }
  },
};
</script>

<style src="./VDialog.scss" lang="scss" />
