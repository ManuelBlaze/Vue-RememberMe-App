<template>
  <ul>
    <resource-item
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      :id="res.id"
    />
  </ul>

  <base-card v-if="resources.length === 0">
    <h3>
      <em class="fas fa-exclamation-circle"></em> Please add some resources!
    </h3>
  </base-card>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: { ResourceItem },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

h3 {
  text-align: center;
}

em {
  color: #2e885f;
}
</style>
