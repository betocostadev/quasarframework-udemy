<template>
  <q-input @input="$emit('update:note', $event)" :value="note" label="Notes" />
</template>

<script>
export default {
  props: [ 'note' ]
}
</script>

<style>

</style>