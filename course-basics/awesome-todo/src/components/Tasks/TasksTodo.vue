<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header
        v-if="!settings.showTasksInOneList"
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

  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [ 'tasksTodo' ],
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