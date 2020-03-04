<template>
<!-- the emit-value will make only the value be emited, the value in the options array
  By doing this we have a problem. The value will also be rendered on the page. We use the
  map-options to avoid this. But it does have a performance penalty. -->
  <q-select
    filled
    emit-value
    map-options
    class="col q-ml-sm"
    v-model="sortBy"
    :options="options"
    label="Sort by:"
    stack-label
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'dueDate'
        },
        {
          label: 'Note',
          value: 'note'
        }
      ],
    }
  },

  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort
      },
      set(value) {
        this.setSort(value)
      }
    }
  },

  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style scoped>
  .q-select {
    flex: 0 0 112px;
  }
</style>