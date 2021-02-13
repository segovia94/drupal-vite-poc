<template>
  <div class="sfc-instance">
    <p>I am an Single File Component rendered as a single instance.</p>
    <p>Count {{count}}</p>
    <AppButton @click="increase">Increase ++</AppButton>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
  name: 'SFCInstance',
  components: {
    AppButton
  },
  data() {
    return {
      count: 0
    }
  },
  mounted () {
    console.log('SFC Instance mounted')
  },
  methods: {
    increase () {
      this.count = this.count + 1;
    }
  },
}
</script>

<style scoped>
  .sfc-instance {
    border: 3px dotted gray;
    padding: 1rem;
  }
</style>
