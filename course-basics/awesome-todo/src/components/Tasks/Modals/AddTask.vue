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
export default {
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
  components: {
    'modal-header': require('../../Shared/ModalHeader').default,
    'modal-task-name': require('../../Shared/ModalTaskName').default,
    'modal-task-date': require('../../Shared/ModalTaskDate').default,
    'modal-task-time': require('../../Shared/ModalTaskTime').default,
    'modal-task-note': require('../../Shared/ModalTaskNote').default,
    'modal-buttons': require('../../Shared/ModalButtons').default
  },
  methods: {
    // The ref called name was placed inside the QInput for the task name
    ...mapActions('tasks', ['addTask']),

    submitForm() {
      // console.log(this.$refs.name)
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
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