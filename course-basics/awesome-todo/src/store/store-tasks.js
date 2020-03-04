// We will import vue here because we will not use 'delete object method'. We will use a vue method to keep the component reactive
// Generate UID - Quasar component https://quasar.dev/quasar-utils/other-utils#Generate-UID
import Vue from "vue"
import { uid } from 'quasar'

// The tasks array was changed for an object because we will use Firebase.
// Firebase will create objects inside objects inside objects...
const state = {
  tasks: {
    'ID1': {
      name: 'Quasar Video 91',
      note: 'Completed',
      completed: true,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    },
    'ID2': {
      name: 'Quasar Video 93',
      note: 'Complete it today',
      completed: false,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    },
    'ID3': {
      name: 'Complete Scrimba Vuex',
      note: 'Gone for good',
      completed: true,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    },
    'ID4': {
      name: 'Act of fight',
      note: 'Gone for good',
      completed: false,
      dueDate: '2020/03/03',
      dueTime: '18:00'
    }
  },
  search: '',
  sort: 'name'
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
  },

  setSort(state, value) {
    state.sort = value
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
  },

  setSort({ commit }, value) {
    commit('setSort', value)
  }
}

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {},
        keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
          taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })
    // console.log('keysOrdered', keysOrdered)

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })
    console.log('keysOrdered', keysOrdered);


    return tasksSorted
  },
  // Tasks filtered for the search
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted
    let tasksFiltered = {}
    if (state.search) {
      Object.keys(tasksSorted).forEach((key) => {
        let task = tasksSorted[key]
        if (task.name.toLowerCase().includes(state.search.toLowerCase()) || task.note.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return tasksSorted
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