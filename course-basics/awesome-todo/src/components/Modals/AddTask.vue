<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat round dense color="negative" icon="close" />
    </q-card-section>

    <q-form
      @submit.prevent="submitForm"
      class="q-gutter-md">

      <q-card-section class="q-pt-none">
        <div class="row">
          <q-input
            autofocus
            outlined
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Field is required']"
            ref="name"
            label="TASK"
            class="col"/>
        </div>

        <q-input outlined v-model="taskToSubmit.dueDate" mask="date" label="Due date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input outlined v-model="taskToSubmit.dueTime" mask="time" label="Due time">
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