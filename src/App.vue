<template>
  <stored-resources :resources="resources" />
</template>

<script>
import StoredResources from './components/resources/StoredResources.vue';

export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      resources: [
        {
          id: 0,
          title: 'Official Guide',
          description: 'The official VueJS documentation',
          link: 'https://v3.vuejs.org/',
        },
        {
          id: 1,
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
