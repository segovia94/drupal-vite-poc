<template>
  <button class="button"><slot>Click Me</slot></button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style scoped>
  .button {
    background-color: black;
    border: none;
    padding: 1rem;
    color: white;
  }
</style>
