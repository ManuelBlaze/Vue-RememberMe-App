<template>
  <button :type="type" :class="mode">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['type', 'mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #41b883;
  border: 1px solid #41b883;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}

button:hover,
button:active {
  transition: 0.2s ease-in-out;
  background-color: #2e885f;
  border-color: #2e885f;
}

.flat {
  background-color: transparent;
  color: #2e885f;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #ddf0e7;
}
</style>
