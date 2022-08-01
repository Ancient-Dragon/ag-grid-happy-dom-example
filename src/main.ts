import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { AgGridVue } from "ag-grid-vue3";  // the AG Grid Vue Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
const app = createApp(App)

app.component('CustomGrid', AgGridVue)
app.mount('#app')

