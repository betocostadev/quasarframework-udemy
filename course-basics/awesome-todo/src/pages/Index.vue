<template>
  <q-page padding>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"></task>
    </ul>
  </q-page>
</template>

<script>
import Task from '../components/Task'
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate: '2020/10/02',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Get bananas',
          dueDate: '2020/10/02',
          dueTime: '19:30'
        },
        {
          id: 3,
          name: 'Get apples',
          dueDate: '2020/12/02',
          dueTime: '15:30'
        }
      ]
    }
  },
  components: {
    task: Task
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style>

</style>