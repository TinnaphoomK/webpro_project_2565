import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import primeVue component
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card'
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';

// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ToastService);

app.component("Button", Button)
app.component("Toast", Toast)
app.component("Menubar", Menubar)
app.component("Sidebar", Sidebar)
app.component("InputText", InputText)
app.component("Card", Card)
app.component("Textarea", Textarea)
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("ColumnGroup", ColumnGroup)
app.component("Row", Row)
app.component("Password", Password)
app.component("Dropdown", Dropdown)

app.mount('#app')
