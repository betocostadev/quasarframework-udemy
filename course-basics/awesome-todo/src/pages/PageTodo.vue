<template>
  <q-page class="q-pa-md">
    <tasks-todo :tasksTodo="tasksTodo" />

    <tasks-completed :tasksCompleted="tasksCompleted" />

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
  import { mapGetters } from "vuex"
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
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  components: {
    'addtask-modal': require('../components/Modals/AddTask').default,
    'tasks-todo': require('../components/Tasks/TasksTodo').default,
    'tasks-completed': require('../components/Tasks/TasksCompleted').default
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