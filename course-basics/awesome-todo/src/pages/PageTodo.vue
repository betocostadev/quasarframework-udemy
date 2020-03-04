<template>
  <q-page class="q-pa-md">

    <div class="row">
      <search />
      <sort />
    </div>

    <p
      v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
      class="text-subtitle2 q-ma-lg q-pa-lg bg-amber-2"
      >No results for the search.</p>

    <no-tasks v-if="!Object.keys(tasksTodo).length && !search">Very good, you have no more tasks 👏</no-tasks>

    <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

    <tasks-completed v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted" />

    <p v-if="!search && !Object.keys(tasksCompleted).length"
      class="text-subtitle2 q-ma-lg q-pa-lg bg-amber-2">You haven't completed any task yet. 😕</p>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
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
    ...mapState('tasks', ['search'])
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


</style>