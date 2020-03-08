<template>
  <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight absolute-top"
    >
    <q-banner class="bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="check" color="primary" />
        </template>
        <slot></slot>
        <template v-slot:action>
          <!-- Using the Root Event - Global Even Bus: https://quasar.dev/options/global-event-bus -->
          <q-btn
            @click="$root.$emit('showAddTask')"
            flat
            color="primary"
            label="Add Task" />
        </template>
    </q-banner>
  </transition>
</template>

<script>
export default {


}
</script>

<style>

</style>