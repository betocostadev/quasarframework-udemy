<template>
  <div>
    <list-header>Todo</list-header>

    <q-list v-if="Object.keys(tasksTodo).length" bordered separator>
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