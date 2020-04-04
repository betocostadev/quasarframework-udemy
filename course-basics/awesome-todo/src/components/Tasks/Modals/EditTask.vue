<template>
  <q-card>

    <modal-header>Edit Task</modal-header>

    <q-form
      @submit.prevent="submitForm"
      class="q-gutter-md">

      <q-card-section class="q-pt-none">
        <!-- .sync is used because we are emitting from the component -->
        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName" />

        <modal-task-date :dueDate.sync="taskToSubmit.dueDate" />

        <modal-task-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime" />

        <modal-task-note :note.sync="taskToSubmit.note" />

      </q-card-section>

      <modal-buttons></modal-buttons>

    </q-form>
  </q-card>

</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from '../../../mixins/mixin-add-edit-task'

export default {
  props: ['task', 'id'],
  mixins: [ mixinAddEditTask ],
  data() {
    return {
      taskToSubmit: { }
    }
  },
  methods: {
    // The ref called name was place inside the QInput for the task name
    ...mapActions('tasks', ['updateTask']),

    submitTask() {
      // Triggers the addTask action that calls for the add task mutation
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style>

</style>