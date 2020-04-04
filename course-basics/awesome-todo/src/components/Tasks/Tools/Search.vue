<template>
  <q-input
    v-select-all
    rounded
    v-model="searchField"
    @keyup.esc="searchField = ''"
    label="Search task"
    class="col q-ma-md">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
    </template>

  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { selectAll } from '../../../directives/directive-select-all'
export default {

  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  },
  directives: {
    selectAll
  }

}
</script>

<style>

</style>