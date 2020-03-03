<template>
  <q-banner dense inline-actions class="list-header text-white text-center bg-orange-4">
      <span class="text-bold text-subtitle-1"><slot></slot></span>
    </q-banner>
</template>

<script>
export default {

}
</script>

<style>
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>