<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="removeResource(id)">
          <em class="fas fa-trash-alt"></em>
        </base-button>
      </header>

      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'id'],
  inject: ['removeResource'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #41b883;
}

a:hover,
a:active {
  color: #439b74;
}
</style>
