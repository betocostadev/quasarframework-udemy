<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <!-- <q-item-label header class="text-center">TO-DO</q-item-label> -->

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="tasks.completed = !tasks.completed"
        clickable
        :class="!task.completed ? 'bg-amber-1' : 'bg-green-1'"
        tag="label"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" color="teal" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strikethrough' : task.completed }"
          >{{task.name}}
          </q-item-label>
          <q-item-label caption>
            {{task.comment}}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                name="event"
                size="18px"
                class="q-mr-xs"
                />
            </div>
            <div class="column">
              <q-item-label
                class="row justify-end"
                caption>
                {{task.dueDate}}
              </q-item-label>

              <q-item-label
                class="row justify-end"
                caption>
                <small>{{task.dueTime}}</small>
              </q-item-label>
            <!-- <q-icon name="star" color="yellow" /> -->
            </div>
          </div>
        </q-item-section>
      </q-item>

      <!-- <q-separator spaced /> -->
      <!-- <q-item-label header>Notifications</q-item-label> -->

    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
    }
  },
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