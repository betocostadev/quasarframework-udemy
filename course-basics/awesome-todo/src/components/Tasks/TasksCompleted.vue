<template>
  <div>
    <list-header>Done</list-header>
    <q-list v-if="Object.keys(tasksCompleted).length" bordered separator>
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('./Task').default,
    'list-header': require('../Shared/ListHeader').default
  }
}
</script>

<style>

</style>