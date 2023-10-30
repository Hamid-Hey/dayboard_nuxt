<template>
  <div class="v-data-table">
    <table>
      <thead class="v-data-table__head">
        <tr>
          <td
            v-for="(column, index) in headers"
            :key="index"
            :width="column.width"
          >
            {{ column.title }}
          </td>
        </tr>
      </thead>

      <tbody class="v-data-table__body">
        <tr v-for="(item, index) in localData" :key="index">
          <td
            v-for="(col, i) in headers"
            :key="i"
            :class="[
              'v-data-table__items',
              { 'v-data-table__items-mobile': col.value === `mobile` },
            ]"
          >
            {{ item[col.value] || "" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VDataTable",

  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    localData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style src="./VDataTable.scss" lang="scss" />
