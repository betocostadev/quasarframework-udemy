<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">

      <template v-if="tasksDownloaded">

        <div class="row q-mb-lg">
          <search />
          <sort />
        </div>

        <p
          v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
          class="text-subtitle2 q-ma-lg q-pa-lg bg-amber-2"
          >No results for the search.</p>

        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks
            v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
            >Very good, you have no more tasks 👏</no-tasks>

          <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

          <tasks-completed class="q-mb-xl" v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted" />
        </q-scroll-area>

        <p v-if="!search && !Object.keys(tasksCompleted).length"
          class="text-subtitle2 q-ma-lg q-pa-lg bg-amber-2">You haven't completed any task yet. 😕</p>

        <!-- The no-pointer-events disable the mouse click events on the div, then we enable it below. -->
        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            @click="showAddTask = true"
            round
            class="all-pointer-events"
            color="primary"
            size="24px"
            icon="add"
          />
        </div>

      </template>

      <template v-else>
        <span class="absolute-center">
          <q-spinner-pie
            color="primary"
            size="4em"
          />
        </span>
      </template>

    </div>

    <q-dialog v-model="showAddTask">
      <addtask-modal @close="showAddTask = false"></addtask-modal>
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters, mapState } from "vuex"
export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    /* // in case of not using the vuex mapgetters
    tasks() {
      this.$store.getters['tasks/tasks']
    } */
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search', 'tasksDownloaded'])
  },
  components: {
    'addtask-modal': require('../components/Tasks/Modals/AddTask').default,
    'tasks-todo': require('../components/Tasks/TasksTodo').default,
    'tasks-completed': require('../components/Tasks/TasksCompleted').default,
    'no-tasks': require('../components/Tasks/Modals/NoTasks').default,
    'search': require('../components/Tasks/Tools/Search').default,
    'sort': require('../components/Tasks/Tools/Sort').default
  },
  mounted() {
    // Using the $root.$emit on the no-tasks component to use the code below
    this.$root.$on('showAddTask', () => this.showAddTask = true)
  }
  // methods: {
  //   taskComplete () {
  //     console.log(this.tasks.completed)
  //     this.tasks.completed = !this.tasks.completed
  //   }
  // }

}
</script>

<style lang="stylus">
  .q-scroll-area-tasks
    display: flex
    flex-grow: 1

</style>