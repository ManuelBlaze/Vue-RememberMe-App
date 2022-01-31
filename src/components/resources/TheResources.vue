<template>
  <base-card class="container">
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="isStoredSelected"
    >
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resources')" :mode="isAddSelected">
      Add Resource
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="selectedTab" />
  </keep-alive>
</template>

<script>
import AddResources from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: {
    AddResources,
    StoredResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  computed: {
    isStoredSelected() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    isAddSelected() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
      this.resources.unshift(resource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resourceId) {
      const resIndex = this.resources.findIndex((res) => res.id === resourceId);
      this.resources.splice(resIndex, 1);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
