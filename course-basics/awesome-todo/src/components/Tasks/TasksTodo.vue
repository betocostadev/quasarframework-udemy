<template>
  <div>
    <list-header
      bgColor="bg-orange-4"
      >Todo
      </list-header>

    <q-list bordered separator>
      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['tasksTodo'],
  components: {
    'task': require('./Task').default,
    'list-header': require('../Shared/ListHeader').default
  }
}
</script>

<style>

</style>