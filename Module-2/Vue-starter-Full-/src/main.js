import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/main.css';
import 'vue3-toastify/dist/index.css';


const app = createApp(App)

app.use(store);
app.use(router);
app.mount('#app');


