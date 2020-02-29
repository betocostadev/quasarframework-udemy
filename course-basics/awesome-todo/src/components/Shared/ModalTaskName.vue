<template>
<!-- Notice that we changed the name to :value="name" and added props.
Still wasn't working. It's needed to pass the information back to this component, so it can
check for changes and work. That's why the @input was added. -->
<!-- IMPORTANT: in the $emit('update:name') it was not working just becase of a space!
$emit('update: name') was not working!!! -->
    <div class="row">
      <q-input
        autofocus
        outlined
        clearable
        :value="name"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        ref="name"
        label="TASK"
        class="col q-mb-sm" />
    </div>
</template>

<script>
export default {
  props: [ 'name' ]
}
</script>

<style>

</style>