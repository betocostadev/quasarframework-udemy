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
  search: 'Tes==t'
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
  }
}

const getters = {
  tasksTodo: (state) => {
    let tasks = { }
    Object.keys(state.tasks).forEach((key) => {
      let task = state.tasks[key]
      // console.log('task:', task)
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state) => {
    let tasks = { }
    Object.keys(state.tasks).forEach((key) => {
      let task = state.tasks[key]
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