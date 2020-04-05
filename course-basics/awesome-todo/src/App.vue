<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions('settings', ['getSettings']),
      ...mapActions('auth', ['handleAuthStateChange'])
    },
    mounted() {
      // Use Quasar platform detection before using Electron actions
      if(this.$q.platform.is.electron) {
        // Get the Electron IPC
        require('electron').ipcRenderer.on('show-settings', () => {
          this.$router.push('/settings')
        })
        require('electron').ipcRenderer.on('show-todo', () => {
          this.$router.push('/')
        })
      }
      this.getSettings()
      this.handleAuthStateChange()
    }
  }
</script>

<style lang="stylus">
  .text-strikethrough
    text-decoration line-through
</style>
