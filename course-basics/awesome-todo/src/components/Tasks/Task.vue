<template>
  <!-- <q-item-label header class="text-center">TO-DO</q-item-label> -->
  <!-- The v-for was changed since we are using an object. Now the (task, key) will get the object key. -->
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    v-touch-hold:1000.mouse="editOnHold"
    clickable
    :class="!task.completed ? 'bg-amber-1' : 'bg-green-1'"
    tag="label"
    v-ripple>
    <q-item-section side top>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
        color="teal" />
    </q-item-section>

<!-- Added v-html below due to the SEARCH. Otherwise VUE would display the <span> with the filter -->
    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough' : task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      >{{ task.name | searchHighlight(search) }}
      </q-item-label>

      <q-item-label
        caption
        v-html="$options.filters.searchHighlight(task.note, search)">
        {{ task.note | searchHighlight(search) }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            v-if="task.dueDate"
            color="secondary"
            name="event"
            size="18px"
            class="q-mr-md"
            />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption>
            {{ task.dueDate | niceDate }}
          </q-item-label>

          <q-item-label
            class="row justify-end"
            caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        <!-- <q-icon name="star" color="yellow" /> -->
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit" />
        <!-- Using .stop to stop propagation and don't trigger the click event of the task -->
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="negative"
          icon="delete_forever" />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task
        @close="showEditTask = false"
        :task="task"
        :id="id">
      </edit-task>
    </q-dialog>

  </q-item>
      <!-- <q-separator spaced /> -->
      <!-- <q-item-label header>Notifications</q-item-label> -->
</template>

<script>
import { mapState, mapActions } from "vuex"
import { date } from 'quasar'
const { addToDate, formatDate } = date
// const { formatDate } = date

export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  components: {
    'edit-task': require('./Modals/EditTask').default
  },
    computed: {
    ...mapState('tasks', ['search'])
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'D MMM')
    },
    // Using the regEx here to make it case insensitive
    searchHighlight(value, search) {
      let searchRegExp = new RegExp(search, 'ig')
      if (search) {
        return value.replace(searchRegExp, (match) => `<span class="bg-yellow-6">${match}</span>`)
      }
      return value
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
       this.$q.dialog({
        title: 'Confirm',
        message: 'Do you really want to delete this task?',
        ok: {
          push: true,
          color: 'negative'
        },
        cancel: {
          push: true,
          color: 'primary'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    },
    editOnHold(id) {
      this.showEditTask = true
    }
  },
}
</script>

<style lang="stylus">

</style>
