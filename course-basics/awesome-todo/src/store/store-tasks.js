// We will import vue here because we will not use 'delete object method'. We will use a vue method to keep the component reactive
// Generate UID - Quasar component https://quasar.dev/quasar-utils/other-utils#Generate-UID
import Vue from "vue"
import { uid } from 'quasar'

// The tasks array was changed for an object because we will use Firebase.
// Firebase will create objects inside objects inside objects...
const state = {
  tasks: {
    'ID1': {
      name: 'Quasar Video 75',
      comment: 'Complete it today',
      completed: false,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    },
    'ID2': {
      name: 'Quasar Video 76',
      comment: 'Complete it today',
      completed: false,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    },
    'ID3': {
      name: 'Complete Scrimba Vuex',
      comment: 'Complete it today',
      completed: true,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    }
  },
  search: ''
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // delete state.tasks.id //it works, but its not recommended to use with vue
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },

  setSearch(state, value) {
    state.search = value
  }
}

// Pass the payload: ( {}, payload )
// We use the commit to update the mutation
const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },

  setSearch({ commit }, value) {
    commit('setSearch', value)
  }
}

const getters = {
  // Tasks filtered for the search
  tasksFiltered: (state) => {
    let tasksFiltered = {}
    if (state.search) {
      Object.keys(state.tasks).forEach((key) => {
        let task = state.tasks[key]
        if (task.name.toLowerCase().includes(state.search.toLowerCase()) || task.comment.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return state.tasks
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach((key) => {
      let task = tasksFiltered[key]
      // console.log('task:', task)
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach((key) => {
      let task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}

// Using namespace we are allowed to have multiple store modules in our app

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}