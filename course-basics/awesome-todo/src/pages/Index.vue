<template>
  <q-page padding>
    <input type="text" v-model="message">
    <button @click="clearMessage">Clear</button>
    <h5>{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: 'Im learning Vue.js'
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    }
  }
}
</script>
