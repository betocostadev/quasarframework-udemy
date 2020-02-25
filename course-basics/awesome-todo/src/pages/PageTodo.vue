<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters } from "vuex"
export default {
  computed: {
    /* // in case of not using the vuex mapgetters
    tasks() {
      this.$store.getters['tasks/tasks']
    } */
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task' : require('../components/Tasks/Task').default
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