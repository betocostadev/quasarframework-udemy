<template>
  <q-banner :class="bgColor" dense inline-actions class="list-header text-white text-center">
      <span class="text-bold text-subtitle-1"><slot></slot></span>
    </q-banner>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style>
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>