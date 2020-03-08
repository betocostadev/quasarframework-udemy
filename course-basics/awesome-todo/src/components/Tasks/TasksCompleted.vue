<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
  <!-- To avoid the gap between the lists, we can use the :class to bind the class -->
    <div
      :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
      <list-header
        v-if="!settings.showTasksInOneList"
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
import { mapGetters } from 'vuex'

export default {
  props: [ 'tasksCompleted' ],
  components: {
    'task': require('./Task').default,
    'list-header': require('../Shared/ListHeader').default
  },
  computed: {
    ...mapGetters('settings', ['settings'])
  }
}
</script>

<style>

</style>