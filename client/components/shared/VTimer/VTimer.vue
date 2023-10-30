<template>
  <div class="v-timer">
    <span>{{ timer }}</span>
  </div>
</template>

<script>
export default {
  name: "VTimer",

  data() {
    return {
      timer: "00:00",
    };
  },

  props: {
    startingMinutes: {
      type: Number,
      default: 5,
    },
  },

  watch: {
    timer: {
      handler: function (newVal) {
        if (newVal === "00:00") {
          this.onCountdownComplete();
        }
      },
    },
  },

  methods: {
    updateCountdown() {
      
      const timerName = this.$route.name

      const startTimeStamp = Date.now();
      let startingSeconds = null;

      const isCodeSent = localStorage.getItem(`${timerName}-finishTimeStamp`) !== null;

      if (!isCodeSent) {
        startingSeconds = this.startingMinutes * 60;

        localStorage.removeItem(`${timerName}-finishTimeStamp`);
      } else {
        startingSeconds = Math.floor(
          (localStorage.getItem(`${timerName}-finishTimeStamp`) - startTimeStamp) / 1000
        );
      }

      let finishTimeStamp = startingSeconds * 1000 + startTimeStamp;

      localStorage.setItem(`${timerName}-finishTimeStamp`, finishTimeStamp);

      let startTime = startTimeStamp;
      let finishTime = localStorage.getItem(`${timerName}-finishTimeStamp`);

      let intervalId = setInterval(() => {
        if (startTime <= finishTime) {
          let totalSeconds = (finishTime - startTime) / 1000;

          let seconds = totalSeconds % 60;
          let minutes = Math.floor(totalSeconds / 60);

          this.timer = `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`;

          startTime += 1000;
        } else {
          localStorage.removeItem(`${timerName}-finishTimeStamp`);

          clearInterval(intervalId);
        }
      }, 1000);
    },

    updateCountdownNotStored() {
      let totalSeconds = this.startingMinutes * 60;

      let intervalId = setInterval(() => {
        if (totalSeconds >= 0) {
          let seconds = totalSeconds % 60;
          let minutes = Math.floor(totalSeconds / 60);

          this.timer = `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`;

          totalSeconds--;
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    },

    onCountdownComplete() {
      this.$emit("countdown-complete");
    },
  },
};
</script>

<style src="./VTimer.scss" lang="scss"></style>
