<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-indigo">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="absolute-center">
          Awesome To-Do
        </q-toolbar-title>

        <q-btn
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right" />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="220"
      show-if-above
      bordered
      content-class="bg-indigo-6"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
            <q-item-label caption> {{ nav.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
        <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          :icon="nav.icon"
          :label="nav.label" />
        </q-tabs>
      </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'To-do',
          caption: 'Your to-dos',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          caption: 'App Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
  @media screen and (min-width: 768px)
    .q-footer
      display: none

  .q-drawer
    .q-router-link--exact-active
      color: $amber-cust

</style>