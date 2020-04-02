<template>
<!-- Notice that we changed the name to :value="name" and added props.
Still wasn't working. It's needed to pass the information back to this component, so it can
check for changes and work. That's why the @input was added. -->
<!-- IMPORTANT: in the $emit('update:name') it was not working just becase of a space!
$emit('update: name') was not working!!!
Also, notice that v-select-all is a directive and inside the directives, it becomes camel case-->
    <div class="row">
      <q-input
        autofocus
        outlined
        clearable
        v-select-all
        :value="name"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        ref="name"
        label="TASK"
        class="col q-mb-sm" />
    </div>
</template>

<script>
import { selectAll } from '../../directives/directive-select-all'
export default {
  props: [ 'name' ],
  directives: {
    // This directive will make the text in the name section be selected automatically if there is any text
    selectAll
  }
}
</script>

<style>

</style>