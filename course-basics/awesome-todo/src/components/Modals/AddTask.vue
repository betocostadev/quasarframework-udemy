<template>
  <q-card>

    <modal-header>Add Task</modal-header>

    <q-form
      @submit.prevent="submitForm"
      class="q-gutter-md">

      <q-card-section class="q-pt-none">
        <!-- .sync is used because we are emitting from the component -->
        <modal-task-name :name.sync="taskToSubmit.name" />
        <modal-task-date :dueDate.sync="taskToSubmit.dueDate" />


        <q-input v-if="taskToSubmit.dueDate" outlined v-model="taskToSubmit.dueTime" mask="time" label="Due time">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input v-model="taskToSubmit.comment" label="Notes" />
      </q-card-section>

      <q-card-actions align="right">
        <!-- v-close-popup -->
        <q-btn label="Save" color="primary" type="submit"/>
      </q-card-actions>

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
        comment: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      }
    }
  },
  components: {
    'modal-header': require('../Shared/ModalHeader').default,
    'modal-task-name': require('../Shared/ModalTaskName').default,
    'modal-task-date': require('../Shared/ModalTaskDate').default
  },
  methods: {
    // The ref called name was place inside the QInput for the task name
    ...mapActions('tasks', ['addTask']),

    submitForm() {
      // console.log(this.$refs.name)
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
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