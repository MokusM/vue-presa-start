import { createApp } from 'vue';
import App from './App.vue';

const slides = require.context('./slides', true, /[\w-]+\.vue$/);

const app = createApp(App);
slides.keys().map((key) => {
	app.component(slides(key).default.name ?? key.split('/').pop().split('.')[0], slides(key).default);
});
app.mount('#app');
