// We will import vue here because we will not use 'delete object method'. We will use a vue method to keep the component reactive
// Generate UID - Quasar component https://quasar.dev/quasar-utils/other-utils#Generate-UID
import Vue from "vue"
import { uid } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'

// The tasks array was changed for an object because we will use Firebase.
// Firebase will create objects inside objects inside objects...
const state = {
  tasks: {
    // 'ID1': {
    //   name: 'Quasar Section 14',
    //   note: 'Completed',
    //   completed: true,
    //   dueDate: '2020/08/03',
    //   dueTime: '18:00'
    // },
    // 'ID2': {
    //   name: 'Quasar Section 15',
    //   note: 'Complete it today',
    //   completed: false,
    //   dueDate: '2020/08/03',
    //   dueTime: '19:00'
    // }
  },
  search: '',
  sort: 'name',
  tasksDownloaded: false
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
  },

  setTasksDownloaded(state, value) {
    state.tasksDownloaded = value
  }
}

// Pass the payload: ( {}, payload )
// We use the commit to update the mutation
const actions = {
  updateTask({ dispatch }, payload) {
    dispatch('firebaseUpdateTask', payload)
  },

  deleteTask({ dispatch }, id) {
    dispatch('firebaseDeleteTask', id)
  },
  // Changed from commit to dispatch, since we are using Firebase now
  addTask({ dispatch }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    dispatch('firebaseAddTask', payload)
  },

  setSearch({ commit }, value) {
    commit('setSearch', value)
  },

  setSort({ commit }, value) {
    commit('setSort', value)
  },

  firebaseReadData({ commit }) {
    // Reading data from Firebase
    let userId = firebaseAuth.currentUser.uid
    let userTasks = firebaseDb.ref(`tasks/${userId}`)

    // Initial check for data
    userTasks.once('value', snapshot => {
      commit('setTasksDownloaded', true)
    })

    // Child added - When a task is added
    userTasks.on('child_added', snapshot => {
      // console.log('Snapshot: ', snapshot)
      let task = snapshot.val()
      // console.log('Task: ', task)

      let payload = {
        id: snapshot.key,
        task: task
      }
      commit('addTask', payload)
    })
    // Child changed - Task update, like completed: true
    userTasks.on('child_changed', snapshot => {
      let task = snapshot.val()
      let payload = {
        id: snapshot.key,
        updates: task
      }
      commit('updateTask', payload)
    })
    // Child removed - A task is deleted
    userTasks.on('child_removed', snapshot => {
      let taskId = snapshot.key
      commit('deleteTask', taskId)
    })
  },

  firebaseAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`)
    taskRef.set(payload.task)
  },

  firebaseUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`)
    taskRef.update(payload.updates)
    // Testar se isso aqui vai funcionar melhor sem o updates.
    // Vai ter que arrumar no firebase porque o upload está errado. Adicione as novas tasks
  },

  firebaseDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref(`tasks/${userId}/${taskId}`)
    taskRef.remove()
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
    // console.log('keysOrdered', keysOrdered)

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