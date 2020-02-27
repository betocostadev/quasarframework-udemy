<template>
<!-- How it was before
<q-input outlined v-model="taskToSubmit.dueDate" mask="date" label="Due date">

<q-date @input="() => $refs.qDateProxy.hide()" />-->
  <q-input
    outlined
    :value="dueDate"
    @input="$emit('update:dueDate', $event), $refs.qDateProxy.hide()"
    mask="date"
    label="Due date">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date :value="dueDate" @input="$emit('update:dueDate', $event), $refs.qDateProxy.hide()" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<style>

</style>