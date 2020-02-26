<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat round dense color="negative" icon="close" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row">
        <q-input outlined v-model="taskToSubmit.name" label="TASK" class="col"/>
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
      <q-btn flat label="Save" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
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
  }
}
</script>

<style>

</style>