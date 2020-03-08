<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions('settings', ['getSettings'])
    },
    mounted() {
      this.getSettings()
    }
  }
</script>

<style lang="stylus">
  .text-strikethrough
    text-decoration line-through
</style>
