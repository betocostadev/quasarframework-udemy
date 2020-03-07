<template>
  <q-input v-select-all @input="$emit('update:note', $event)" :value="note" label="Notes" />
</template>

<script>
import { selectAll } from '../../directives/directive-select-all'
export default {
  props: [ 'note' ],
  directives: {
    selectAll
  }
}
</script>

<style>

</style>