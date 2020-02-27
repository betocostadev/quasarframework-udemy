<template>
  <q-page class="q-pa-md">
    <q-list v-if="Object.keys(tasks).length" bordered separator>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
    <h2 v-else>Nothing to do :(</h2>

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
      showAddTask: true
    }
  },
  computed: {
    /* // in case of not using the vuex mapgetters
    tasks() {
      this.$store.getters['tasks/tasks']
    } */
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require('../components/Tasks/Task').default,
    'addtask-modal': require('../components/Modals/AddTask').default
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