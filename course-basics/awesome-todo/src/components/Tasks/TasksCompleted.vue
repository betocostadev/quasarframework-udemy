<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div class="q-mt-lg">
      <list-header
        bgColor="bg-green-4"
        >Done</list-header>

      <q-list v-if="Object.keys(tasksCompleted).length" bordered separator>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key">
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: [ 'tasksCompleted' ],
  components: {
    'task': require('./Task').default,
    'list-header': require('../Shared/ListHeader').default
  }
}
</script>

<style>

</style>