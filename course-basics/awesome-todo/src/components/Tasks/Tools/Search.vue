<template>
  <q-input rounded v-model="searchField" label="Search task" class="col q-ma-md">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
    </template>

  </q-input>
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        console.log('Value', value)
      }
    }
  }

}
</script>

<style>

</style>