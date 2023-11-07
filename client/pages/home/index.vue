<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :localData="localData"
      :totalFooters="tableTotalFooter"
      :averageFooters="tableAverageFooter"
      ref="table"
    >
      <template v-slot:total></template>

      <template v-slot:average></template>
    </v-data-table>

    <button @click="fillFooters">test</button>
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
      tableTotalFooter: [],
      tableAverageFooter: [],
    };
  },

  methods: {
    calculateActivityTotal() {
      this.$refs.table.$el;
    },

    footer() {
      const activityNodeList = [];

      this.headers.forEach((column) => {
        activityNodeList.push(
          this.$refs.table.$el.querySelectorAll(
            `.v-data-table__${column.title}-items`
          )
        );
      });

      activityNodeList.shift();

      const activityHoursNodeList = [];

      activityNodeList.forEach((activity, index) => {
        activityHoursNodeList.push(activity);
      });

      const allActivitiesHoursList = [];

      activityHoursNodeList.forEach((item, index) => {
        const activityHoursList = [];

        item.forEach((i, ind) => {
          activityHoursList[ind] = i.innerHTML;
        });
        allActivitiesHoursList.push(activityHoursList);
      });

      return allActivitiesHoursList;
    },

    calculateTotal() {
      const allActivitiesHoursList = this.footer();

      allActivitiesHoursList.forEach((item, index) => {
        let sum = 0;
        item.forEach((i, ind) => {
          sum += parseFloat(i);
        });
        this.tableTotalFooter[index] = sum;
      });
    },

    calculateAverage() {
      const allActivitiesHoursList = this.footer();

      allActivitiesHoursList.forEach((item, index) => {
        let sum = 0;
        item.forEach((i, ind) => {
          sum += parseFloat(i);
        });
        this.tableAverageFooter[index] = (sum / item.length).toFixed(2);
      });
    },

    fillFooters() {
      this.calculateTotal();
      this.calculateAverage();
    },
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
