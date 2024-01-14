import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRouter } from './router/setup';
import { setupStore } from './store/setup';

const app = createApp(App);

setupRouter(app);
setupStore(app);

app.mount('#app');
