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
export default {
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: { }
    }
  },
  components: {
    'modal-header': require('../Shared/ModalHeader').default,
    'modal-task-name': require('../Shared/ModalTaskName').default,
    'modal-task-date': require('../Shared/ModalTaskDate').default,
    'modal-task-time': require('../Shared/ModalTaskTime').default,
    'modal-task-note': require('../Shared/ModalTaskNote').default,
    'modal-buttons': require('../Shared/ModalButtons').default
  },
  methods: {
    // The ref called name was place inside the QInput for the task name
    ...mapActions('tasks', ['updateTask']),

    submitForm() {
      // console.log(this.$refs.name)
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
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