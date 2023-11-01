<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :localData="localData"
      :footers="tableFooter"
      ref="table"
    />

    <button @click="footer">test</button>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      headers: [
        {
          value: "date",
          title: "date",
          width: 110,
        },
        {
          value: "sleep",
          title: "sleep",
        },
        {
          value: "rest",
          title: "rest",
        },
        {
          value: "inspirational",
          title: "inspirational",
        },
        {
          value: "javascript",
          title: "javascript",
        },
      ],

      localData: [
        {
          date: "1/11/2023",
          sleep: 7.5,
          rest: 3,
          inspirational: 1,
          javascript: 4,
        },
        {
          date: "2/11/2023",
          sleep: 6,
          rest: 2,
          inspirational: 1,
          javascript: 6,
        },
        {
          date: "3/11/2023",
          sleep: 8,
          rest: 2.5,
          inspirational: 0.5,
          javascript: 5.5,
        },
        {
          date: "4/11/2023",
          sleep: 7,
          rest: 2,
          inspirational: 1,
          javascript: 2,
        },
        {
          date: "5/11/2023",
          sleep: 7.5,
          rest: 3,
          inspirational: 1,
          javascript: 4.5,
        },
        {
          date: "6/11/2023",
          sleep: 6,
          rest: 0.5,
          inspirational: 0.5,
          javascript: 5,
        },
        {
          date: "7/11/2023",
          sleep: 7,
          rest: 2,
          inspirational: 1,
          javascript: 5.5,
        },
      ],

      tableFooter: [],
    };
  },

  mounted() {
    console.log(this.$refs.table);
  },

  methods: {
    footer() {
      const result = [{}, {}];

      this.localData.forEach((data) => {
        Object.keys(data).forEach((key) => {
          if (key !== "date") {
            if (!result[0][key]) {
              result[0][key] = 0;
            }
            if (!result[1][key]) {
              result[1][key] = 0;
            }
            result[0][key] += data[key];
            result[1][key] += data[key] / this.localData.length;
          }
        });
      });

      Object.keys(result[1]).forEach((key) => {
        result[1][key] = Math.round(result[1][key]);
      });

      this.tableFooter = result;

      console.log(this.tableFooter);
    },
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
