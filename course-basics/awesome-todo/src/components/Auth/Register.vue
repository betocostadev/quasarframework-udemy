<template>
  <form>
    <div class="row q-mb-md">
      <q-banner class="col bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register to Awesome Todo
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        class="col"
        outlined
        v-model="formData.email"
        label="Email"
        stack-label />
    </div>
    <div class="row q-mb-md">
      <q-input
        class="col"
        outlined
        v-model="formData.password"
        label="Password"
        stack-label />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>