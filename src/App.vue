<template>
  <CustomGrid
      class="ag-theme-alpine"
      style="height: 500px"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @grid-ready="onGridReady"
  >
  </CustomGrid>
</template>


<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
  gridApi.value = params.api;
};

const rowData: any = reactive({}); // Set rowData to Array of Objects, one Object per Row

// Each Column Definition results in one Column.
const columnDefs = reactive({
  value: [
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ],
});

// DefaultColDef sets props common to all Columns
const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1
};

// Example load data from sever
onMounted(() => {
  fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((remoteRowData) => (rowData.value = remoteRowData));
});

</script>