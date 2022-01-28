import { createApp } from 'vue';

import App from './App.vue';
import BaseButton from './components/templates/BaseButton.vue';
import BaseCard from './components/templates/BaseCard.vue';

createApp(App)
  .component('base-button', BaseButton)
  .component('base-card', BaseCard)
  .mount('#app');
