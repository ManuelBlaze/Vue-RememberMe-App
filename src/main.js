import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/templates/BaseCard.vue';

createApp(App)
  .component('base-card', BaseCard)
  .mount('#app');
