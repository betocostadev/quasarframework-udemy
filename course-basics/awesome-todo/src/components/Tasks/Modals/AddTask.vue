<template>
  <q-card>

    <modal-header>Add Task</modal-header>

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
// Created a mixing to be used with AddTask and EditTask both, avoiding to repeat code.
import mixinAddEditTask from '../../../mixins/mixin-add-edit-task'

export default {
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {
        name: '',
        note: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      }
    }
  },
  methods: {
    // The ref called name was placed inside the QInput for the task name
    ...mapActions('tasks', ['addTask']),
    submitTask(e) {
      // Triggers the addTask action that calls for the add task mutation
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>